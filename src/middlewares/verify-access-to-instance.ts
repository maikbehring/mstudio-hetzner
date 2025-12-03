import { getConfig, getSessionToken } from "@mittwald/ext-bridge/browser";
import { verify } from "@mittwald/ext-bridge/node";
import { createMiddleware } from "@tanstack/react-start";

export const verifyAccessToInstance = createMiddleware({
	type: "function",
	validateClient: true,
})
	.client(async ({ next, data }) => {
		const sessionToken = await getSessionToken();
		const config = await getConfig();

		// WORKAROUND: TanStack Start v1.131.48 has a bug where POST request body data
		// doesn't get passed through middleware correctly. We pass data both as
		// the data parameter AND in sendContext as a workaround.
		const sendContext: {
			sessionToken: string;
			projectId: string | undefined;
			_data?: unknown;
		} = {
			sessionToken,
			projectId: config.projectId,
		};
		
		// Pass data in sendContext as workaround for middleware bug
		if (data && typeof data === "object") {
			sendContext._data = data;
		}
		
		return (next as any)({
			sendContext,
			data, // Also pass as data parameter (may be lost due to bug)
		});
	})
	.server(async ({ next, context, data }) => {
		const contextWithToken = context as unknown as { 
			sessionToken: string; 
			projectId?: string;
			_data?: unknown; // Workaround: data passed via sendContext
		};
		if (!contextWithToken || !contextWithToken.sessionToken) {
			throw new Error("Context with sessionToken is required");
		}
		const res = await verify(contextWithToken.sessionToken);

		// WORKAROUND: TanStack Start v1.131.48 has a bug where POST request body data
		// doesn't get passed through middleware correctly. We use data from sendContext
		// (_data) as fallback if the data parameter is null/undefined.
		let parsedData: unknown = data;
		
		if ((parsedData === null || parsedData === undefined) && contextWithToken._data !== undefined) {
			parsedData = contextWithToken._data;
			console.log("[verifyAccessToInstance.server] Using data from sendContext workaround:", parsedData);
		}

		// Debug logging
		console.log("[verifyAccessToInstance.server] Received data:", data);
		console.log("[verifyAccessToInstance.server] Parsed data:", parsedData);
		console.log("[verifyAccessToInstance.server] Data type:", typeof parsedData);
		console.log("[verifyAccessToInstance.server] Data is null?", parsedData === null);
		
		// Pass the parsed data through to the handler
		return (next as any)({
			context: {
				extensionInstanceId: res.extensionInstanceId,
				extensionId: res.extensionId,
				userId: res.userId,
				contextId: res.contextId,
				projectId: contextWithToken.projectId,
			},
			data: parsedData, // Use data from sendContext if data parameter is null
		});
	});
