import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";
import type { CreateServerRequest } from "~/lib/hetzner-api";

const CreateServerSchema = z.object({
	name: z.string()
		.min(1)
		.max(63)
		.transform((val) => {
			// Clean up the name to match RFC 1123 hostname requirements
			// Convert to lowercase, replace spaces and underscores with hyphens
			// Remove invalid characters, ensure it starts and ends with alphanumeric
			let cleaned = val
				.toLowerCase()
				.replace(/[^a-z0-9.-]/g, "-") // Replace invalid chars with hyphens
				.replace(/\.+/g, ".") // Replace multiple dots with single dot
				.replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
				.replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, ""); // Remove leading/trailing non-alphanumeric
			
			// Ensure it starts and ends with alphanumeric
			if (cleaned.length > 0 && !/^[a-z0-9]/.test(cleaned)) {
				cleaned = "s" + cleaned;
			}
			if (cleaned.length > 0 && !/[a-z0-9]$/.test(cleaned)) {
				cleaned = cleaned + "0";
			}
			
			// Truncate to max 63 characters
			if (cleaned.length > 63) {
				cleaned = cleaned.substring(0, 63);
				// Ensure it still ends with alphanumeric
				if (!/[a-z0-9]$/.test(cleaned)) {
					cleaned = cleaned.substring(0, 62) + "0";
				}
			}
			
			return cleaned;
		})
		.refine((val) => val.length >= 1 && val.length <= 63, {
			message: "Server name must be between 1 and 63 characters"
		})
		.refine((val) => /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/.test(val), {
			message: "Must be a valid hostname (RFC 1123)"
		}),
	server_type: z.string().min(1, "Server type is required"),
	image: z.string().min(1, "Image is required"),
	location: z.string().transform((val) => (val && val.trim() !== "") ? val : undefined).optional(),
	datacenter: z.string().transform((val) => (val && val.trim() !== "") ? val : undefined).optional(),
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
).refine(
	(data) => !!(data.location || data.datacenter),
	{ message: "Either location or datacenter must be provided" }
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
			
			// Build server config, only including non-empty values
			// Hetzner API requires either location OR datacenter, but not both
			const serverConfig: Record<string, unknown> = {
				name: parsed.name,
				server_type: parsed.server_type,
				image: parsed.image, // Hetzner API accepts image as string (name) or number (ID)
				start_after_create: parsed.start_after_create ?? true,
			};
			
			// Only include location if it's a non-empty string
			if (parsed.location && parsed.location.trim() !== "") {
				serverConfig.location = parsed.location;
			}
			
			// Only include datacenter if it's a non-empty string
			if (parsed.datacenter && parsed.datacenter.trim() !== "") {
				serverConfig.datacenter = parsed.datacenter;
			}
			
			// Include optional fields if they exist
			if (parsed.ssh_keys && parsed.ssh_keys.length > 0) {
				serverConfig.ssh_keys = parsed.ssh_keys;
			}
			if (parsed.volumes && parsed.volumes.length > 0) {
				serverConfig.volumes = parsed.volumes;
			}
			if (parsed.networks && parsed.networks.length > 0) {
				serverConfig.networks = parsed.networks;
			}
			if (parsed.firewalls && parsed.firewalls.length > 0) {
				serverConfig.firewalls = parsed.firewalls;
			}
			if (parsed.placement_group !== undefined) {
				serverConfig.placement_group = parsed.placement_group;
			}
			if (parsed.user_data) {
				serverConfig.user_data = parsed.user_data;
			}
			if (parsed.labels && Object.keys(parsed.labels).length > 0) {
				serverConfig.labels = parsed.labels;
			}
			if (parsed.automount !== undefined) {
				serverConfig.automount = parsed.automount;
			}
			if (parsed.public_net) {
				serverConfig.public_net = parsed.public_net;
			}
			
			console.log("[createServer] Calling Hetzner API with config:", JSON.stringify(serverConfig, null, 2));
			
			// Type assertion needed because we're building the config dynamically
			const result = await client.createServer(serverConfig as CreateServerRequest);
			
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

