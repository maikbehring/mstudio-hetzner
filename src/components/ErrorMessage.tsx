import { Alert, Text, Heading } from "@mittwald/flow-remote-react-components";

interface ErrorMessageProps {
	error: unknown;
	onRetry?: () => void;
	title?: string;
}

export function ErrorMessage({ error, onRetry, title = "Error" }: ErrorMessageProps) {
	const message = error instanceof Error ? error.message : String(error);
	return (
		<Alert status="danger">
			<Heading level={4}>{title}</Heading>
			<Text>{message}</Text>
			{onRetry && (
				<Text>
					<button onClick={onRetry}>Retry</button>
				</Text>
			)}
		</Alert>
	);
}
