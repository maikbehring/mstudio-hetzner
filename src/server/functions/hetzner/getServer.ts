import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

const GetServerParamsSchema = z.object({
	serverId: z.union([z.string(), z.number()]).transform((val) =>
		typeof val === "string" ? parseInt(val, 10) : val
	),
});

export const getHetznerServer = createServerFn({ method: "GET" })
	.inputValidator(zodValidator(GetServerParamsSchema))
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: unknown; data: unknown }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		const parsed = data as z.infer<typeof GetServerParamsSchema>;
		const { serverId } = parsed;
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

