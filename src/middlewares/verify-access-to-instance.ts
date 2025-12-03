import { getConfig, getSessionToken } from "@mittwald/ext-bridge/browser";
import { verify } from "@mittwald/ext-bridge/node";
import { createMiddleware } from "@tanstack/react-start";

export const verifyAccessToInstance = createMiddleware({
	type: "function",
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
		const contextWithToken = context as unknown as { 
			sessionToken: string; 
			projectId?: string;
		};
		if (!contextWithToken || !contextWithToken.sessionToken) {
			throw new Error("Context with sessionToken is required");
		}
		const res = await verify(contextWithToken.sessionToken);

		// With inputValidator, data should now be available in middleware
		// inputValidator parses the body BEFORE middleware runs
		// Security: Only log in development, don't log sensitive data
		if (process.env.NODE_ENV === "development") {
			console.log("[verifyAccessToInstance.server] Data type:", typeof data);
			console.log("[verifyAccessToInstance.server] Data is null?", data === null);
			// Don't log actual data - could contain sensitive information
		}
		
		// Pass data through - inputValidator ensures it's parsed before middleware
		return (next as any)({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: contextWithToken.projectId,
			},
			data, // Data should now be available thanks to inputValidator
		});
	});
