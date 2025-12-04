import {
	Button,
	Heading,
	Text,
	Content,
	Badge,
} from "@mittwald/flow-remote-react-components";
import { useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { listHetznerServers } from "~/server/functions/hetzner/listServers";
import { Loader } from "~/components/Loader";
import { ErrorMessage } from "~/components/ErrorMessage";

export const Route = createFileRoute("/servers")({
	component: ServersComponent,
});

function ServersComponent() {
	const router = useRouter();
	const {
		data,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ["hetznerServers"],
		queryFn: () => listHetznerServers(),
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
				<Text>No data available</Text>
			</Content>
		);
	}

	const { servers } = data;

	return (
		<Content>
			<Content>
				<Heading>Hetzner Cloud Servers</Heading>
				<Button
					onPress={() => {
						console.log("[Servers] Navigating to /servers/create");
						router.navigate({ to: "/servers/create" });
					}}
				>
					Create New Server
				</Button>
			</Content>
			<Text>
				Total: {servers.length} server{servers.length !== 1 ? "s" : ""}
			</Text>

			{servers.length === 0 ? (
				<Text>No servers found. Make sure your API token is configured correctly.</Text>
			) : (
				<Content>
					{servers.map((server) => (
						<Content key={server.id}>
							<Heading level={3}>
								<Button
									variant="plain"
									onPress={() => router.navigate({ to: "/servers/$serverId", params: { serverId: String(server.id) } })}
								>
									{server.name}
								</Button>
							</Heading>
							<Content>
								<Badge>{server.status}</Badge>
								{server.assignment && (
									<Badge>
										{server.assignment.mittwaldProjectId
											? `Project: ${server.assignment.mittwaldProjectId}`
											: server.assignment.mittwaldCustomerId
												? `Customer: ${server.assignment.mittwaldCustomerId}`
												: "Assigned"}
									</Badge>
								)}
								{server.assignment?.tags && server.assignment.tags.length > 0 && (
									<Content>
										{server.assignment.tags.map((tag: string) => (
											<Badge key={tag}>{tag}</Badge>
										))}
									</Content>
								)}
							</Content>
							<Text>
								Type: {server.server_type.name} ({server.server_type.cores} cores,{" "}
								{server.server_type.memory / 1024} GB RAM, {server.server_type.disk} GB disk)
							</Text>
							<Text>
								Location: {server.datacenter.location.name} ({server.datacenter.location.country})
							</Text>
							{server.public_net?.ipv4 && (
								<Text>IPv4: {server.public_net.ipv4.ip}</Text>
							)}
							{server.image && (
								<Text>
									Image: {server.image.name || server.image.os_flavor || "Unknown"}
								</Text>
							)}
						</Content>
					))}
				</Content>
			)}

			<Button onPress={() => refetch()}>Refresh</Button>
		</Content>
	);
}
