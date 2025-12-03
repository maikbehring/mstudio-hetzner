import { cleanEnv, str, url } from "envalid";

const envSchema = {
	// Database
	DATABASE_URL: url(),
	PRISMA_FIELD_ENCRYPTION_KEY: str(),

	// mittwald
	EXTENSION_ID: str(),
	EXTENSION_SECRET: str(),

	NODE_ENV: str({
		choices: ["development", "test", "production"],
		default: "development",
	}),
};

// Validate and clean the environment
export const env = cleanEnv(process.env, envSchema);

// Hetzner Cloud API token (optional, for testing)
// Read directly from process.env to avoid envalid's default handling
export const HETZNER_API_TOKEN = process.env.HETZNER_API_TOKEN || "";

// Debug: Log if environment variable is set (only show first 10 chars for security)
if (HETZNER_API_TOKEN) {
	console.log("[env] HETZNER_API_TOKEN is set:", `${HETZNER_API_TOKEN.substring(0, 10)}... (length: ${HETZNER_API_TOKEN.length})`);
} else {
	console.log("[env] HETZNER_API_TOKEN is not set");
}
