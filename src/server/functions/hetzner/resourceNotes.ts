import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

const CreateNoteSchema = z.object({
	resourceType: z.enum(["server", "volume", "floating_ip", "primary_ip", "load_balancer", "network", "firewall"]),
	resourceId: z.string(),
	note: z.string().min(1, "Note cannot be empty"),
});

export const createResourceNote = createServerFn()
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		const { extensionInstanceId, userId } = context as unknown as VerifiedContext;
		if (!data || typeof data !== "object") {
			throw new Error("resourceType, resourceId, and note are required");
		}
		const parsedData = CreateNoteSchema.parse(data);

		const note = await db.hetznerResourceNote.create({
			data: {
				extensionInstanceId,
				resourceType: parsedData.resourceType,
				resourceId: parsedData.resourceId,
				note: parsedData.note,
				createdBy: userId,
			},
		});

		return { note };
	});

const DeleteNoteSchema = z.object({
	noteId: z.string(),
});

export const deleteResourceNote = createServerFn()
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		const { noteId: id } = DeleteNoteSchema.parse({ noteId: String(data) });

		await db.hetznerResourceNote.delete({
			where: {
				id,
				extensionInstanceId, // Ensure user can only delete notes from their instance
			},
		});

		return { success: true };
	});

