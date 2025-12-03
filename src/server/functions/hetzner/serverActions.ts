import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

const ServerActionSchema = z.object({
	serverId: z.union([z.string(), z.number()]).transform((val) => 
		typeof val === "string" ? parseInt(val, 10) : val
	),
	action: z.enum(["poweron", "poweroff", "reboot", "shutdown"]),
});

// SOLUTION: Use inputValidator in TanStack Start v1.139.14+
// inputValidator parses body BEFORE middleware runs
export const performServerAction = createServerFn({ method: "POST" })
	.inputValidator(zodValidator(ServerActionSchema))
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: unknown; data: unknown }) => {
		try {
			// Type assertion needed because middleware uses 'as any' to pass data
			const { extensionInstanceId } = context as unknown as VerifiedContext;
			
			// data is now guaranteed to be validated and typed by inputValidator
			// It will be available in middleware and handler
			console.log("[performServerAction] Received validated data:", data);
			
			// data is already validated and parsed by inputValidator
			const parsed = data as z.infer<typeof ServerActionSchema>;

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

