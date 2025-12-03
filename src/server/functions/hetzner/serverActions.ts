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
		const { extensionInstanceId } = context;
		
		// Debug logging
		console.log("[performServerAction] Received data:", JSON.stringify(data, null, 2));
		console.log("[performServerAction] Data type:", typeof data);
		console.log("[performServerAction] Is null?", data === null);
		console.log("[performServerAction] Is undefined?", data === undefined);
		
		// Handle case where data might be null or undefined
		if (data === null || data === undefined) {
			throw new Error(`serverId and action are required. Received: ${data === null ? "null" : "undefined"}`);
		}
		
		if (typeof data !== "object") {
			throw new Error(`Expected object, received: ${typeof data}`);
		}
		
		if (!("serverId" in data) || !("action" in data)) {
			throw new Error(`serverId and action are required. Received keys: ${Object.keys(data).join(", ")}`);
		}
		
		const dataObj = data as { serverId: unknown; action: unknown };
		const parsed = ServerActionSchema.parse({ 
			serverId: String(dataObj.serverId), 
			action: dataObj.action 
		});
		
		console.log("[performServerAction] Parsed:", parsed);

		const client = await getHetznerClient(extensionInstanceId);

		let result;
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

		return { action: result };
	});

