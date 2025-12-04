import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

const ResetRootPasswordSchema = z.object({
	serverId: z.union([z.string(), z.number()]).transform((val) =>
		typeof val === "string" ? parseInt(val, 10) : val
	),
});

export const resetRootPassword = createServerFn({ method: "POST" })
	.inputValidator(zodValidator(ResetRootPasswordSchema))
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: unknown; data: unknown }) => {
		try {
			const { extensionInstanceId } = context as unknown as VerifiedContext;
			const parsed = data as z.infer<typeof ResetRootPasswordSchema>;

			if (process.env.NODE_ENV === "development") {
				console.log("[resetRootPassword] Resetting password for server:", parsed.serverId);
			}

			const client = await getHetznerClient(extensionInstanceId);

			// Check server status first - must be running
			const server = await client.getServer(parsed.serverId);
			if (server.status !== "running") {
				throw new Error("Server must be running to reset root password. Current status: " + server.status);
			}

			// Reset root password
			const result = await client.resetRootPassword(parsed.serverId);

			if (process.env.NODE_ENV === "development") {
				console.log("[resetRootPassword] Password reset successful");
			}

			// Return result with root_password (will be shown to user)
			return result;
		} catch (error) {
			console.error("[resetRootPassword] Error resetting password:", error);
			if (error instanceof Error) {
				throw new Error(`Failed to reset root password: ${error.message}`);
			}
			throw new Error("Failed to reset root password");
		}
	});

