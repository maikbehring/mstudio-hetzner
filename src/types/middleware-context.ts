/**
 * Type definition for the context passed by verifyAccessToInstance middleware
 * This is needed because the middleware uses 'as any' to pass data, which breaks TypeScript inference
 */
export type VerifiedContext = {
	extensionInstanceId: string;
	extensionId: string;
	userId: string;
	contextId: string;
	projectId: string | undefined;
};






