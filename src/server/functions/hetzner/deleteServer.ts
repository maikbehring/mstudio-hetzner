import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

const DeleteServerSchema = z.object({
	serverId: z.union([z.string(), z.number()]).transform((val) =>
		typeof val === "string" ? parseInt(val, 10) : val
	),
});

export const deleteServer = createServerFn({ method: "POST" })
	.inputValidator(zodValidator(DeleteServerSchema))
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: unknown; data: unknown }) => {
		try {
			const { extensionInstanceId } = context as unknown as VerifiedContext;
			const parsed = data as z.infer<typeof DeleteServerSchema>;

			if (process.env.NODE_ENV === "development") {
				console.log("[deleteServer] Deleting server:", parsed.serverId);
			}

			const client = await getHetznerClient(extensionInstanceId);

			// Delete server from Hetzner
			let action;
			try {
				action = await client.deleteServer(parsed.serverId);
			} catch (apiError) {
				console.error("[deleteServer] Hetzner API error:", apiError);
				throw new Error(
					`Failed to delete server: ${apiError instanceof Error ? apiError.message : String(apiError)}`
				);
			}

			// Clean up database: remove assignment and notes
			const serverIdString = String(parsed.serverId);
			try {
				// Delete assignment if it exists
				await db.hetznerResourceAssignment.deleteMany({
					where: {
						extensionInstanceId,
						resourceType: "server",
						resourceId: serverIdString,
					},
				});

				// Delete notes if they exist
				await db.hetznerResourceNote.deleteMany({
					where: {
						extensionInstanceId,
						resourceType: "server",
						resourceId: serverIdString,
					},
				});
			} catch (dbError) {
				// Log but don't fail - server is already deleted from Hetzner
				console.error("[deleteServer] Database cleanup error:", dbError);
			}

			return { action, success: true };
		} catch (error) {
			console.error("[deleteServer] Unhandled error:", error);
			throw error;
		}
	});

