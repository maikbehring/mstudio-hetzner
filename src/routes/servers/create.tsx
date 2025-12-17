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
import { useState, useMemo } from "react";
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

	// Load data
	const { data: serverTypes, isLoading: serverTypesLoading, error: serverTypesError } = useQuery({
		queryKey: ["serverTypes"],
		queryFn: async () => {
			const result = await getServerTypes();
			return result;
		},
	});

	const { data: images, isLoading: imagesLoading, error: imagesError } = useQuery({
		queryKey: ["systemImages"],
		queryFn: async () => {
			const result = await getSystemImages();
			return result;
		},
	});

	const { data: locations, isLoading: locationsLoading, error: locationsError } = useQuery({
		queryKey: ["locations"],
		queryFn: async () => {
			const result = await getLocations();
			return result;
		},
	});

	// Helper function to determine server type architecture
	const getServerTypeArchitecture = (serverTypeName: string): "x86" | "arm" => {
		return serverTypeName.startsWith("ca") ? "arm" : "x86";
	};

	// Helper function to determine image architecture
	const getImageArchitecture = (image: { architecture?: "x86" | "arm"; name?: string | null; os_flavor?: string | null }): "x86" | "arm" => {
		if (image.architecture) {
			return image.architecture;
		}
		if (image.name?.toLowerCase().includes("arm") || image.os_flavor?.toLowerCase().includes("arm")) {
			return "arm";
		}
		return "x86";
	};

	// Filter images based on selected server type architecture
	const compatibleImages = useMemo(() => {
		if (!images?.images || !formData.server_type) {
			return images?.images || [];
		}
		const serverArchitecture = getServerTypeArchitecture(formData.server_type);
		return images.images.filter((img) => {
			const imageArchitecture = getImageArchitecture(img);
			return imageArchitecture === serverArchitecture;
		});
	}, [images, formData.server_type]);

	const createMutation = useMutation({
		mutationFn: async (data: typeof formData) => {
			if (!data.server_type || !data.image || !data.location) {
				throw new Error("Please select all required fields");
			}

			const cleanData = {
				name: data.name,
				server_type: data.server_type,
				image: data.image,
				location: data.location,
				start_after_create: data.start_after_create,
			};

			const result = await createServer({ data: cleanData });
			return result;
		},
		onSuccess: (result) => {
			if (result.root_password) {
				setRootPassword(result.root_password);
			}
			queryClient.invalidateQueries({ queryKey: ["hetznerResources"] });
			setTimeout(() => {
				router.navigate({ 
					to: "/servers/$serverId", 
					params: { serverId: String(result.server.id) } 
				});
			}, rootPassword ? 5000 : 2000);
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
	const hasError = serverTypesError || imagesError || locationsError;

	if (isLoading) {
		return (
			<Content>
				<Section>
					<Heading>Create New Server</Heading>
					<Loader />
					<Text>Loading server types, images, and locations...</Text>
				</Section>
			</Content>
		);
	}

	if (hasError) {
		return (
			<Content>
				<Section>
					<Heading>Error Loading Data</Heading>
					<Alert status="danger">
						<Heading level={4}>Failed to load server creation data</Heading>
						<Text>
							{serverTypesError && `Server Types: ${serverTypesError instanceof Error ? serverTypesError.message : String(serverTypesError)}`}
							{imagesError && `Images: ${imagesError instanceof Error ? imagesError.message : String(imagesError)}`}
							{locationsError && `Locations: ${locationsError instanceof Error ? locationsError.message : String(locationsError)}`}
						</Text>
					</Alert>
					<ActionGroup>
						<Button variant="outline" onPress={() => router.navigate({ to: "/" })}>
							Go Back
						</Button>
						<Button
							onPress={() => {
								queryClient.invalidateQueries({ queryKey: ["serverTypes"] });
								queryClient.invalidateQueries({ queryKey: ["systemImages"] });
								queryClient.invalidateQueries({ queryKey: ["locations"] });
							}}
						>
							Retry
						</Button>
					</ActionGroup>
				</Section>
			</Content>
		);
	}

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
			<Section>
				<Heading>Create New Server</Heading>
				<Text>
					Configure your new Hetzner Cloud server. All fields marked with * are required.
				</Text>
			</Section>

			{error && (
				<Section>
					<Alert status="danger">
						<Heading level={4}>Error</Heading>
						<Text>{error}</Text>
					</Alert>
				</Section>
			)}

			{createMutation.isPending && (
				<Section>
					<Alert status="info">
						<Heading level={4}>Creating Server...</Heading>
						<Text>Please wait while your server is being created. This may take a few moments.</Text>
					</Alert>
				</Section>
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
					Only lowercase letters, numbers, hyphens, and dots allowed. Invalid characters will be automatically cleaned.
				</FieldDescription>
			</Section>

			<Section>
				<Label>Server Type *</Label>
				{serverTypes && serverTypes.server_types.length > 0 ? (
					<>
						<TextField
							value={formData.server_type ? serverTypes.server_types.find(st => st.name === formData.server_type) 
								? (() => {
									const st = serverTypes.server_types.find(st => st.name === formData.server_type)!;
									const price = st.prices.length > 0 ? `€${parseFloat(st.prices[0].price_monthly.gross).toFixed(2)}/month` : "";
									return `${formData.server_type} - ${st.description} (${st.cores} cores, ${st.memory}GB RAM, ${st.disk}GB disk${price ? `, ${price}` : ""})`;
								})()
								: formData.server_type
								: ""}
							onChange={() => {}}
							placeholder="Select a server type below"
							isReadOnly
							isDisabled={createMutation.isPending}
						/>
						<FieldDescription>
							Click on a server type below to select it.
						</FieldDescription>
						<Content>
							{serverTypes.server_types.map((st) => {
								const price = st.prices.length > 0 ? `€${parseFloat(st.prices[0].price_monthly.gross).toFixed(2)}/month` : "";
								const serverTypeLabel = `${st.name} - ${st.description} (${st.cores} cores, ${st.memory}GB RAM, ${st.disk}GB disk${price ? `, ${price}` : ""})`;
								const isSelected = formData.server_type === st.name;
								return (
									<Button
										key={st.name}
										variant={isSelected ? "solid" : "outline"}
										onPress={() => {
											setFormData({ 
												...formData, 
												server_type: st.name,
												image: "", // Reset image when server type changes
											});
											setError(null);
										}}
										isDisabled={createMutation.isPending}
									>
										{serverTypeLabel}
									</Button>
								);
							})}
						</Content>
					</>
				) : (
					<>
						<TextField
							value=""
							onChange={() => {}}
							placeholder="Loading server types..."
							isDisabled={true}
						/>
						<FieldDescription>
							No server types available. Please check your API token configuration.
						</FieldDescription>
					</>
				)}
			</Section>

			<Section>
				<Label>Image *</Label>
				{images && compatibleImages.length > 0 ? (
					<>
						<TextField
							value={formData.image ? compatibleImages.find(img => String(img.id) === formData.image)
								? compatibleImages.find(img => String(img.id) === formData.image)!.name 
									? `${compatibleImages.find(img => String(img.id) === formData.image)!.name} (${compatibleImages.find(img => String(img.id) === formData.image)!.os_flavor} ${compatibleImages.find(img => String(img.id) === formData.image)!.os_version})`
									: `${compatibleImages.find(img => String(img.id) === formData.image)!.os_flavor} ${compatibleImages.find(img => String(img.id) === formData.image)!.os_version} (ID: ${compatibleImages.find(img => String(img.id) === formData.image)!.id})`
								: formData.image
								: ""}
							onChange={() => {}}
							placeholder={formData.server_type ? "Select an image below" : "Please select a server type first"}
							isReadOnly
							isDisabled={createMutation.isPending || !formData.server_type}
						/>
						<FieldDescription>
							Click on an image below to select it.
						</FieldDescription>
						{formData.server_type && compatibleImages.length < images.images.length && (
							<FieldDescription>
								Showing {compatibleImages.length} of {images.images.length} images compatible with {formData.server_type} ({getServerTypeArchitecture(formData.server_type).toUpperCase()} architecture).
							</FieldDescription>
						)}
						<Content>
							{compatibleImages.map((img) => {
								const imageLabel = img.name 
									? `${img.name} (${img.os_flavor} ${img.os_version})`
									: `${img.os_flavor} ${img.os_version} (ID: ${img.id})`;
								const isSelected = formData.image === String(img.id);
								return (
									<Button
										key={String(img.id)}
										variant={isSelected ? "solid" : "outline"}
										onPress={() => {
											setFormData({ ...formData, image: String(img.id) });
											setError(null);
										}}
										isDisabled={createMutation.isPending || !formData.server_type}
									>
										{imageLabel}
									</Button>
								);
							})}
						</Content>
					</>
				) : images && images.images.length > 0 && formData.server_type ? (
					<>
						<TextField
							value=""
							onChange={() => {}}
							placeholder="No compatible images available"
							isDisabled={true}
						/>
						<Alert status="warning">
							<Text>
								No images available for {formData.server_type} ({getServerTypeArchitecture(formData.server_type).toUpperCase()} architecture). 
								Please select a different server type.
							</Text>
						</Alert>
					</>
				) : (
					<>
						<TextField
							value=""
							onChange={() => {}}
							placeholder={formData.server_type ? "Loading images..." : "Please select a server type first"}
							isDisabled={true}
						/>
						<FieldDescription>
							{formData.server_type ? "No images available. Please check your API token configuration." : "Please select a server type first to see compatible images."}
						</FieldDescription>
					</>
				)}
			</Section>

			<Section>
				<Label>Location *</Label>
				{locations && locations.locations.length > 0 ? (
					<>
						<TextField
							value={formData.location ? locations.locations.find(loc => loc.name === formData.location)
								? `${formData.location} - ${locations.locations.find(loc => loc.name === formData.location)!.city}, ${locations.locations.find(loc => loc.name === formData.location)!.country}`
								: formData.location
								: ""}
							onChange={() => {}}
							placeholder="Select a location below"
							isReadOnly
							isDisabled={createMutation.isPending}
						/>
						<FieldDescription>
							Click on a location below to select it.
						</FieldDescription>
						<Content>
							{locations.locations.map((loc) => {
								const locationLabel = `${loc.name} - ${loc.city}, ${loc.country}`;
								const isSelected = formData.location === loc.name;
								return (
									<Button
										key={loc.name}
										variant={isSelected ? "solid" : "outline"}
										onPress={() => {
											setFormData({ ...formData, location: loc.name });
											setError(null);
										}}
										isDisabled={createMutation.isPending}
									>
										{locationLabel}
									</Button>
								);
							})}
						</Content>
					</>
				) : (
					<>
						<TextField
							value=""
							onChange={() => {}}
							placeholder="Loading locations..."
							isDisabled={true}
						/>
						<FieldDescription>
							No locations available. Please check your API token configuration.
						</FieldDescription>
					</>
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
