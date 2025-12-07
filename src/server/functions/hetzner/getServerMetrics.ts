import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

const GetServerMetricsParamsSchema = z.object({
	serverId: z.union([z.string(), z.number()]).transform((val) =>
		typeof val === "string" ? parseInt(val, 10) : val
	),
	type: z.enum(["cpu", "disk", "network", "cpu,disk", "cpu,network", "disk,network", "cpu,disk,network"]).default("cpu,disk,network"),
	start: z.string().optional(), // ISO-8601 format
	end: z.string().optional(), // ISO-8601 format
	step: z.string().optional(), // Resolution in seconds
});

export const getServerMetrics = createServerFn({ method: "GET" })
	.inputValidator(zodValidator(GetServerMetricsParamsSchema))
	.middleware([verifyAccessToInstance])
	.handler(async ({ context, data }: { context: unknown; data: unknown }) => {
		const { extensionInstanceId } = context as unknown as VerifiedContext;
		const parsed = data as z.infer<typeof GetServerMetricsParamsSchema>;
		const { serverId, type, start, end, step } = parsed;
		const client = await getHetznerClient(extensionInstanceId);

		// Default to last 24 hours if not specified
		const endDate = end ? new Date(end) : new Date();
		const startDate = start ? new Date(start) : new Date(Date.now() - 24 * 60 * 60 * 1000);

		const metrics = await client.getServerMetrics(serverId, {
			type,
			start: startDate.toISOString(),
			end: endDate.toISOString(),
			step,
		});

		return metrics;
	});

