import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { db } from "~/db";
import { HetznerApiClient } from "~/lib/hetzner-api";
import type { VerifiedContext } from "~/types/middleware-context";

const SetApiTokenSchema = z.object({
	apiToken: z.string().min(1, "API token is required"),
});

export const setHetznerApiToken = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		
		// Security: Mask sensitive data in logs
		const maskToken = (token: string) => 
			token.length > 8 ? `${token.substring(0, 4)}...${token.substring(token.length - 4)}` : "***";
		
		// Debug logging (only in development)
		if (process.env.NODE_ENV === "development") {
			console.log("[setHetznerApiToken] Data type:", typeof data);
			console.log("[setHetznerApiToken] Is object?", typeof data === "object");
			if (data && typeof data === "object" && "apiToken" in data) {
				const token = String(data.apiToken);
				console.log("[setHetznerApiToken] Token (masked):", maskToken(token));
			}
		}
		
		if (!data || typeof data !== "object" || !("apiToken" in data)) {
			throw new Error(`apiToken is required. Received: ${JSON.stringify(data)}`);
		}
		
		const { apiToken } = SetApiTokenSchema.parse(data);

		// Validate the token by making a test API call
		const client = new HetznerApiClient(apiToken);
		try {
			await client.listServers();
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(`Invalid API token: ${error.message}`);
			}
			throw new Error("Invalid API token");
		}

		// Store the token (encrypted via Prisma field encryption)
		await db.hetznerApiToken.upsert({
			where: { extensionInstanceId },
			create: {
				extensionInstanceId,
				apiToken,
			},
			update: {
				apiToken,
			},
		});

		return { success: true };
	});

