import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import { db } from "~/db";

export const listHetznerServers = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		const { extensionInstanceId } = context;
		const client = await getHetznerClient(extensionInstanceId);

		const { servers, meta } = await client.listServers();

		// Fetch assignments for all servers
		const assignments = await db.hetznerResourceAssignment.findMany({
			where: {
				extensionInstanceId,
				resourceType: "server",
				resourceId: {
					in: servers.map((s) => String(s.id)),
				},
			},
		});

		const assignmentMap = new Map(
			assignments.map((a) => [a.resourceId, a]),
		);

		// Enrich servers with assignment data
		const enrichedServers = servers.map((server) => {
			const assignment = assignmentMap.get(String(server.id));
			return {
				...server,
				assignment: assignment
					? {
							mittwaldProjectId: assignment.mittwaldProjectId,
							mittwaldCustomerId: assignment.mittwaldCustomerId,
							tags: assignment.tags,
							resourceName: assignment.resourceName,
						}
					: null,
			};
		});

		return {
			servers: enrichedServers,
			meta,
		};
	});





