import {
	Button,
	Heading,
	Text,
	Content,
	TextField,
	Alert,
	Section,
	ActionGroup,
	Label,
	FieldDescription,
} from "@mittwald/flow-remote-react-components";
import { useRouter } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { createServer } from "~/server/functions/hetzner/createServer";
import { getServerTypes } from "~/server/functions/hetzner/getServerTypes";
import { getSystemImages } from "~/server/functions/hetzner/getSystemImages";
import { getLocations } from "~/server/functions/hetzner/getLocations";
import { Loader } from "~/components/Loader";

export const Route = createFileRoute("/servers/create")({
	component: CreateServerComponent,
});

function CreateServerComponent() {
	const router = useRouter();
	const queryClient = useQueryClient();
	const [error, setError] = useState<string | null>(null);
	const [rootPassword, setRootPassword] = useState<string | null>(null);
	
	const [formData, setFormData] = useState({
		name: "",
		server_type: "",
		image: "",
		location: "",
		start_after_create: true,
	});

	// Load data for dropdowns
	const { data: serverTypes, isLoading: serverTypesLoading } = useQuery({
		queryKey: ["serverTypes"],
		queryFn: () => getServerTypes(),
	});

	const { data: images, isLoading: imagesLoading } = useQuery({
		queryKey: ["systemImages"],
		queryFn: () => getSystemImages(),
	});

	const { data: locations, isLoading: locationsLoading } = useQuery({
		queryKey: ["locations"],
		queryFn: () => getLocations(),
	});

	const createMutation = useMutation({
		mutationFn: async (data: typeof formData) => {
			const result = await createServer({ data });
			return result;
		},
		onSuccess: (result) => {
			// Show root password if provided
			if (result.root_password) {
				setRootPassword(result.root_password);
			}
			// Invalidate resources to refresh list
			queryClient.invalidateQueries({ queryKey: ["hetznerResources"] });
			// Navigate to server detail after a short delay
			setTimeout(() => {
				router.navigate({ 
					to: "/servers/$serverId", 
					params: { serverId: String(result.server.id) } 
				});
			}, rootPassword ? 5000 : 2000); // Give user time to copy password
		},
		onError: (err: Error) => {
			setError(err.message);
		},
	});

	const handleSubmit = () => {
		if (!formData.name.trim()) {
			setError("Server name is required");
			return;
		}
		if (!formData.server_type) {
			setError("Server type is required");
			return;
		}
		if (!formData.image) {
			setError("Image is required");
			return;
		}
		if (!formData.location) {
			setError("Location is required");
			return;
		}
		
		setError(null);
		createMutation.mutate(formData);
	};

	const isLoading = serverTypesLoading || imagesLoading || locationsLoading;

	if (isLoading) {
		return <Loader />;
	}

	// Root password modal
	if (rootPassword) {
		return (
			<Content>
				<Heading>Server Created Successfully</Heading>
				<Alert status="success">
					<Heading level={4}>Important: Save Your Root Password</Heading>
					<Text>
						Your server has been created. Please copy and save this root password.
						It will not be shown again.
					</Text>
				</Alert>
				<Section>
					<Label>Root Password</Label>
					<TextField
						type="text"
						value={rootPassword}
						isReadOnly
						onChange={() => {}}
					/>
					<FieldDescription>
						Click to select and copy this password. You will need it to access your server.
					</FieldDescription>
					<ActionGroup>
						<Button
							onPress={() => {
								navigator.clipboard.writeText(rootPassword);
							}}
						>
							Copy Password
						</Button>
						<Button
							variant="outline"
							onPress={() => {
								setRootPassword(null);
								router.navigate({ 
									to: "/servers/$serverId", 
									params: { serverId: String(createMutation.data?.server.id) } 
								});
							}}
						>
							Continue to Server
						</Button>
					</ActionGroup>
				</Section>
			</Content>
		);
	}

	return (
		<Content>
			<Heading>Create New Server</Heading>
			<Text>
				Configure your new Hetzner Cloud server. All fields marked with * are required.
			</Text>

			{error && (
				<Alert status="danger">
					<Heading level={4}>Error</Heading>
					<Text>{error}</Text>
				</Alert>
			)}

			{createMutation.isPending && (
				<Alert status="info">
					<Heading level={4}>Creating Server...</Heading>
					<Text>Please wait while your server is being created. This may take a few moments.</Text>
				</Alert>
			)}

			<Section>
				<Label>Server Name *</Label>
				<TextField
					value={formData.name}
					onChange={(value) => {
						setFormData({ ...formData, name: value });
						setError(null);
					}}
					placeholder="web-server-01"
					isDisabled={createMutation.isPending}
				/>
				<FieldDescription>
					Must be unique and a valid hostname (RFC 1123). Only letters, numbers, dots, and dashes allowed.
				</FieldDescription>
			</Section>

			<Section>
				<Label>Server Type *</Label>
				<TextField
					value={formData.server_type}
					onChange={(value) => {
						setFormData({ ...formData, server_type: value });
						setError(null);
					}}
					placeholder="Select or type server type (e.g., cx11)"
					isDisabled={createMutation.isPending}
				/>
				<FieldDescription>
					Available server types: {serverTypes?.server_types.map(st => st.name).join(", ")}
				</FieldDescription>
				{serverTypes && (
					<Content>
						{serverTypes.server_types.slice(0, 5).map((st) => (
							<Button
								key={st.id}
								variant="outline"
								size="s"
								onPress={() => {
									setFormData({ ...formData, server_type: st.name });
								}}
								isDisabled={createMutation.isPending}
							>
								{st.name} - {st.description} ({st.cores} cores, {st.memory}GB RAM, {st.disk}GB disk)
							</Button>
						))}
					</Content>
				)}
			</Section>

			<Section>
				<Label>Image *</Label>
				<TextField
					value={formData.image}
					onChange={(value) => {
						setFormData({ ...formData, image: value });
						setError(null);
					}}
					placeholder="Select or type image (e.g., ubuntu-22.04)"
					isDisabled={createMutation.isPending}
				/>
				<FieldDescription>
					Available images: {images?.images.slice(0, 10).map(img => img.name || String(img.id)).join(", ")}
				</FieldDescription>
				{images && (
					<Content>
						{images.images.slice(0, 5).map((img) => (
							<Button
								key={img.id}
								variant="outline"
								size="s"
								onPress={() => {
									setFormData({ ...formData, image: img.name || String(img.id) });
								}}
								isDisabled={createMutation.isPending}
							>
								{img.name || String(img.id)} ({img.os_flavor} {img.os_version})
							</Button>
						))}
					</Content>
				)}
			</Section>

			<Section>
				<Label>Location *</Label>
				<TextField
					value={formData.location}
					onChange={(value) => {
						setFormData({ ...formData, location: value });
						setError(null);
					}}
					placeholder="Select or type location (e.g., nbg1)"
					isDisabled={createMutation.isPending}
				/>
				<FieldDescription>
					Available locations: {locations?.locations.map(loc => `${loc.name} (${loc.city}, ${loc.country})`).join(", ")}
				</FieldDescription>
				{locations && (
					<Content>
						{locations.locations.map((loc) => (
							<Button
								key={loc.id}
								variant="outline"
								size="s"
								onPress={() => {
									setFormData({ ...formData, location: loc.name });
								}}
								isDisabled={createMutation.isPending}
							>
								{loc.name} - {loc.city}, {loc.country}
							</Button>
						))}
					</Content>
				)}
			</Section>

			<ActionGroup>
				<Button
					onPress={handleSubmit}
					isDisabled={createMutation.isPending || !formData.name || !formData.server_type || !formData.image || !formData.location}
				>
					{createMutation.isPending ? "Creating..." : "Create Server"}
				</Button>
				<Button
					variant="outline"
					onPress={() => router.navigate({ to: "/" })}
					isDisabled={createMutation.isPending}
				>
					Cancel
				</Button>
			</ActionGroup>
		</Content>
	);
}

