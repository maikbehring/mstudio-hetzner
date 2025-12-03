import { z } from "zod";

const HETZNER_API_BASE_URL = "https://api.hetzner.cloud/v1";

// Zod schemas for Hetzner API responses
const ServerSchema = z.object({
	id: z.number(),
	name: z.string(),
	status: z.enum(["running", "initializing", "starting", "stopping", "off", "deleting", "migrating", "rebuilding", "unknown"]),
	created: z.string(),
	public_net: z.object({
		ipv4: z.object({
			ip: z.string(),
			blocked: z.boolean(),
			dns_ptr: z.string().nullable(),
		}).nullable(),
		ipv6: z.object({
			ip: z.string(),
			blocked: z.boolean(),
			dns_ptr: z.array(z.object({
				ip: z.string(),
				dns_ptr: z.string(),
			})).nullable(),
		}).nullable(),
	}).optional(),
	private_net: z.array(z.object({
		network: z.number(),
		ip: z.string(),
		mac_address: z.string(),
	})).optional(),
	server_type: z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		cores: z.number(),
		memory: z.number(),
		disk: z.number(),
		prices: z.array(z.object({
			location: z.string(),
			price_hourly: z.object({
				gross: z.string(),
				net: z.string(),
			}),
			price_monthly: z.object({
				gross: z.string(),
				net: z.string(),
			}),
		})),
	}),
	datacenter: z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		location: z.object({
			id: z.number(),
			name: z.string(),
			country: z.string(),
			city: z.string(),
			latitude: z.number(),
			longitude: z.number(),
		}),
	}),
	image: z.object({
		id: z.number(),
		type: z.enum(["system", "snapshot", "backup", "app"]),
		status: z.enum(["available", "creating", "unavailable"]),
		name: z.string().nullable(),
		description: z.string().nullable(),
		image_size: z.number().nullable(),
		disk_size: z.number(),
		created: z.string(),
		created_from: z.object({
			id: z.number(),
			name: z.string(),
		}).nullable(),
		bound_to: z.number().nullable(),
		os_flavor: z.string().nullable(),
		os_version: z.string().nullable(),
		rapid_deploy: z.boolean(),
		protection: z.object({
			delete: z.boolean().optional(),
			rebuild: z.boolean().optional(),
		}).optional(),
		deprecated: z.string().nullable(),
		labels: z.record(z.string()),
	}).nullable(),
	backup_window: z.string().nullable(),
	rescue_enabled: z.boolean(),
	locked: z.boolean(),
	protection: z.object({
		delete: z.boolean(),
		rebuild: z.boolean(),
	}),
	labels: z.record(z.string()),
	volumes: z.array(z.number()).optional(),
	primary_disk_size: z.number(),
});

const ServersResponseSchema = z.object({
	servers: z.array(ServerSchema),
	meta: z.object({
		pagination: z.object({
			page: z.number(),
			per_page: z.number(),
			previous_page: z.number().nullable(),
			next_page: z.number().nullable(),
			last_page: z.number(),
			total_entries: z.number(),
		}),
	}),
});

const ServerResponseSchema = z.object({
	server: ServerSchema,
});

const ActionSchema = z.object({
	id: z.number(),
	command: z.string(),
	status: z.enum(["running", "success", "error"]),
	progress: z.number(),
	started: z.string(),
	finished: z.string().nullable(),
	resources: z.array(z.object({
		id: z.number(),
		type: z.string(),
	})),
	error: z.object({
		code: z.string(),
		message: z.string(),
	}).nullable(),
});

const ActionResponseSchema = z.object({
	action: ActionSchema,
});

const VolumeSchema = z.object({
	id: z.number(),
	created: z.string(),
	name: z.string(),
	server: z.number().nullable(),
	location: z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		country: z.string(),
		city: z.string(),
		latitude: z.number(),
		longitude: z.number(),
	}),
	size: z.number(),
	linux_device: z.string(),
	protection: z.object({
		delete: z.boolean(),
	}),
	labels: z.record(z.string()),
	status: z.enum(["creating", "available", "attaching", "detaching", "deleting"]),
	format: z.string().nullable(),
});

const VolumesResponseSchema = z.object({
	volumes: z.array(VolumeSchema),
	meta: z.object({
		pagination: z.object({
			page: z.number(),
			per_page: z.number(),
			previous_page: z.number().nullable(),
			next_page: z.number().nullable(),
			last_page: z.number(),
			total_entries: z.number(),
		}),
	}),
});

const FloatingIpSchema = z.object({
	id: z.number(),
	description: z.string().nullable(),
	ip: z.string(),
	type: z.enum(["ipv4", "ipv6"]),
	server: z.number().nullable(),
	dns_ptr: z.array(z.object({
		dns_ptr: z.string(),
		ip: z.string(),
	})).nullable(),
	home_location: z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		country: z.string(),
		city: z.string(),
		latitude: z.number(),
		longitude: z.number(),
	}),
	blocked: z.boolean(),
	protection: z.object({
		delete: z.boolean(),
	}),
	labels: z.record(z.string()),
	created: z.string(),
	name: z.string().nullable(),
});

