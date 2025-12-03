import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { db } from "~/db";
import { HETZNER_API_TOKEN } from "~/env";
import type { VerifiedContext } from "~/types/middleware-context";

export const getHetznerApiToken = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;

		// First, check if API token is set in environment variables (for testing)
		if (HETZNER_API_TOKEN && HETZNER_API_TOKEN.trim() !== "") {
			return {
				hasToken: true,
				source: "environment",
			};
		}

		// Otherwise, check database
		const token = await db.hetznerApiToken.findUnique({
			where: { extensionInstanceId },
			select: {
				id: true,
				createdAt: true,
				updatedAt: true,
				// Don't return the actual token for security
			},
		});

		return {
			hasToken: !!token,
			configuredAt: token?.createdAt,
			source: token ? "database" : "none",
		};
	});

