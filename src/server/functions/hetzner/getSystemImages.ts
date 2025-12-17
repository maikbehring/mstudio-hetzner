import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

export const getSystemImages = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		const client = await getHetznerClient(extensionInstanceId);
		return await client.listSystemImages();
	});




