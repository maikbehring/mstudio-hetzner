import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { db } from "~/db";

export const deleteHetznerApiToken = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		const { extensionInstanceId } = context;

		await db.hetznerApiToken.deleteMany({
			where: { extensionInstanceId },
		});

		return { success: true };
	});

