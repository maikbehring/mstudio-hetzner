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
		console.log("[verifyAccessToInstance.server] Data is null?", data === null);
		console.log("[verifyAccessToInstance.server] Data is undefined?", data === undefined);
		
		// Explicitly pass data through - TanStack Start should handle it automatically,
		// but in production with middleware, we need to be explicit
		// Using type assertion to bypass TypeScript type checking while maintaining runtime correctness
		return (next as any)({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: context.projectId,
			},
			data, // Explicitly pass data through
		});
	});
