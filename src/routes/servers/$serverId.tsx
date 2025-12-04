import {
	Button,
	Heading,
	Text,
	Content,
	Badge,
	Alert,
	TextField,
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
import { createResourceNote } from "~/server/functions/hetzner/resourceNotes";
import { deleteServer } from "~/server/functions/hetzner/deleteServer";
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";
import { useState } from "react";

export const Route = createFileRoute("/servers/$serverId")({
	component: ServerDetailComponent,
});

function ServerDetailComponent() {
	const { serverId } = Route.useParams();
	const router = useRouter();
	const queryClient = useQueryClient();
	const [noteText, setNoteText] = useState("");

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
			await (performServerAction as any)({ serverId, action });
		},
		onSuccess: () => {
			// Refetch server data after action
			setTimeout(() => {
				refetch();
			}, 2000);
		},
	});

	const createNoteMutation = useMutation({
		mutationFn: async (note: string) => {
			await (createResourceNote as any)({
				resourceType: "server",
				resourceId: serverId,
				note,
			});
		},
		onSuccess: () => {
			setNoteText("");
			refetch();
		},
	});

	const deleteServerMutation = useMutation({
		mutationFn: async () => {
			await (deleteServer as any)({ serverId });
		},
		onSuccess: () => {
			// Invalidate resources list and navigate to server list
			queryClient.invalidateQueries({ queryKey: ["hetznerResources"] });
			queryClient.invalidateQueries({ queryKey: ["hetznerServers"] });
			router.navigate({ to: "/servers" });
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

	const { server, assignment, notes } = data;


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
				<Heading level={3}>Notes</Heading>
				{notes && notes.length > 0 && (
					<Content>
						{notes.map((note: { id: string; note: string; createdAt: Date; createdBy: string | null }) => (
							<Section key={note.id}>
								<Text>{note.note}</Text>
								<Text>
									{new Date(note.createdAt).toLocaleString()}
									{note.createdBy && ` by ${note.createdBy}`}
								</Text>
							</Section>
						))}
					</Content>
				)}
				<Section>
					<Label>Add Note</Label>
					<TextField
						value={noteText}
						onChange={(value) => setNoteText(value)}
						placeholder="Enter a note about this server"
					/>
					<ActionGroup>
						<Button
							onPress={() => createNoteMutation.mutate(noteText)}
							isDisabled={!noteText.trim() || createNoteMutation.isPending}
						>
							{createNoteMutation.isPending ? "Adding..." : "Add Note"}
						</Button>
					</ActionGroup>
				</Section>
			</Section>

			<Section>
				<ActionGroup>
					<Button variant="outline" onPress={() => refetch()}>
						Refresh
					</Button>
				</ActionGroup>
			</Section>
		</Content>
	);
}

