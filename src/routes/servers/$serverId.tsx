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
} from "@mittwald/flow-remote-react-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { getHetznerServer } from "~/server/functions/hetzner/getServer";
import { performServerAction } from "~/server/functions/hetzner/serverActions";
import { deleteServer } from "~/server/functions/hetzner/deleteServer";
import { resetRootPassword } from "~/server/functions/hetzner/resetRootPassword";
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";
import { ServerMetrics } from "~/components/ServerMetrics";
import { useState } from "react";

export const Route = createFileRoute("/servers/$serverId")({
	component: ServerDetailComponent,
});

function ServerDetailComponent() {
	const { serverId } = Route.useParams();
	const router = useRouter();
	const queryClient = useQueryClient();
	const [rootPassword, setRootPassword] = useState<string | null>(null);

	const {
		data,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ["hetznerServer", serverId],
		queryFn: () => (getHetznerServer as any)({ data: { serverId } }),
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
							{server.server_type.memory} GB RAM, {server.server_type.disk} GB disk)
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

			<ServerMetrics serverId={serverId} serverStatus={server.status} />

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

