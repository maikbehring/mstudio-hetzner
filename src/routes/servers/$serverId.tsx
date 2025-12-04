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
		queryFn: () => (getHetznerServer as any)({ serverId }),
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
			<Heading>{server.name}</Heading>
			<Content>
				<Badge>{server.status}</Badge>
				{server.locked && <Badge>Locked</Badge>}
				{server.rescue_enabled && <Badge>Rescue Mode</Badge>}
			</Content>

			<Heading level={3}>Server Information</Heading>
			<Text>ID: {server.id}</Text>
			<Text>Created: {new Date(server.created).toLocaleString()}</Text>
			<Text>
				Type: {server.server_type.name} ({server.server_type.cores} cores,{" "}
				{server.server_type.memory / 1024} GB RAM, {server.server_type.disk} GB disk)
			</Text>
			<Text>
				Location: {server.datacenter.location.name} ({server.datacenter.location.country})
			</Text>
			<Text>Datacenter: {server.datacenter.name}</Text>

			{server.image && (
				<Content>
					<Heading level={3}>Image</Heading>
					<Text>
						{server.image.name || server.image.os_flavor || "Unknown"} ({server.image.type})
					</Text>
					{server.image.os_version && <Text>OS Version: {server.image.os_version}</Text>}
				</Content>
			)}

			<Heading level={3}>Network</Heading>
			{server.public_net?.ipv4 && (
				<Content>
					<Text>IPv4: {server.public_net.ipv4.ip}</Text>
					{server.public_net.ipv4.dns_ptr && (
						<Text>DNS PTR: {server.public_net.ipv4.dns_ptr}</Text>
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
					<Text>IPv6: {server.public_net.ipv6.ip}</Text>
					{server.public_net.ipv6.dns_ptr && server.public_net.ipv6.dns_ptr.length > 0 && (
						<Content>
							{server.public_net.ipv6.dns_ptr.map((ptr: { ip: string; dns_ptr: string }) => (
								<Text key={ptr.ip}>DNS PTR ({ptr.ip}): {ptr.dns_ptr}</Text>
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
					<Heading level={3}>Private Network</Heading>
					{server.private_net.map((net: { network: number; ip: string; mac_address: string }) => (
						<Text key={net.network}>
							Network {net.network}: {net.ip} (MAC: {net.mac_address})
						</Text>
					))}
				</Content>
			)}

			<Heading level={3}>Server Actions</Heading>
			{!canPerformActions && (
				<Alert status="info">
					<Text>Server actions are only available when server is running or off</Text>
				</Alert>
			)}
			<Content>
				<Button
					onPress={() => serverActionMutation.mutate("poweron")}
					isDisabled={!canPerformActions || server.status === "running" || serverActionMutation.isPending}
				>
					{serverActionMutation.isPending ? "Processing..." : "Power On"}
				</Button>
				<Button
					onPress={() => serverActionMutation.mutate("poweroff")}
					isDisabled={!canPerformActions || server.status === "off" || serverActionMutation.isPending}
				>
					{serverActionMutation.isPending ? "Processing..." : "Power Off"}
				</Button>
				<Button
					onPress={() => serverActionMutation.mutate("reboot")}
					isDisabled={!canPerformActions || server.status !== "running" || serverActionMutation.isPending}
				>
					{serverActionMutation.isPending ? "Processing..." : "Reboot"}
				</Button>
				<Button
					onPress={() => serverActionMutation.mutate("shutdown")}
					isDisabled={!canPerformActions || server.status !== "running" || serverActionMutation.isPending}
				>
					{serverActionMutation.isPending ? "Processing..." : "Shutdown"}
				</Button>
			</Content>

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

			{assignment && (
				<Content>
					<Heading level={3}>Assignment</Heading>
					{assignment.mittwaldProjectId && (
						<Text>Project ID: {assignment.mittwaldProjectId}</Text>
					)}
					{assignment.mittwaldCustomerId && (
						<Text>Customer ID: {assignment.mittwaldCustomerId}</Text>
					)}
					{assignment.tags && assignment.tags.length > 0 && (
						<Content>
							<Text>Tags:</Text>
							{assignment.tags.map((tag: string) => (
								<Badge key={tag}>{tag}</Badge>
							))}
						</Content>
					)}
				</Content>
			)}

			<Heading level={3}>Notes</Heading>
			{notes && notes.length > 0 && (
				<Content>
					{notes.map((note: { id: string; note: string; createdAt: Date; createdBy: string | null }) => (
						<Content key={note.id}>
							<Text>{note.note}</Text>
							<Text>
								{new Date(note.createdAt).toLocaleString()}
								{note.createdBy && ` by ${note.createdBy}`}
							</Text>
						</Content>
					))}
				</Content>
			)}
			<Content>
				<Text>Add Note</Text>
				<TextField
					value={noteText}
					onChange={(value) => setNoteText(value)}
					placeholder="Enter a note about this server"
				/>
				<Button
					onPress={() => createNoteMutation.mutate(noteText)}
					isDisabled={!noteText.trim() || createNoteMutation.isPending}
				>
					{createNoteMutation.isPending ? "Adding..." : "Add Note"}
				</Button>
			</Content>

			<Button onPress={() => refetch()}>Refresh</Button>
		</Content>
	);
}

