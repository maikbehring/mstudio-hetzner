import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

const AssignResourceSchema = z.object({
	resourceType: z.enum(["server", "volume", "floating_ip", "primary_ip", "load_balancer", "network", "firewall"]),
	resourceId: z.string(),
	resourceName: z.string().optional(),
	mittwaldProjectId: z.string().nullable().optional(),
	mittwaldCustomerId: z.string().nullable().optional(),
	tags: z.array(z.string()).optional().default([]),
});

export const assignHetznerResource = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		const parsedData = AssignResourceSchema.parse(data);

		const assignment = await db.hetznerResourceAssignment.upsert({
			where: {
				extensionInstanceId_resourceType_resourceId: {
					extensionInstanceId,
					resourceType: parsedData.resourceType,
					resourceId: parsedData.resourceId,
				},
			},
			create: {
				extensionInstanceId,
				resourceType: parsedData.resourceType,
				resourceId: parsedData.resourceId,
				resourceName: parsedData.resourceName,
				mittwaldProjectId: parsedData.mittwaldProjectId ?? null,
				mittwaldCustomerId: parsedData.mittwaldCustomerId ?? null,
				tags: parsedData.tags ?? [],
			},
			update: {
				resourceName: parsedData.resourceName,
				mittwaldProjectId: parsedData.mittwaldProjectId ?? null,
				mittwaldCustomerId: parsedData.mittwaldCustomerId ?? null,
				tags: parsedData.tags ?? [],
			},
		});

		return { assignment };
	});

