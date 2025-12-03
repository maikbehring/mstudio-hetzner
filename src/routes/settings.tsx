import {
	Button,
	Heading,
	Text,
	Content,
	TextField,
	Alert,
} from "@mittwald/flow-remote-react-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { getHetznerApiToken } from "~/server/functions/hetzner/getApiToken";
import { setHetznerApiToken } from "~/server/functions/hetzner/setApiToken";
import { deleteHetznerApiToken } from "~/server/functions/hetzner/deleteApiToken";

export const Route = createFileRoute("/settings")({
	component: SettingsComponent,
});

function SettingsComponent() {
	const queryClient = useQueryClient();
	const [apiToken, setApiToken] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const { data: tokenData, isLoading } = useQuery({
		queryKey: ["hetznerApiToken"],
		queryFn: () => getHetznerApiToken(),
	});

		const setTokenMutation = useMutation({
		mutationFn: async (token: string) => {
			// TanStack Start server functions need data passed directly
			// The middleware will handle authentication
			const result = await (setHetznerApiToken as any)({ apiToken: token });
			return result;
		},
		onSuccess: () => {
			setSuccess(true);
			setError(null);
			setApiToken("");
			queryClient.invalidateQueries({ queryKey: ["hetznerApiToken"] });
			setTimeout(() => setSuccess(false), 3000);
		},
		onError: (err: Error) => {
			setError(err.message);
			setSuccess(false);
		},
	});

	const deleteTokenMutation = useMutation({
		mutationFn: async () => {
			await deleteHetznerApiToken();
		},
		onSuccess: () => {
			setSuccess(true);
			setError(null);
			queryClient.invalidateQueries({ queryKey: ["hetznerApiToken"] });
			setTimeout(() => setSuccess(false), 3000);
		},
		onError: (err: Error) => {
			setError(err.message);
			setSuccess(false);
		},
	});

	const handleSubmit = () => {
		if (!apiToken.trim()) {
			setError("API token is required");
			return;
		}
		setTokenMutation.mutate(apiToken);
	};

	if (isLoading) {
		return (
			<Content>
				<Text>Loading...</Text>
			</Content>
		);
	}

	return (
		<Content>
			<Heading>Hetzner Cloud Settings</Heading>
			<Text>
				Configure your Hetzner Cloud API token to connect your account.
				You can generate an API token in your Hetzner Cloud Console.
			</Text>
			<Button
				onPress={() => {
					window.open("https://console.hetzner.cloud/", "_blank", "noopener,noreferrer");
				}}
				variant="outline"
			>
				Open Hetzner Cloud Console
			</Button>

			{error && (
				<Alert status="danger">
					<Heading level={4}>Error</Heading>
					<Text>{error}</Text>
				</Alert>
			)}

			{success && (
				<Alert status="success">
					<Heading level={4}>Success</Heading>
					<Text>
						{tokenData?.hasToken
							? "API token updated successfully"
							: "API token removed successfully"}
					</Text>
				</Alert>
			)}

			{tokenData?.hasToken ? (
				<Content>
					<Text>
						API token is configured (configured at:{" "}
						{tokenData.configuredAt
							? new Date(tokenData.configuredAt).toLocaleString()
							: "unknown"}
						)
					</Text>
					<Text>New API Token</Text>
					<TextField
						type="password"
						value={apiToken}
						onChange={(value) => {
							setApiToken(value);
							setError(null);
						}}
						placeholder="Enter new API token to update"
					/>
					<Content>
						<Button
							onPress={handleSubmit}
							isDisabled={!apiToken.trim() || setTokenMutation.isPending}
						>
							{setTokenMutation.isPending ? "Updating..." : "Update Token"}
						</Button>
						<Button
							variant="outline"
							onPress={() => deleteTokenMutation.mutate()}
							isDisabled={deleteTokenMutation.isPending}
						>
							{deleteTokenMutation.isPending ? "Removing..." : "Remove Token"}
						</Button>
					</Content>
				</Content>
			) : (
				<Content>
					<Text>API Token</Text>
					<TextField
						type="password"
						value={apiToken}
						onChange={(value) => {
							setApiToken(value);
							setError(null);
						}}
						placeholder="Enter your Hetzner Cloud API token"
					/>
					<Button
						onPress={handleSubmit}
						isDisabled={!apiToken.trim() || setTokenMutation.isPending}
					>
						{setTokenMutation.isPending ? "Saving..." : "Save Token"}
					</Button>
				</Content>
			)}
		</Content>
	);
}

