import {
	Button,
	Heading,
	Text,
	Content,
	Badge,
	Alert,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableFooterRow,
	TableHeader,
	TableRow,
	Section,
	ActionGroup,
} from "@mittwald/flow-remote-react-components";
import { useRouter } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { listHetznerResources } from "~/server/functions/hetzner/listResources";
import { getHetznerApiToken } from "~/server/functions/hetzner/getApiToken";
import { performServerAction } from "~/server/functions/hetzner/serverActions";
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";

export const Route = createFileRoute("/")({
	component: DashboardComponent,
});

function DashboardComponent() {
	const router = useRouter();
	const queryClient = useQueryClient();
	const {
		data: tokenData,
		isLoading: tokenLoading,
	} = useQuery({
		queryKey: ["hetznerApiToken"],
		queryFn: () => getHetznerApiToken(),
	});

	const {
		data: resourcesData,
		isLoading: resourcesLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ["hetznerResources"],
		queryFn: () => listHetznerResources(),
		enabled: !!tokenData?.hasToken,
	});

	const serverActionMutation = useMutation({
		mutationFn: async ({ serverId, action }: { serverId: number; action: "poweron" | "poweroff" | "reboot" | "shutdown" }) => {
			// Convert serverId to string, matching the detail page pattern exactly
			const serverIdStr = String(serverId);
			console.log("[Dashboard] Calling performServerAction with:", { serverId: serverIdStr, action });
			
			// Call exactly like in the detail page
			await (performServerAction as any)({ serverId: serverIdStr, action });
		},
		onSuccess: () => {
			// Refetch resources after action
			setTimeout(() => {
				queryClient.invalidateQueries({ queryKey: ["hetznerResources"] });
			}, 2000);
		},
	});

	if (tokenLoading) {
		return <Loader />;
	}

	if (!tokenData?.hasToken) {
		return (
			<Content>
				<Heading>Hetzner Cloud Integration</Heading>
				<Alert status="info">
					<Heading level={4}>API Token Required</Heading>
					<Text>
						Please configure your Hetzner Cloud API token in Settings to get started.
					</Text>
					<Button
						onPress={() => router.navigate({ to: "/settings" })}
						variant="outline"
					>
						Go to Settings
					</Button>
				</Alert>
			</Content>
		);
	}

	if (resourcesLoading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage error={error} onRetry={() => refetch()} />;
	}

	if (!resourcesData) {
		return (
			<Content>
				<Text>No data available</Text>
			</Content>
		);
	}

	const { servers, volumes, floatingIps, estimatedMonthlyCost, prices } = resourcesData;

	const runningServers = servers.filter((s) => s.status === "running").length;
	const stoppedServers = servers.filter((s) => s.status === "off").length;

	// Helper function to get server price by location
	const getServerPriceByLocation = (server: typeof servers[0]) => {
		const serverLocation = server.datacenter.location.name;
		const priceEntry = server.server_type.prices.find((p) => p.location === serverLocation);
		return priceEntry?.price_monthly;
	};

	// Calculate cost breakdown (using gross prices with 19% VAT)
	const serverCosts = servers.reduce((sum, server) => {
		const price = getServerPriceByLocation(server);
		return sum + (price ? parseFloat(price.gross) : 0);
	}, 0);

	const volumeCosts = volumes.reduce((sum, volume) => {
		return sum + (volume.size / 1024) * parseFloat(prices.volume.price_per_gb_month.gross);
	}, 0);

	const floatingIpCosts = floatingIps.length * parseFloat(prices.floating_ip.price_monthly.gross);

	return (
		<Content>
			<Section>
				<Heading>Hetzner Cloud Dashboard</Heading>
				<Text>
					Overview of all your Hetzner Cloud resources
				</Text>
			</Section>

			<Section>
				<Heading level={3}>Estimated Monthly Cost</Heading>
				<Text>Alle Preise inkl. 19% MwSt.</Text>
				<Table aria-label="Kostenübersicht">
						<TableHeader>
							<TableColumn>Ressource</TableColumn>
							<TableColumn horizontalAlign="end">Kosten</TableColumn>
						</TableHeader>
						<TableBody>
							{servers.length > 0 && (
								<TableRow>
									<TableCell>Server ({servers.length})</TableCell>
									<TableCell horizontalAlign="end">
										{serverCosts.toFixed(2)} €
									</TableCell>
								</TableRow>
							)}
							{volumes.length > 0 && (
								<TableRow>
									<TableCell>Volumes ({volumes.length})</TableCell>
									<TableCell horizontalAlign="end">
										{volumeCosts.toFixed(2)} €
									</TableCell>
								</TableRow>
							)}
							{floatingIps.length > 0 && (
								<TableRow>
									<TableCell>Floating IPs ({floatingIps.length})</TableCell>
									<TableCell horizontalAlign="end">
										{floatingIpCosts.toFixed(2)} €
									</TableCell>
								</TableRow>
							)}
							<TableFooterRow>
								<TableCell>Gesamtpreis</TableCell>
								<TableCell horizontalAlign="end">
									<strong>{estimatedMonthlyCost.toFixed(2)} €</strong>
								</TableCell>
						</TableFooterRow>
					</TableBody>
				</Table>
			</Section>

			<Section>
				<Heading>Server ({servers.length})</Heading>
				<Text>
					Total: {servers.length} | Running: {runningServers} | Stopped: {stoppedServers}
				</Text>
				{servers.length > 0 ? (
					<Table aria-label="Server-Übersicht">
						<TableHeader>
							<TableColumn>Name</TableColumn>
							<TableColumn>Status</TableColumn>
							<TableColumn>Typ</TableColumn>
							<TableColumn>Standort</TableColumn>
							<TableColumn>IP-Adresse</TableColumn>
							<TableColumn horizontalAlign="end">Kosten/Monat (inkl. MwSt.)</TableColumn>
							<TableColumn>Aktionen</TableColumn>
						</TableHeader>
						<TableBody>
							{servers.map((server) => {
								const monthlyPrice = getServerPriceByLocation(server);
								const canPerformActions = server.status === "running" || server.status === "off";
								const isActionPending = serverActionMutation.isPending;
								
								return (
									<TableRow key={server.id}>
										<TableCell>
											<Button
												variant="plain"
												onPress={() => router.navigate({ to: "/servers/$serverId", params: { serverId: String(server.id) } })}
											>
												{server.name}
											</Button>
										</TableCell>
										<TableCell>
											<Badge>{server.status}</Badge>
										</TableCell>
										<TableCell>{server.server_type.name}</TableCell>
										<TableCell>{server.datacenter.location.name}</TableCell>
										<TableCell>
											{server.public_net?.ipv4?.ip || "-"}
										</TableCell>
										<TableCell horizontalAlign="end">
											{monthlyPrice ? `${parseFloat(monthlyPrice.gross).toFixed(2)} €` : "-"}
										</TableCell>
										<TableCell>
											<ActionGroup>
												<Button
													size="s"
													variant="outline"
													onPress={() => serverActionMutation.mutate({ serverId: server.id, action: server.status === "running" ? "poweroff" : "poweron" })}
													isDisabled={!canPerformActions || isActionPending}
												>
													{server.status === "running" ? "Stoppen" : "Starten"}
												</Button>
												<Button
													size="s"
													variant="outline"
													onPress={() => serverActionMutation.mutate({ serverId: server.id, action: "reboot" })}
													isDisabled={!canPerformActions || server.status !== "running" || isActionPending}
												>
													Neustarten
												</Button>
											</ActionGroup>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				) : (
					<Text>No servers found</Text>
				)}
			</Section>

			<Section>
				<Heading>Volumes ({volumes.length})</Heading>
				<Table aria-label="Volume-Übersicht">
					<TableHeader>
						<TableColumn>Name</TableColumn>
						<TableColumn>Größe</TableColumn>
						<TableColumn>Standort</TableColumn>
						<TableColumn>Status</TableColumn>
						<TableColumn>Server</TableColumn>
						<TableColumn horizontalAlign="end">Kosten/Monat (inkl. MwSt.)</TableColumn>
					</TableHeader>
					<TableBody>
						{volumes.length > 0 ? (
							volumes.map((volume) => {
								const volumeCost = (volume.size / 1024) * parseFloat(prices.volume.price_per_gb_month.gross);
								return (
									<TableRow key={volume.id}>
										<TableCell>{volume.name}</TableCell>
										<TableCell>{volume.size} GB</TableCell>
										<TableCell>{volume.location.name}</TableCell>
										<TableCell>
											<Badge>{volume.status}</Badge>
										</TableCell>
										<TableCell>
											{volume.server ? `Server ${volume.server}` : "-"}
										</TableCell>
										<TableCell horizontalAlign="end">
											{volumeCost.toFixed(2)} €
										</TableCell>
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={6}>
									<Text>No volumes found</Text>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</Section>

			<Section>
				<Heading>Floating IPs ({floatingIps.length})</Heading>
				<Table aria-label="Floating-IP-Übersicht">
					<TableHeader>
						<TableColumn>IP-Adresse</TableColumn>
						<TableColumn>Typ</TableColumn>
						<TableColumn>Standort</TableColumn>
						<TableColumn>Server</TableColumn>
						<TableColumn horizontalAlign="end">Kosten/Monat (inkl. MwSt.)</TableColumn>
					</TableHeader>
					<TableBody>
						{floatingIps.length > 0 ? (
							floatingIps.map((ip) => {
								const ipCost = parseFloat(prices.floating_ip.price_monthly.gross);
								return (
									<TableRow key={ip.id}>
										<TableCell>{ip.ip}</TableCell>
										<TableCell>{ip.type}</TableCell>
										<TableCell>{ip.home_location.name}</TableCell>
										<TableCell>
											{ip.server ? `Server ${ip.server}` : "-"}
										</TableCell>
										<TableCell horizontalAlign="end">
											{ipCost.toFixed(2)} €
										</TableCell>
									</TableRow>
								);
							})
						) : (
							<TableRow>
								<TableCell colSpan={5}>
									<Text>No floating IPs found</Text>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</Section>

			<Section>
				<ActionGroup>
					<Button onPress={() => refetch()}>Refresh</Button>
					<Button
						variant="outline"
						onPress={() => router.navigate({ to: "/settings" })}
					>
						Settings
					</Button>
				</ActionGroup>
			</Section>
		</Content>
	);
}
