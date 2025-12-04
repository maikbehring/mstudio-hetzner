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
	Select,
	Option,
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
	console.log("[CreateServer] Component rendering");
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
	const { data: serverTypes, isLoading: serverTypesLoading, error: serverTypesError } = useQuery({
		queryKey: ["serverTypes"],
		queryFn: async () => {
			try {
				const result = await getServerTypes();
				console.log("[CreateServer] Server types loaded:", result);
				return result;
			} catch (error) {
				console.error("[CreateServer] Error loading server types:", error);
				throw error;
			}
		},
	});

	const { data: images, isLoading: imagesLoading, error: imagesError } = useQuery({
		queryKey: ["systemImages"],
		queryFn: async () => {
			try {
				const result = await getSystemImages();
				console.log("[CreateServer] Images loaded:", result);
				return result;
			} catch (error) {
				console.error("[CreateServer] Error loading images:", error);
				throw error;
			}
		},
	});

	const { data: locations, isLoading: locationsLoading, error: locationsError } = useQuery({
		queryKey: ["locations"],
		queryFn: async () => {
			try {
				const result = await getLocations();
				console.log("[CreateServer] Locations loaded:", result);
				return result;
			} catch (error) {
				console.error("[CreateServer] Error loading locations:", error);
				throw error;
			}
		},
	});

	// Helper function to determine server type architecture
	// Server types starting with "ca" (e.g., "cax11", "cpx11") are ARM-based
	// All others are x86-based
	const getServerTypeArchitecture = (serverTypeName: string): "x86" | "arm" => {
		return serverTypeName.startsWith("ca") ? "arm" : "x86";
	};

	// Helper function to determine image architecture
	// First check if architecture is explicitly provided in the API response
	// Otherwise, infer from image name or OS flavor
	const getImageArchitecture = (image: { architecture?: "x86" | "arm"; name?: string | null; os_flavor?: string | null }): "x86" | "arm" => {
		// If architecture is explicitly provided, use it
		if (image.architecture) {
			return image.architecture;
		}
		// Otherwise, default to x86 (most images are x86)
		// ARM images typically have "arm" in their name or are explicitly marked
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

	// Create mapping from label text to image ID
	// Select returns the label text, not the key, so we need to map it back to the ID
	// Only include compatible images in the map
	const imageLabelToIdMap = useMemo(() => {
		if (!compatibleImages) return new Map<string, string>();
		const map = new Map<string, string>();
		compatibleImages.forEach((img) => {
			const imageLabel = img.name 
				? `${img.name} (${img.os_flavor} ${img.os_version})`
				: `${img.os_flavor} ${img.os_version} (ID: ${img.id})`;
			map.set(imageLabel, String(img.id));
		});
		return map;
	}, [compatibleImages]);

	// Create mapping from server type label text to server type name
	const serverTypeLabelToNameMap = useMemo(() => {
		if (!serverTypes?.server_types) return new Map<string, string>();
		const map = new Map<string, string>();
		serverTypes.server_types.forEach((st) => {
			const serverTypeLabel = `${st.name} - ${st.description} (${st.cores} cores, ${st.memory / 1024}GB RAM, ${st.disk}GB disk)`;
			map.set(serverTypeLabel, st.name);
		});
		return map;
	}, [serverTypes]);

	// Create mapping from location label text to location name
	const locationLabelToNameMap = useMemo(() => {
		if (!locations?.locations) return new Map<string, string>();
		const map = new Map<string, string>();
		locations.locations.forEach((loc) => {
			const locationLabel = `${loc.name} - ${loc.city}, ${loc.country}`;
			map.set(locationLabel, loc.name);
		});
		return map;
	}, [locations]);

	const createMutation = useMutation({
		mutationFn: async (data: typeof formData) => {
			console.log("[CreateServer] Calling createServer with data:", data);
			// createServer expects data directly, not wrapped in { data }
			const result = await createServer({ data });
			console.log("[CreateServer] createServer result:", result);
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
	const hasError = serverTypesError || imagesError || locationsError;

	if (isLoading) {
		console.log("[CreateServer] Still loading data");
		return (
			<Content>
				<Section>
					<Heading>Create New Server</Heading>
					<Loader />
					<Text>Loading server types, images, and locations...</Text>
					<Text>
						Server Types: {serverTypesLoading ? "Loading..." : serverTypes ? "Loaded" : "Not loaded"}
						<br />
						Images: {imagesLoading ? "Loading..." : images ? "Loaded" : "Not loaded"}
						<br />
						Locations: {locationsLoading ? "Loading..." : locations ? "Loaded" : "Not loaded"}
					</Text>
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
						<Button
							variant="outline"
							onPress={() => {
								router.navigate({ to: "/" });
							}}
						>
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

	// Debug: Log current state
	console.log("[CreateServer] Rendering form:", {
		serverTypes: serverTypes ? `${serverTypes.server_types?.length || 0} types` : "null",
		images: images ? `${images.images?.length || 0} images` : "null",
		locations: locations ? `${locations.locations?.length || 0} locations` : "null",
		formData,
		hasError,
		serverTypesError: serverTypesError ? String(serverTypesError) : null,
		imagesError: imagesError ? String(imagesError) : null,
		locationsError: locationsError ? String(locationsError) : null,
	});

	return (
		<Content>
			<Section>
				<Heading>Create New Server</Heading>
				<Text>
					Configure your new Hetzner Cloud server. All fields marked with * are required.
				</Text>
				{(!serverTypes || !images || !locations) && (
					<Alert status="warning">
						<Text>
							Some data is still loading. Server Types: {serverTypes ? "✓" : "Loading..."}, Images: {images ? "✓" : "Loading..."}, Locations: {locations ? "✓" : "Loading..."}
						</Text>
					</Alert>
				)}
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
					Must be unique and a valid hostname (RFC 1123). Only letters, numbers, dots, and dashes allowed.
				</FieldDescription>
			</Section>

			<Section>
				{serverTypes && serverTypes.server_types.length > 0 ? (
					<Select
						selectedKey={formData.server_type ? (() => {
							// Find the label for the selected server type name
							const selectedServerType = serverTypes.server_types.find(st => st.name === formData.server_type);
							return selectedServerType 
								? `${selectedServerType.name} - ${selectedServerType.description} (${selectedServerType.cores} cores, ${selectedServerType.memory / 1024}GB RAM, ${selectedServerType.disk}GB disk)`
								: null;
						})() : null}
						onSelectionChange={(selectedText) => {
							if (selectedText) {
								// Select returns the label text, not the key
								// Map it back to the server type name
								const serverTypeName = serverTypeLabelToNameMap.get(String(selectedText));
								if (serverTypeName) {
									// Check if currently selected image is compatible with new server type
									const newServerArchitecture = getServerTypeArchitecture(serverTypeName);
									const currentImage = images?.images.find(img => String(img.id) === formData.image);
									const isCurrentImageCompatible = currentImage 
										? getImageArchitecture(currentImage) === newServerArchitecture
										: true;
									
									setFormData({ 
										...formData, 
										server_type: serverTypeName,
										// Reset image if it's not compatible with the new server type
										image: isCurrentImageCompatible ? formData.image : "",
									});
									setError(null);
								} else {
									console.error("[CreateServer] Could not find server type name for label:", selectedText);
									setError("Invalid server type selection");
								}
							}
						}}
						isDisabled={createMutation.isPending}
					>
						<Label>Server Type *</Label>
						{serverTypes.server_types.map((st) => {
							const serverTypeLabel = `${st.name} - ${st.description} (${st.cores} cores, ${st.memory / 1024}GB RAM, ${st.disk}GB disk)`;
							return (
								<Option key={st.name}>
									{serverTypeLabel}
								</Option>
							);
						})}
					</Select>
				) : (
					<>
						<Label>Server Type *</Label>
						<TextField
							value={formData.server_type}
							onChange={(value) => {
								setFormData({ ...formData, server_type: value });
								setError(null);
							}}
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
				{images && compatibleImages.length > 0 ? (
					<>
						<Select
							selectedKey={formData.image ? (() => {
								// Find the label for the selected image ID (only in compatible images)
								const selectedImage = compatibleImages.find(img => String(img.id) === formData.image);
								return selectedImage 
									? (selectedImage.name 
										? `${selectedImage.name} (${selectedImage.os_flavor} ${selectedImage.os_version})`
										: `${selectedImage.os_flavor} ${selectedImage.os_version} (ID: ${selectedImage.id})`)
									: null;
							})() : null}
							onSelectionChange={(selectedText) => {
								if (selectedText) {
									// Select returns the label text, not the key
									// Map it back to the image ID
									const imageId = imageLabelToIdMap.get(String(selectedText));
									if (imageId) {
										setFormData({ ...formData, image: imageId });
										setError(null);
									} else {
										console.error("[CreateServer] Could not find image ID for label:", selectedText);
										setError("Invalid image selection");
									}
								}
							}}
							isDisabled={createMutation.isPending || !formData.server_type}
						>
							<Label>Image *</Label>
							{compatibleImages.map((img) => {
								// Use ID as key to ensure uniqueness (multiple images can have the same name)
								const imageKey = String(img.id);
								const imageLabel = img.name 
									? `${img.name} (${img.os_flavor} ${img.os_version})`
									: `${img.os_flavor} ${img.os_version} (ID: ${img.id})`;
								return (
									<Option key={imageKey}>
										{imageLabel}
									</Option>
								);
							})}
						</Select>
						{formData.server_type && compatibleImages.length < images.images.length && (
							<FieldDescription>
								Showing {compatibleImages.length} of {images.images.length} images compatible with {formData.server_type} ({getServerTypeArchitecture(formData.server_type).toUpperCase()} architecture).
							</FieldDescription>
						)}
					</>
				) : images && images.images.length > 0 && formData.server_type ? (
					<>
						<Label>Image *</Label>
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
				) : images && images.images.length > 0 ? (
					<>
						<Label>Image *</Label>
						<TextField
							value={formData.image}
							onChange={(value) => {
								setFormData({ ...formData, image: value });
								setError(null);
							}}
							placeholder="Please select a server type first"
							isDisabled={true}
						/>
						<FieldDescription>
							Please select a server type first to see compatible images.
						</FieldDescription>
					</>
				) : (
					<>
						<Label>Image *</Label>
						<TextField
							value={formData.image}
							onChange={(value) => {
								setFormData({ ...formData, image: value });
								setError(null);
							}}
							placeholder="Loading images..."
							isDisabled={true}
						/>
						<FieldDescription>
							No images available. Please check your API token configuration.
						</FieldDescription>
					</>
				)}
			</Section>

			<Section>
				{locations && locations.locations.length > 0 ? (
					<Select
						selectedKey={formData.location ? (() => {
							// Find the label for the selected location name
							const selectedLocation = locations.locations.find(loc => loc.name === formData.location);
							return selectedLocation 
								? `${selectedLocation.name} - ${selectedLocation.city}, ${selectedLocation.country}`
								: null;
						})() : null}
						onSelectionChange={(selectedText) => {
							if (selectedText) {
								// Select returns the label text, not the key
								// Map it back to the location name
								const locationName = locationLabelToNameMap.get(String(selectedText));
								if (locationName) {
									setFormData({ ...formData, location: locationName });
									setError(null);
								} else {
									console.error("[CreateServer] Could not find location name for label:", selectedText);
									setError("Invalid location selection");
								}
							}
						}}
						isDisabled={createMutation.isPending}
					>
						<Label>Location *</Label>
						{locations.locations.map((loc) => {
							const locationLabel = `${loc.name} - ${loc.city}, ${loc.country}`;
							return (
								<Option key={loc.name}>
									{locationLabel}
								</Option>
							);
						})}
					</Select>
				) : (
					<>
						<Label>Location *</Label>
						<TextField
							value={formData.location}
							onChange={(value) => {
								setFormData({ ...formData, location: value });
								setError(null);
							}}
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

