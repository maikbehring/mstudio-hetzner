import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

const UnassignResourceSchema = z.object({
	resourceType: z.enum(["server", "volume", "floating_ip", "primary_ip", "load_balancer", "network", "firewall"]),
	resourceId: z.string(),
});

export const unassignHetznerResource = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		const parsedData = UnassignResourceSchema.parse(data);

		await db.hetznerResourceAssignment.delete({
			where: {
				extensionInstanceId_resourceType_resourceId: {
					extensionInstanceId,
					resourceType: parsedData.resourceType,
					resourceId: parsedData.resourceId,
				},
			},
		});

		return { success: true };
	});

