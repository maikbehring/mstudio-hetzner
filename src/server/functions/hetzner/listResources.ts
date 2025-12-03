import { createServerFn } from "@tanstack/react-start";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import { db } from "~/db";
import type { VerifiedContext } from "~/types/middleware-context";

export const listHetznerResources = createServerFn({ method: "GET" })
	.middleware([verifyAccessToInstance])
	.handler(async ({ context }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		const client = await getHetznerClient(extensionInstanceId);

		// Fetch all resource types in parallel
		const [serversResult, volumesResult, floatingIpsResult, prices] = await Promise.all([
			client.listServers(),
			client.listVolumes(),
			client.listFloatingIps(),
			client.getPrices(),
		]);

		// Fetch all assignments
		const assignments = await db.hetznerResourceAssignment.findMany({
			where: { extensionInstanceId },
		});

		const assignmentMap = new Map(
			assignments.map((a) => [`${a.resourceType}:${a.resourceId}`, a]),
		);

		const getAssignment = (resourceType: string, resourceId: string | number) => {
			const assignment = assignmentMap.get(`${resourceType}:${String(resourceId)}`);
			return assignment
				? {
						mittwaldProjectId: assignment.mittwaldProjectId,
						mittwaldCustomerId: assignment.mittwaldCustomerId,
						tags: assignment.tags,
						resourceName: assignment.resourceName,
					}
				: null;
		};

		// Helper function to get server price by location
		const getServerPriceByLocation = (server: typeof serversResult.servers[0]) => {
			const serverLocation = server.datacenter.location.name;
			const serverTypeId = server.server_type.id;
			const serverTypeName = server.server_type.name;
			
			// First try to find price in server.server_type.prices
			let priceEntry = server.server_type.prices.find((p) => p.location === serverLocation);
			
			// If not found, try to find in pricing API
			if (!priceEntry) {
				const pricingServerType = prices.server_types.find((st) => st.id === serverTypeId);
				if (pricingServerType) {
					priceEntry = pricingServerType.prices.find((p) => p.location === serverLocation);
				}
			}
			
			// Debug logging
			console.log(`[getServerPriceByLocation] Server: ${server.name}, Location: ${serverLocation}, Server Type: ${serverTypeName} (ID: ${serverTypeId})`);
			console.log(`[getServerPriceByLocation] Server prices:`, server.server_type.prices.map(p => ({ location: p.location, price: p.price_monthly.gross })));
			if (prices.server_types.find(st => st.id === serverTypeId)) {
				const pricingType = prices.server_types.find(st => st.id === serverTypeId)!;
				console.log(`[getServerPriceByLocation] Pricing API prices:`, pricingType.prices.map(p => ({ location: p.location, price: p.price_monthly.gross })));
			}
			console.log(`[getServerPriceByLocation] Found price entry:`, priceEntry ? { location: priceEntry.location, price: priceEntry.price_monthly.gross } : 'NOT FOUND');
			
			return priceEntry?.price_monthly;
		};

		// Calculate estimated monthly costs
		let estimatedMonthlyCost = 0;

		// Server costs (using gross prices with 19% VAT)
		for (const server of serversResult.servers) {
			const price = getServerPriceByLocation(server);
			if (price) {
				const priceValue = parseFloat(price.gross);
				console.log(`[Server Cost] ${server.name}: ${priceValue} EUR/month (brutto)`);
				estimatedMonthlyCost += priceValue;
			} else {
				console.warn(`[Server Cost] ${server.name}: No price found for location ${server.datacenter.location.name}`);
			}
		}

		// Volume costs (using gross prices with 19% VAT)
		for (const volume of volumesResult.volumes) {
			estimatedMonthlyCost += (volume.size / 1024) * parseFloat(prices.volume.price_per_gb_month.gross);
		}

		// Floating IP costs (using gross prices with 19% VAT)
		for (const _floatingIp of floatingIpsResult.floating_ips) {
			estimatedMonthlyCost += parseFloat(prices.floating_ip.price_monthly.gross);
		}

		return {
			servers: serversResult.servers.map((s) => ({
				...s,
				assignment: getAssignment("server", s.id),
			})),
			volumes: volumesResult.volumes.map((v) => ({
				...v,
				assignment: getAssignment("volume", v.id),
			})),
			floatingIps: floatingIpsResult.floating_ips.map((f) => ({
				...f,
				assignment: getAssignment("floating_ip", f.id),
			})),
			estimatedMonthlyCost: Math.round(estimatedMonthlyCost * 100) / 100,
			prices,
		};
	});

