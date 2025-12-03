import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

const GetServerParamsSchema = z.object({
	serverId: z.string().transform((val) => parseInt(val, 10)),
});

export const getHetznerServer = createServerFn()
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		if (!data || typeof data !== "object" || !("serverId" in data)) {
			throw new Error("serverId parameter is required");
		}
		const { serverId } = GetServerParamsSchema.parse(data);
		const client = await getHetznerClient(extensionInstanceId);

		const server = await client.getServer(serverId);

		// Fetch assignment
		const assignment = await db.hetznerResourceAssignment.findUnique({
			where: {
				extensionInstanceId_resourceType_resourceId: {
					extensionInstanceId,
					resourceType: "server",
					resourceId: String(serverId),
				},
			},
		});

		// Fetch notes
		const notes = await db.hetznerResourceNote.findMany({
			where: {
				extensionInstanceId,
				resourceType: "server",
				resourceId: String(serverId),
			},
			orderBy: { createdAt: "desc" },
		});

		return {
			server,
			assignment: assignment
				? {
						mittwaldProjectId: assignment.mittwaldProjectId,
						mittwaldCustomerId: assignment.mittwaldCustomerId,
						tags: assignment.tags,
						resourceName: assignment.resourceName,
					}
				: null,
			notes,
		};
	});

