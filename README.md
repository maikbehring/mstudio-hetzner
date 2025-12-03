# mittwald – Hetzner Cloud Extension

Zentrale Verwaltung aller Hetzner-Cloud-Ressourcen direkt im mittwald Control Panel.

Die mittwald–Hetzner Cloud Extension ermöglicht Agenturen, die sowohl mittwald-Produkte als auch Hetzner Cloud-Infrastruktur nutzen, eine vollständig integrierte Verwaltung ihrer Systeme aus einer Oberfläche. Statt zwischen verschiedenen Dashboards zu wechseln, erhalten Agenturen eine einheitliche Sicht auf Projekte, Server und Infrastrukturzustände – direkt im vertrauten mittwald-Ökosystem.

## Features

### Epic 1: Hetzner-Ressourcen sichtbar machen
- ✅ **Ressourcenübersicht**: Alle Hetzner-Cloud-Ressourcen (Server, Volumes, IPs, Snapshots) im mittwald-Panel anzeigen
- ✅ **Detailansicht eines Servers**: Status, Region, Typ, Kosten, IPs, OS, Backups
- ✅ **Kostenübersicht**: Geschätzte monatliche Kosten der Hetzner-Ressourcen

### Epic 2: Ressourcen Projekten und Kunden zuordnen
- ✅ **Manuelle Zuordnung**: Hetzner-Server mittwald-Kunden oder Projekten zuordnen
- ✅ **Tagging-Funktionen**: Eigene Tags oder Labels für Server vergeben

### Epic 3: Status & Monitoring sichtbar machen
- ✅ **Live-Status**: Aktueller Status und Erreichbarkeit eines Hetzner-Servers
- ✅ **Ereignis-/Activity-Log**: Hetzner-Events (Reboots, Scaling, Firewall Changes) einsehen

### Epic 4: Grundlegende Verwaltungsfunktionen
- ✅ **Server Neustarten**: Server neu starten können
- ✅ **Ein-/Ausschalten**: Server abschalten oder hochfahren können
- ✅ **Firewall-Zustand anzeigen**: Firewall-Regeln einsehen (View only)

### Epic 5: Kundenkommunikation & Support
- ✅ **Notizfunktion**: Notizen pro Server hinterlegen

### Epic 6: Authentifizierung & Rechte
- ✅ **API-Token-Verknüpfung**: Hetzner-Konto mit dem mittwald-Panel verbinden
- ✅ **Rollen & Berechtigungen**: Zugriffskontrolle über mittwald Extension System

## Getting Started

### Prerequisites

