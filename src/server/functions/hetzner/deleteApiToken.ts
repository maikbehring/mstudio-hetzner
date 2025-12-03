import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

export const deleteHetznerApiToken = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;

		await db.hetznerApiToken.deleteMany({
			where: { extensionInstanceId },
		});

		return { success: true };
	});