const FloatingIpsResponseSchema = z.object({
	floating_ips: z.array(FloatingIpSchema),
	meta: z.object({
		pagination: z.object({
			page: z.number(),
			per_page: z.number(),
			previous_page: z.number().nullable(),
			next_page: z.number().nullable(),
			last_page: z.number(),
			total_entries: z.number(),
		}),
	}),
});

const PricesResponseSchema = z.object({
	pricing: z.object({
		currency: z.string(),
		vat_rate: z.string(),
		image: z.object({
			price_per_gb_month: z.object({
				gross: z.string(),
				net: z.string(),
			}),
		}),
		floating_ip: z.object({
			price_monthly: z.object({
				gross: z.string(),
				net: z.string(),
			}),
		}),
		floating_ip_price_per_gb: z.object({
			price_per_gb_month: z.object({
				gross: z.string(),
				net: z.string(),
			}),
		}).optional(),
		primary_ips: z.array(z.object({
			type: z.string(),
			prices: z.array(z.object({
				location: z.string(),
				price_monthly: z.object({
					gross: z.string(),
					net: z.string(),
				}),
			})),
		})),
		server_backup: z.object({
			percentage: z.string(),
		}),
		server_types: z.array(z.object({
			id: z.number(),
			name: z.string(),
			prices: z.array(z.object({
				location: z.string(),
				price_hourly: z.object({
					gross: z.string(),
					net: z.string(),
				}),
				price_monthly: z.object({
					gross: z.string(),
					net: z.string(),
				}),
			})),
		})),
		traffic: z.object({
			price_per_tb: z.object({
				gross: z.string(),
				net: z.string(),
			}),
		}).optional(),
		volume: z.object({
			price_per_gb_month: z.object({
				gross: z.string(),
				net: z.string(),
			}),
		}),
	}),
});

export type Server = z.infer<typeof ServerSchema>;
export type Volume = z.infer<typeof VolumeSchema>;
export type FloatingIp = z.infer<typeof FloatingIpSchema>;
export type Action = z.infer<typeof ActionSchema>;
export type Prices = z.infer<typeof PricesResponseSchema>["pricing"];

export class HetznerApiError extends Error {
	constructor(
		public statusCode: number,
		public code: string,
		message: string,
	) {
		super(message);
		this.name = "HetznerApiError";
	}
}

export class HetznerApiClient {
	constructor(private apiToken: string) {}

	private async request<T>(
		method: string,
		path: string,
		body?: unknown,
	): Promise<T> {
		const url = `${HETZNER_API_BASE_URL}${path}`;
		const headers: Record<string, string> = {
			"Authorization": `Bearer ${this.apiToken}`,
			"Content-Type": "application/json",
		};

		const response = await fetch(url, {
			method,
			headers,
			body: body ? JSON.stringify(body) : undefined,
		});

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new HetznerApiError(
				response.status,
				errorData.error?.code || "unknown_error",
				errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`,
			);
		}

		return response.json();
	}

	async listServers(): Promise<{ servers: Server[]; meta: { pagination: { page: number; per_page: number; previous_page: number | null; next_page: number | null; last_page: number; total_entries: number } } }> {
		const data = await this.request<unknown>("GET", "/servers");
		return ServersResponseSchema.parse(data);
	}

	async getServer(serverId: number): Promise<Server> {
		const data = await this.request<unknown>("GET", `/servers/${serverId}`);
		const parsed = ServerResponseSchema.parse(data);
		return parsed.server;
	}

	async powerOnServer(serverId: number): Promise<Action> {
		const data = await this.request<unknown>("POST", `/servers/${serverId}/actions/poweron`);
		const parsed = ActionResponseSchema.parse(data);
		return parsed.action;
	}

	async powerOffServer(serverId: number): Promise<Action> {
		const data = await this.request<unknown>("POST", `/servers/${serverId}/actions/poweroff`);
		const parsed = ActionResponseSchema.parse(data);
		return parsed.action;
	}

	async rebootServer(serverId: number): Promise<Action> {
		const data = await this.request<unknown>("POST", `/servers/${serverId}/actions/reboot`);
		const parsed = ActionResponseSchema.parse(data);
		return parsed.action;
	}

	async shutdownServer(serverId: number): Promise<Action> {
		const data = await this.request<unknown>("POST", `/servers/${serverId}/actions/shutdown`);
		const parsed = ActionResponseSchema.parse(data);
		return parsed.action;
	}

	async listVolumes(): Promise<{ volumes: Volume[]; meta: { pagination: { page: number; per_page: number; previous_page: number | null; next_page: number | null; last_page: number; total_entries: number } } }> {
		const data = await this.request<unknown>("GET", "/volumes");
		return VolumesResponseSchema.parse(data);
	}

	async listFloatingIps(): Promise<{ floating_ips: FloatingIp[]; meta: { pagination: { page: number; per_page: number; previous_page: number | null; next_page: number | null; last_page: number; total_entries: number } } }> {
		const data = await this.request<unknown>("GET", "/floating_ips");
		return FloatingIpsResponseSchema.parse(data);
	}

	async getPrices(): Promise<Prices> {
		const data = await this.request<unknown>("GET", "/pricing");
		const parsed = PricesResponseSchema.parse(data);
		return parsed.pricing;
	}
}

