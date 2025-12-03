import { db } from "~/db";
import { HetznerApiClient } from "~/lib/hetzner-api";
import { HETZNER_API_TOKEN } from "~/env";

export async function getHetznerClient(extensionInstanceId: string): Promise<HetznerApiClient> {
	// First, check if API token is set in environment variables (for testing)
	console.log("[getHetznerClient] Checking environment variable:", {
		hasEnvToken: !!HETZNER_API_TOKEN,
		envTokenLength: HETZNER_API_TOKEN?.length || 0,
		envTokenPreview: HETZNER_API_TOKEN ? `${HETZNER_API_TOKEN.substring(0, 10)}...` : "not set",
	});
	
	if (HETZNER_API_TOKEN && HETZNER_API_TOKEN.trim() !== "") {
		console.log("[getHetznerClient] Using environment variable token");
		return new HetznerApiClient(HETZNER_API_TOKEN);
	}

	// Otherwise, try to get it from the database
	console.log("[getHetznerClient] Environment variable not set, checking database");
	const token = await db.hetznerApiToken.findUnique({
		where: { extensionInstanceId },
		select: { apiToken: true },
	});

	if (!token) {
		throw new Error("Hetzner API token not configured. Please configure your API token in settings or set HETZNER_API_TOKEN environment variable.");
	}

	console.log("[getHetznerClient] Using database token");
	return new HetznerApiClient(token.apiToken);
}