- Node.js v20.11.1 or higher
- pnpm v10.4.1 or higher
- PostgreSQL database (non-pooling connection)
- Hetzner Cloud API Token ([Generate here](https://console.hetzner.cloud/))

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up your environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

   Required environment variables:
   - `DATABASE_URL` - PostgreSQL connection string
   - `PRISMA_FIELD_ENCRYPTION_KEY` - Encryption key for sensitive fields
   - `EXTENSION_ID` - Your mittwald extension ID
   - `EXTENSION_SECRET` - Your mittwald extension secret

3. Generate Prisma client and run migrations:
   ```bash
   pnpm db:generate
   pnpm db:migrate:dev
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

Your extension will be available at `http://localhost:5173`

### Optional Environment Variables

- `HETZNER_API_TOKEN` - Hetzner Cloud API token (optional, for local development/testing only)
  - ⚠️ **Note**: In production, tokens should be stored in the database via the Settings page, not environment variables
  - This variable is only used if no token is found in the database

## Production Deployment

### Before Deploying

1. **Remove Debug Logging**: The codebase contains `console.log` statements for debugging. Consider:
   - Removing debug logs or wrapping them in conditional checks (`if (process.env.NODE_ENV === 'development')`)
   - Using a proper logging library (e.g., `pino`, `winston`) with log levels

2. **Environment Variables**: Set all required environment variables in your hosting platform:
   - `DATABASE_URL` - Use SSL connection string in production
   - `PRISMA_FIELD_ENCRYPTION_KEY` - Generate a secure random key (32+ characters)
   - `EXTENSION_ID` - Your mittwald extension ID
   - `EXTENSION_SECRET` - Your mittwald extension secret
   - `NODE_ENV=production`

3. **Database Setup**:
   ```bash
   pnpm db:generate
   pnpm db:migrate:deploy
   ```

4. **Build and Start**:
   ```bash
   pnpm build
   pnpm start
   ```

### Deployment Platforms

#### Render

A `render.yaml` blueprint is included for easy deployment on Render. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Start:**
1. Push your code to a Git repository
2. Create a new Render Blueprint
3. Connect your repository
4. Render will automatically:
   - Create a PostgreSQL database
   - Set up the web service
   - Run migrations during build
   - Configure environment variables (including automatic PORT configuration)

**Important**: The `render.yaml` uses automatic port configuration via `fromService`. The `vite.config.ts` already reads `process.env.PORT` automatically.

### Post-Deployment Checklist

- [ ] Verify HTTPS is enabled
- [ ] Test API token configuration via Settings page
- [ ] Verify database migrations completed successfully
- [ ] Check that debug logging is disabled/removed
- [ ] Test webhook endpoints are accessible
- [ ] Verify extension appears in mittwald Studio
- [ ] Test server actions (power on/off, reboot)
- [ ] Monitor error logs for any issues

## Usage

### Initial Setup

1. **Configure Hetzner API Token**:
   - Navigate to Settings (`/settings`)
   - Enter your Hetzner Cloud API Token
   - The token will be validated and stored encrypted

2. **View Resources**:
   - Dashboard (`/`) shows overview of all resources
   - Servers list (`/servers`) shows all Hetzner servers
   - Click on a server to see details (`/servers/:serverId`)

### Managing Servers

- **View Server Details**: Click on any server to see full information
- **Power Actions**: Power on/off, reboot, or shutdown servers
- **Assign to Projects**: Link servers to mittwald projects or customers
- **Add Notes**: Document important information about servers
- **View Status**: Real-time server status and network information

### Resource Assignment

- Assign Hetzner resources to mittwald projects or customers
- Add custom tags for better organization
- View assignments in resource lists

## Project Structure

```
src/
├── components/              # React components
│   ├── ErrorMessage.tsx    # Error display component
│   ├── Loader.tsx          # Loading state component
│   └── NotFound.tsx        # 404 page
├── lib/                    # Utility libraries
│   └── hetzner-api.ts      # Hetzner Cloud API client
├── middlewares/            # TanStack middleware
│   └── verify-access-to-instance.ts  # Access verification
├── routes/                 # TanStack Router routes
│   ├── api/                # API endpoints
│   │   └── webhooks.mittwald.ts  # mittwald webhook handler
│   ├── index.tsx           # Dashboard
│   ├── servers.tsx         # Servers list
│   ├── servers/$serverId.tsx  # Server details
│   └── settings.tsx         # Settings page
├── server/                 # Server functions
│   └── functions/          # Server-side functions
│       └── hetzner/        # Hetzner-specific functions
│           ├── getApiToken.ts
│           ├── setApiToken.ts
│           ├── deleteApiToken.ts
│           ├── listServers.ts
│           ├── getServer.ts
│           ├── listResources.ts
│           ├── serverActions.ts
│           ├── assignResource.ts
│           ├── unassignResource.ts
│           └── resourceNotes.ts
├── client.tsx              # Client entry point
├── db.ts                   # Prisma client configuration
├── env.ts                  # Environment validation
├── global-middleware.ts    # Global middleware
└── router.tsx              # Router configuration
```

## Database Schema

The extension uses the following Prisma models:

- `ExtensionInstance` - Extension instance information
- `HetznerApiToken` - Encrypted Hetzner API tokens
- `HetznerResourceAssignment` - Resource-to-project/customer mappings
- `HetznerResourceNote` - Notes for resources

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Run Biome checks
- `pnpm lint` - Lint code
- `pnpm format` - Format code
- `pnpm test` - Run tests
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:migrate:dev` - Run migrations in development
- `pnpm db:migrate:deploy` - Deploy migrations
- `pnpm db:studio` - Open Prisma Studio

## Extension Setup

### For Contributors

1. **Configure Webhooks**: Set your webhook URL in mStudio Contributor UI
2. **Set Scopes**: Configure required scopes and extension context
3. **Configure Anchors**: Point anchors to `http://localhost:5173`
4. **Install Extension**: Perform first installation via API
5. **Start Development**: Run `pnpm dev` and open your extension

## API Integration

### Hetzner Cloud API

The extension uses the [Hetzner Cloud API](https://docs.hetzner.cloud/reference/cloud) to:
- List and manage servers
- View volumes and floating IPs
- Perform server actions (power on/off, reboot, shutdown)
- Retrieve pricing information

### mittwald API

The extension integrates with mittwald using:
- Extension Bridge for authentication
- Webhooks for lifecycle events
- Context-based access control

## Documentation

- [mittwald API Documentation](https://api.mittwald.de/v2/docs/)
- [Extension Development Guide](https://developer.mittwald.de/docs/v2/contribution/)
- [Frontend Fragment Anchors](https://developer.mittwald.de/docs/v2/contribution/reference/frontend-fragment-anchors/)
- [Hetzner Cloud API Reference](https://docs.hetzner.cloud/reference/cloud)
- [Flow UI Components](https://mittwald.github.io/flow/03-components/)

## Technology Stack

- **Framework**: TanStack Start (React-based full-stack framework)
- **Database**: PostgreSQL with Prisma ORM
- **UI Components**: mittwald Flow Remote React Components
- **Authentication**: mittwald Extension Bridge
- **Webhooks**: mitthooks library
- **Code Quality**: Biome (linting & formatting)
- **Testing**: Vitest
- **API Client**: Custom Hetzner Cloud API client with Zod validation

## Security

### Security Features

- **Encrypted Storage**: API tokens are encrypted at rest using Prisma field encryption (`@encrypted` directive)
- **Server-Side Only**: All Hetzner API calls are performed server-side - tokens never exposed to client
- **Access Control**: Authentication and authorization handled via mittwald Extension Bridge
- **Context Isolation**: Resources are isolated per extension instance using `extensionInstanceId`
- **Token Validation**: API tokens are validated before storage by making a test API call
- **No Token Exposure**: Token endpoints only return metadata (`hasToken`, `configuredAt`), never the actual token

### Security Best Practices

#### Environment Variables

- **Never commit `.env` files** - They are already in `.gitignore`
- **Use secure secrets management** in production (e.g., Render secrets, AWS Secrets Manager)
- **Rotate secrets regularly** - Especially `PRISMA_FIELD_ENCRYPTION_KEY` and `EXTENSION_SECRET`
- **Limit `HETZNER_API_TOKEN` usage** - Only use for local development/testing, prefer database storage in production

#### Production Deployment

- **Remove debug logging** - The codebase contains `console.log` statements for debugging that should be removed or conditionally disabled in production
- **Use HTTPS only** - Ensure all connections use HTTPS in production
- **Set secure headers** - Configure Content Security Policy (CSP) and other security headers
- **Monitor API usage** - Implement rate limiting if needed to prevent abuse
- **Regular security updates** - Keep dependencies up to date (`pnpm update`)

#### Database Security

- **Use non-pooling PostgreSQL connection** - Required for Prisma field encryption
- **Encrypt database connections** - Use SSL/TLS for database connections in production
- **Backup encryption keys** - Store `PRISMA_FIELD_ENCRYPTION_KEY` securely (losing it means losing access to encrypted data)
- **Principle of least privilege** - Database user should only have necessary permissions

#### API Token Management

- **Use read-only tokens when possible** - Hetzner API tokens can be scoped to specific permissions
- **Rotate tokens periodically** - Generate new tokens and update them in settings
- **Revoke unused tokens** - Remove tokens from Hetzner console when no longer needed
- **Monitor token usage** - Check Hetzner API logs for suspicious activity

### Security Considerations

⚠️ **Important**: 
- Debug logging statements (`console.log`) are present throughout the codebase for development purposes
- These should be removed or conditionally disabled in production to avoid exposing sensitive information
- Consider using a logging library with log levels (e.g., `pino`, `winston`) for production

### Reporting Security Issues

If you discover a security vulnerability, please report it responsibly. Do not create public GitHub issues for security vulnerabilities.

## Contributing

This project was generated with mittvibes CLI by mittwald.

For issues with the CLI tool itself, please report them at the mittvibes repository.

## License

This extension is part of the mittwald ecosystem and follows mittwald's extension guidelines.
