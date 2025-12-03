import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";

const ServerActionSchema = z.object({
	serverId: z.string().transform((val) => parseInt(val, 10)),
	action: z.enum(["poweron", "poweroff", "reboot", "shutdown"]),
});

export const performServerAction = createServerFn({ method: "POST" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		try {
			const { extensionInstanceId } = context;
			
			// Debug logging
			console.log("[performServerAction] Received data:", JSON.stringify(data, null, 2));
			console.log("[performServerAction] Data type:", typeof data);
			console.log("[performServerAction] Is null?", data === null);
			console.log("[performServerAction] Is undefined?", data === undefined);
			
			// Handle case where data might be null or undefined
			if (data === null || data === undefined) {
				const error = new Error(`serverId and action are required. Received: ${data === null ? "null" : "undefined"}`);
				console.error("[performServerAction] Error:", error.message);
				throw error;
			}
			
			if (typeof data !== "object") {
				const error = new Error(`Expected object, received: ${typeof data}`);
				console.error("[performServerAction] Error:", error.message);
				throw error;
			}
			
			if (!("serverId" in data) || !("action" in data)) {
				const error = new Error(`serverId and action are required. Received keys: ${Object.keys(data).join(", ")}`);
				console.error("[performServerAction] Error:", error.message);
				throw error;
			}
			
			const dataObj = data as { serverId: unknown; action: unknown };
			let parsed;
			try {
				parsed = ServerActionSchema.parse({ 
					serverId: String(dataObj.serverId), 
					action: dataObj.action 
				});
			} catch (parseError) {
				console.error("[performServerAction] Parse error:", parseError);
				throw new Error(`Invalid input: ${parseError instanceof Error ? parseError.message : String(parseError)}`);
			}
			
			console.log("[performServerAction] Parsed:", parsed);

			const client = await getHetznerClient(extensionInstanceId);

			let result;
			try {
				switch (parsed.action) {
					case "poweron":
						result = await client.powerOnServer(parsed.serverId);
						break;
					case "poweroff":
						result = await client.powerOffServer(parsed.serverId);
						break;
					case "reboot":
						result = await client.rebootServer(parsed.serverId);
						break;
					case "shutdown":
						result = await client.shutdownServer(parsed.serverId);
						break;
					default:
						throw new Error(`Unknown action: ${parsed.action}`);
				}
			} catch (apiError) {
				console.error("[performServerAction] Hetzner API error:", apiError);
				throw new Error(`Failed to perform server action: ${apiError instanceof Error ? apiError.message : String(apiError)}`);
			}

			return { action: result };
		} catch (error) {
			console.error("[performServerAction] Unhandled error:", error);
			throw error;
		}
	});

