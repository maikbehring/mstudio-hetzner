import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

const CreateServerSchema = z.object({
	name: z.string()
		.min(1)
		.max(63)
		.regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, 
			"Must be a valid hostname (RFC 1123)"),
	server_type: z.string().min(1, "Server type is required"),
	image: z.string().min(1, "Image is required"),
	location: z.string().optional(),
	datacenter: z.string().optional(),
	start_after_create: z.boolean().default(true),
	ssh_keys: z.array(z.union([z.string(), z.number()])).optional(),
	volumes: z.array(z.number()).optional(),
	networks: z.array(z.number()).optional(),
	firewalls: z.array(z.object({ firewall: z.number() })).optional(),
	placement_group: z.number().optional(),
	user_data: z.string().max(32 * 1024).optional(), // Max 32KiB
	labels: z.record(z.string()).optional(),
	automount: z.boolean().optional(),
	public_net: z.object({
		enable_ipv4: z.boolean().optional(),
		enable_ipv6: z.boolean().optional(),
		ipv4: z.number().optional(),
		ipv6: z.number().optional(),
	}).optional(),
}).refine(
	(data) => !(data.location && data.datacenter),
	{ message: "Cannot specify both location and datacenter" }
);

export const createServer = createServerFn({ method: "POST" })
	.inputValidator(zodValidator(CreateServerSchema))
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }) => {
		try {
			const { extensionInstanceId } = context as unknown as VerifiedContext;
			const parsed = data as z.infer<typeof CreateServerSchema>;
			
			console.log("[createServer] Received data:", {
				name: parsed.name,
				server_type: parsed.server_type,
				image: parsed.image,
				location: parsed.location,
			});
			
			const client = await getHetznerClient(extensionInstanceId);
			
			// Hetzner API accepts image as string (name) or number (ID)
			// We'll pass it as-is since the API client handles both
			const serverConfig = {
				name: parsed.name,
				server_type: parsed.server_type,
				image: parsed.image, // Keep as string, Hetzner API accepts both
				location: parsed.location,
				start_after_create: parsed.start_after_create ?? true,
			};
			
			console.log("[createServer] Calling Hetzner API with config:", serverConfig);
			
			const result = await client.createServer(serverConfig);
			
			console.log("[createServer] Server created successfully, ID:", result.server?.id);
			
			// Root-Passwort wird sicher zurückgegeben (nicht geloggt)
			return result;
		} catch (error) {
			console.error("[createServer] Error creating server:", error);
			if (error instanceof Error) {
				throw new Error(`Failed to create server: ${error.message}`);
			}
			throw new Error("Failed to create server");
		}
	});

