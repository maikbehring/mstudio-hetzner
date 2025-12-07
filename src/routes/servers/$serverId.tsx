import {
	Button,
	Heading,
	Text,
	Content,
	Badge,
	Alert,
	Action,
	Modal,
	ActionGroup,
	Section,
	LabeledValue,
	Label,
	CopyButton,
	CartesianChart,
	Line,
	Area,
} from "@mittwald/flow-remote-react-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getHetznerServer } from "~/server/functions/hetzner/getServer";
import { getServerMetrics } from "~/server/functions/hetzner/getServerMetrics";
import { performServerAction } from "~/server/functions/hetzner/serverActions";
import { deleteServer } from "~/server/functions/hetzner/deleteServer";
import { resetRootPassword } from "~/server/functions/hetzner/resetRootPassword";
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";
import { useState, useMemo, useEffect } from "react";

export const Route = createFileRoute("/servers/$serverId")({
	component: ServerDetailComponent,
});

function ServerDetailComponent() {
	const { serverId } = Route.useParams();
	const router = useRouter();
	const queryClient = useQueryClient();
	const [rootPassword, setRootPassword] = useState<string | null>(null);
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const {
		data,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ["hetznerServer", serverId],
		queryFn: () => (getHetznerServer as any)({ data: { serverId } }),
	});

	// Get metrics for the last 24 hours - only calculate client-side to avoid hydration issues
	const { startDate, endDate } = useMemo(() => {
		if (!isClient) {
			return { startDate: null, endDate: null };
		}
		const end = new Date();
		const start = new Date(Date.now() - 24 * 60 * 60 * 1000);
		return {
			startDate: start,
			endDate: end,
		};
	}, [isClient]);

	const {
		data: metricsData,
		isLoading: metricsLoading,
		error: metricsError,
	} = useQuery({
		queryKey: ["hetznerServerMetrics", serverId, startDate?.toISOString(), endDate?.toISOString()],
		queryFn: () => {
			if (!startDate || !endDate) {
				throw new Error("Dates not initialized");
			}
			return (getServerMetrics as any)({
				data: {
					serverId,
					type: "cpu,disk,network",
					start: startDate.toISOString(),
					end: endDate.toISOString(),
				},
			});
		},
		enabled: isClient && !!startDate && !!endDate && !!data?.server && data.server.status === "running",
		refetchInterval: 60000, // Refetch every minute
	});

	const serverActionMutation = useMutation({
		mutationFn: async (action: "poweron" | "poweroff" | "reboot" | "shutdown") => {
			await (performServerAction as any)({ data: { serverId, action } });
		},
		onSuccess: () => {
			// Refetch server data after action
			setTimeout(() => {
				refetch();
			}, 2000);
		},
	});

	const resetPasswordMutation = useMutation({
		mutationFn: async () => {
			const result = await (resetRootPassword as any)({ data: { serverId } });
			return result;
		},
		onSuccess: (result) => {
			if (result.root_password) {
				setRootPassword(result.root_password);
			}
			// Refetch server data after password reset
			setTimeout(() => {
				refetch();
			}, 2000);
		},
		onError: (error) => {
			console.error("[resetPasswordMutation] Error resetting password:", error);
		},
	});

	const deleteServerMutation = useMutation({
		mutationFn: async () => {
			await (deleteServer as any)({ data: { serverId } });
		},
		onSuccess: () => {
			// Invalidate resources list and navigate to dashboard
			queryClient.invalidateQueries({ queryKey: ["hetznerResources"] });
			queryClient.invalidateQueries({ queryKey: ["hetznerServers"] });
			queryClient.invalidateQueries({ queryKey: ["hetznerServer", serverId] });
			// Navigate to dashboard immediately
			router.navigate({ to: "/" });
		},
		onError: (error) => {
			console.error("[deleteServerMutation] Error deleting server:", error);
		},
	});

	if (isLoading) {
		return <Loader />;
	}

	if (error) {
		return <ErrorMessage error={error} onRetry={() => refetch()} />;
	}

	if (!data) {
		return (
			<Content>
				<Text>Server not found</Text>
			</Content>
		);
	}

	const { server, assignment } = data;


	const canPerformActions = server.status === "running" || server.status === "off";

	return (
		<Content>
			<Section>
				<Heading>{server.name}</Heading>
				<Content>
					<Badge>{server.status}</Badge>
					{server.locked && <Badge>Locked</Badge>}
					{server.rescue_enabled && <Badge>Rescue Mode</Badge>}
				</Content>
			</Section>

			<Section>
				<Heading level={3}>Server Information</Heading>
				<Content>
					<LabeledValue>
						<Label>ID</Label>
						<Content>{server.id}</Content>
					</LabeledValue>
					<LabeledValue>
						<Label>Created</Label>
						<Content>{new Date(server.created).toLocaleString()}</Content>
					</LabeledValue>
					<LabeledValue>
						<Label>Type</Label>
						<Content>
							{server.server_type.name} ({server.server_type.cores} cores,{" "}
							{server.server_type.memory / 1024} GB RAM, {server.server_type.disk} GB disk)
						</Content>
					</LabeledValue>
					<LabeledValue>
						<Label>Location</Label>
						<Content>
							{server.datacenter.location.name} ({server.datacenter.location.country})
						</Content>
					</LabeledValue>
					<LabeledValue>
						<Label>Datacenter</Label>
						<Content>{server.datacenter.name}</Content>
					</LabeledValue>
				</Content>
			</Section>

			{server.image && (
				<Section>
					<Heading level={3}>Image</Heading>
					<Content>
						<LabeledValue>
							<Label>OS</Label>
							<Content>
								{server.image.name || server.image.os_flavor || "Unknown"} ({server.image.type})
							</Content>
						</LabeledValue>
						{server.image.os_version && (
							<LabeledValue>
								<Label>OS Version</Label>
								<Content>{server.image.os_version}</Content>
							</LabeledValue>
						)}
					</Content>
				</Section>
			)}

			{server.status === "running" && isClient && (
				<Section>
					<Heading level={3}>Server Auslastung</Heading>
					{metricsLoading && <Loader />}
					{metricsError && (
						<Alert status="warning">
							<Text>Metriken konnten nicht geladen werden.</Text>
						</Alert>
					)}
					{metricsData?.metrics && (() => {
						// Process metrics data in useMemo to avoid hydration issues
						const cpuData = metricsData.metrics.cpu ? metricsData.metrics.cpu.values.map(([timestamp, value]: [number, number | string]) => ({
							time: new Date(timestamp * 1000),
							cpu: typeof value === "string" ? parseFloat(value) : value,
						})) : [];

						const diskData = (() => {
							const readData = metricsData.metrics["disk.0.iops.read"]?.values || [];
							const writeData = metricsData.metrics["disk.0.iops.write"]?.values || [];
							if (readData.length === 0 && writeData.length === 0) return [];
							const maxLength = Math.max(readData.length, writeData.length);
							return Array.from({ length: maxLength }, (_, i) => {
								const read = readData[i] as [number, number | string] | undefined;
								const write = writeData[i] as [number, number | string] | undefined;
								return {
									time: read ? new Date(read[0] * 1000) : write ? new Date(write[0] * 1000) : new Date(0),
									read: read ? (typeof read[1] === "string" ? parseFloat(read[1]) : read[1]) : 0,
									write: write ? (typeof write[1] === "string" ? parseFloat(write[1]) : write[1]) : 0,
								};
							});
						})();

						const networkData = (() => {
							const inData = metricsData.metrics["network.0.bandwidth.in"]?.values || [];
							const outData = metricsData.metrics["network.0.bandwidth.out"]?.values || [];
							if (inData.length === 0 && outData.length === 0) return [];
							const maxLength = Math.max(inData.length, outData.length);
							return Array.from({ length: maxLength }, (_, i) => {
								const inVal = inData[i] as [number, number | string] | undefined;
								const outVal = outData[i] as [number, number | string] | undefined;
								return {
									time: inVal ? new Date(inVal[0] * 1000) : outVal ? new Date(outVal[0] * 1000) : new Date(0),
									in: inVal ? (typeof inVal[1] === "string" ? parseFloat(inVal[1]) : inVal[1]) : 0,
									out: outVal ? (typeof outVal[1] === "string" ? parseFloat(outVal[1]) : outVal[1]) : 0,
								};
							});
						})();

						return (
							<Content>
								{cpuData.length > 0 && (
									<Section>
										<Heading level={4}>CPU Auslastung</Heading>
										<CartesianChart
											height="200"
											data={cpuData}
										>
											<Area dataKey="cpu" color="blue" />
											<Line dataKey="cpu" color="blue" />
										</CartesianChart>
									</Section>
								)}
								{diskData.length > 0 && (
									<Section>
										<Heading level={4}>Disk IOPS</Heading>
										<CartesianChart
											height="200"
											data={diskData}
										>
											<Area dataKey="read" color="green" />
											<Area dataKey="write" color="orange" />
										</CartesianChart>
									</Section>
								)}
								{networkData.length > 0 && (
									<Section>
										<Heading level={4}>Network Bandwidth</Heading>
										<CartesianChart
											height="200"
											data={networkData}
										>
											<Area dataKey="in" color="blue" />
											<Area dataKey="out" color="purple" />
										</CartesianChart>
									</Section>
								)}
							</Content>
						);
					})()}
				</Section>
			)}

			<Section>
				<Heading level={3}>Network</Heading>
				{server.public_net?.ipv4 && (
					<Content>
						<LabeledValue>
							<Label>IPv4</Label>
							<Content>
								{server.public_net.ipv4.ip}
								<CopyButton value={server.public_net.ipv4.ip} />
							</Content>
						</LabeledValue>
						{server.public_net.ipv4.dns_ptr && (
							<LabeledValue>
								<Label>DNS PTR</Label>
								<Content>
									{server.public_net.ipv4.dns_ptr}
									<CopyButton value={server.public_net.ipv4.dns_ptr} />
								</Content>
							</LabeledValue>
						)}
						{server.public_net.ipv4.blocked && (
							<Alert status="warning">
								<Text>IPv4 is blocked</Text>
							</Alert>
						)}
					</Content>
				)}
				{server.public_net?.ipv6 && (
					<Content>
						<LabeledValue>
							<Label>IPv6</Label>
							<Content>
								{server.public_net.ipv6.ip}
								<CopyButton value={server.public_net.ipv6.ip} />
							</Content>
						</LabeledValue>
						{server.public_net.ipv6.dns_ptr && server.public_net.ipv6.dns_ptr.length > 0 && (
							<Content>
								{server.public_net.ipv6.dns_ptr.map((ptr: { ip: string; dns_ptr: string }) => (
									<LabeledValue key={ptr.ip}>
										<Label>DNS PTR ({ptr.ip})</Label>
										<Content>
											{ptr.dns_ptr}
											<CopyButton value={ptr.dns_ptr} />
										</Content>
									</LabeledValue>
								))}
							</Content>
						)}
						{server.public_net.ipv6.blocked && (
							<Alert status="warning">
								<Text>IPv6 is blocked</Text>
							</Alert>
						)}
					</Content>
				)}
				{server.private_net && server.private_net.length > 0 && (
					<Content>
						<Heading level={4}>Private Network</Heading>
						{server.private_net.map((net: { network: number; ip: string; mac_address: string }) => (
							<LabeledValue key={net.network}>
								<Label>Network {net.network}</Label>
								<Content>
									{net.ip} (MAC: {net.mac_address})
									<CopyButton value={net.ip} />
								</Content>
							</LabeledValue>
						))}
					</Content>
				)}
			</Section>

			<Section>
				<Heading level={3}>Server Actions</Heading>
				{!canPerformActions && (
					<Alert status="info">
						<Text>Server actions are only available when server is running or off</Text>
					</Alert>
				)}
				<ActionGroup>
					<Button
						onPress={() => serverActionMutation.mutate("poweron")}
						isDisabled={!canPerformActions || server.status === "running" || serverActionMutation.isPending}
					>
						{serverActionMutation.isPending ? "Processing..." : "Power On"}
					</Button>
					<Button
						variant="outline"
						onPress={() => serverActionMutation.mutate("poweroff")}
						isDisabled={!canPerformActions || server.status === "off" || serverActionMutation.isPending}
					>
						{serverActionMutation.isPending ? "Processing..." : "Power Off"}
					</Button>
					<Button
						variant="outline"
						onPress={() => serverActionMutation.mutate("reboot")}
						isDisabled={!canPerformActions || server.status !== "running" || serverActionMutation.isPending}
					>
						{serverActionMutation.isPending ? "Processing..." : "Reboot"}
					</Button>
					<Button
						variant="outline"
						onPress={() => serverActionMutation.mutate("shutdown")}
						isDisabled={!canPerformActions || server.status !== "running" || serverActionMutation.isPending}
					>
						{serverActionMutation.isPending ? "Processing..." : "Shutdown"}
					</Button>
				</ActionGroup>
			</Section>

			{rootPassword && (
				<Section>
					<Alert status="success">
						<Heading level={4}>Root Password Reset</Heading>
						<Text>
							The root password has been reset. Please copy and save this password.
							It will not be shown again.
						</Text>
						<LabeledValue>
							<Label>New Root Password</Label>
							<Content>
								{rootPassword}
								<CopyButton value={rootPassword} />
							</Content>
						</LabeledValue>
						<ActionGroup>
							<Button variant="outline" onPress={() => setRootPassword(null)}>
								Close
							</Button>
						</ActionGroup>
					</Alert>
				</Section>
			)}

			<Section>
				<Heading level={3}>Security</Heading>
				<Content>
					<LabeledValue>
						<Label>Reset Root Password</Label>
						<Content>
							<Text>
								Reset the root password for this server. The server must be running and have the qemu guest agent installed.
							</Text>
							<ActionGroup>
								<Button
									variant="outline"
									onPress={() => resetPasswordMutation.mutate()}
									isDisabled={server.status !== "running" || resetPasswordMutation.isPending}
								>
									{resetPasswordMutation.isPending ? "Resetting..." : "Reset Root Password"}
								</Button>
							</ActionGroup>
							{server.status !== "running" && (
								<Alert status="warning">
									<Text>Server must be running to reset root password.</Text>
								</Alert>
							)}
						</Content>
					</LabeledValue>
				</Content>
			</Section>

			<Section>
				<Heading level={3}>Danger Zone</Heading>
				<Alert status="danger">
					<Heading level={4}>Delete Server</Heading>
					<Text>
						Deleting a server is permanent and cannot be undone. All data on the server will be lost.
						{server.protection.delete && (
							<Text>
								<br />
								<strong>Note:</strong> This server is protected from deletion. You need to disable protection first.
							</Text>
						)}
					</Text>
					{server.protection.delete ? (
						<Button
							color="danger"
							variant="outline"
							isDisabled={true}
						>
							Server is Protected
						</Button>
					) : (
						<Action action={async () => {
							await deleteServerMutation.mutateAsync();
						}}>
							<Button color="danger" isDisabled={deleteServerMutation.isPending}>
								{deleteServerMutation.isPending ? "Deleting..." : "Delete Server"}
							</Button>
							<Modal slot="actionConfirm">
								<Heading>Delete Server</Heading>
								<Section>
									<Text>
										Are you sure you want to delete the server <strong>{server.name}</strong>?
									</Text>
									<Alert status="danger">
										<Text>
											This action cannot be undone. All data on the server will be permanently deleted.
										</Text>
									</Alert>
								</Section>
								<ActionGroup>
									<Action action={async () => {
										await deleteServerMutation.mutateAsync();
									}}>
										<Button color="danger" isDisabled={deleteServerMutation.isPending}>
											{deleteServerMutation.isPending ? "Deleting..." : "Delete Server"}
										</Button>
									</Action>
									<Button variant="outline" onPress={() => {}}>
										Cancel
									</Button>
								</ActionGroup>
							</Modal>
						</Action>
					)}
				</Alert>
			</Section>

			{assignment && (
				<Section>
					<Heading level={3}>Assignment</Heading>
					<Content>
						{assignment.mittwaldProjectId && (
							<LabeledValue>
								<Label>Project ID</Label>
								<Content>{assignment.mittwaldProjectId}</Content>
							</LabeledValue>
						)}
						{assignment.mittwaldCustomerId && (
							<LabeledValue>
								<Label>Customer ID</Label>
								<Content>{assignment.mittwaldCustomerId}</Content>
							</LabeledValue>
						)}
						{assignment.tags && assignment.tags.length > 0 && (
							<LabeledValue>
								<Label>Tags</Label>
								<Content>
									{assignment.tags.map((tag: string) => (
										<Badge key={tag}>{tag}</Badge>
									))}
								</Content>
							</LabeledValue>
						)}
					</Content>
				</Section>
			)}

			<Section>
				<ActionGroup>
					<Button variant="outline" onPress={() => router.navigate({ to: "/" })}>
						Zurück zur Übersicht
					</Button>
					<Button variant="outline" onPress={() => refetch()}>
						Refresh
					</Button>
				</ActionGroup>
			</Section>
		</Content>
	);
}

