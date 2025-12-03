import { getConfig, getSessionToken } from "@mittwald/ext-bridge/browser";
import { verify } from "@mittwald/ext-bridge/node";
import { createMiddleware } from "@tanstack/react-start";

export const verifyAccessToInstance = createMiddleware({
	type: "function",
	validateClient: true,
})
	.client(async ({ next }) => {
		const sessionToken = await getSessionToken();
		const config = await getConfig();

		return next({
			sendContext: {
				sessionToken,
				projectId: config.projectId,
			},
		});
	})
	.server(async ({ next, context, data }) => {
		const res = await verify(context.sessionToken);

		// Debug logging to see what data we receive
		console.log("[verifyAccessToInstance.server] Received data:", data);
		console.log("[verifyAccessToInstance.server] Data type:", typeof data);
		
		// Don't explicitly pass data - TanStack Start handles it automatically
		// But we log it to debug why it might be null
		return next({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: context.projectId,
			},
		});
	});
