import {
	CartesianChart,
	Area,
	Line,
	Section,
	Heading,
	Content,
	Alert,
	Text,
} from "@mittwald/flow-remote-react-components";
import { useQuery } from "@tanstack/react-query";
import { getServerMetrics } from "~/server/functions/hetzner/getServerMetrics";
import { Loader } from "~/components/Loader";
import { useMemo } from "react";

interface ServerMetricsProps {
	serverId: string;
	serverStatus: string;
}

export function ServerMetrics({ serverId, serverStatus }: ServerMetricsProps) {
	// Get metrics for the last 24 hours - only calculate client-side
	const { startDate, endDate } = useMemo(() => {
		const end = new Date();
		const start = new Date(Date.now() - 24 * 60 * 60 * 1000);
		return {
			startDate: start,
			endDate: end,
		};
	}, []);

	const {
		data: metricsData,
		isLoading: metricsLoading,
		error: metricsError,
	} = useQuery({
		queryKey: ["hetznerServerMetrics", serverId, startDate.toISOString(), endDate.toISOString()],
		queryFn: () => (getServerMetrics as any)({
			data: {
				serverId,
				type: "cpu,disk,network",
				start: startDate.toISOString(),
				end: endDate.toISOString(),
			},
		}),
		enabled: serverStatus === "running",
		refetchInterval: 60000, // Refetch every minute
	});

	if (serverStatus !== "running") {
		return null;
	}

	return (
		<Section>
			<Heading level={3}>Server Auslastung</Heading>
			{metricsLoading && <Loader />}
			{metricsError && (
				<Alert status="warning">
					<Text>Metriken konnten nicht geladen werden.</Text>
				</Alert>
			)}
			{metricsData?.metrics && (() => {
				// Process metrics data
				const cpuData = metricsData.metrics.cpu ? metricsData.metrics.cpu.values.map(([timestamp, value]: [number, number | string]) => ({
					time: new Date(timestamp * 1000),
					cpu: typeof value === "string" ? parseFloat(value) : value,
				})) : [];

				const diskData = (() => {
					const readData = metricsData.metrics["disk.0.iops.read"]?.values || [];
					const writeData = metricsData.metrics["disk.0.iops.write"]?.values || [];
					if (readData.length === 0 && writeData.length === 0) return [];
					const maxLength = Math.max(readData.length, writeData.length);
					return Array.from({ length: maxLength }, (_, i) => {
						const read = readData[i] as [number, number | string] | undefined;
						const write = writeData[i] as [number, number | string] | undefined;
						return {
							time: read ? new Date(read[0] * 1000) : write ? new Date(write[0] * 1000) : new Date(0),
							read: read ? (typeof read[1] === "string" ? parseFloat(read[1]) : read[1]) : 0,
							write: write ? (typeof write[1] === "string" ? parseFloat(write[1]) : write[1]) : 0,
						};
					});
				})();

				const networkData = (() => {
					const inData = metricsData.metrics["network.0.bandwidth.in"]?.values || [];
					const outData = metricsData.metrics["network.0.bandwidth.out"]?.values || [];
					if (inData.length === 0 && outData.length === 0) return [];
					const maxLength = Math.max(inData.length, outData.length);
					return Array.from({ length: maxLength }, (_, i) => {
						const inVal = inData[i] as [number, number | string] | undefined;
						const outVal = outData[i] as [number, number | string] | undefined;
						return {
							time: inVal ? new Date(inVal[0] * 1000) : outVal ? new Date(outVal[0] * 1000) : new Date(0),
							in: inVal ? (typeof inVal[1] === "string" ? parseFloat(inVal[1]) : inVal[1]) : 0,
							out: outVal ? (typeof outVal[1] === "string" ? parseFloat(outVal[1]) : outVal[1]) : 0,
						};
					});
				})();

				return (
					<Content>
						{cpuData.length > 0 && (
							<Section>
								<Heading level={4}>CPU Auslastung</Heading>
								<CartesianChart
									height="200"
									data={cpuData}
								>
									<Area dataKey="cpu" color="blue" />
									<Line dataKey="cpu" color="blue" />
								</CartesianChart>
							</Section>
						)}
						{diskData.length > 0 && (
							<Section>
								<Heading level={4}>Disk IOPS</Heading>
								<CartesianChart
									height="200"
									data={diskData}
								>
									<Area dataKey="read" color="green" />
									<Area dataKey="write" color="orange" />
								</CartesianChart>
							</Section>
						)}
						{networkData.length > 0 && (
							<Section>
								<Heading level={4}>Network Bandwidth</Heading>
								<CartesianChart
									height="200"
									data={networkData}
								>
									<Area dataKey="in" color="blue" />
									<Area dataKey="out" color="purple" />
								</CartesianChart>
							</Section>
						)}
					</Content>
				);
			})()}
		</Section>
	);
}

