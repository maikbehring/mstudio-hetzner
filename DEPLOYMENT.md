# Deployment auf Render.com

Diese Anleitung beschreibt, wie du die mittwald Hetzner Cloud Extension auf Render.com deployst.

## Voraussetzungen

- Render.com Account
- GitHub Repository mit der App
- Environment Variables (siehe unten)

## Port-Konfiguration

Render.com setzt automatisch einen Port für Web Services (standardmäßig Port 10000). TanStack Start (via Vite) liest automatisch die `PORT` Environment Variable.

### Automatische Port-Konfiguration in render.yaml

Die `render.yaml` verwendet die `fromService`-Syntax für automatische Port-Verwaltung:

```yaml
envVars:
  - key: PORT
    fromService:
      type: web
      name: mstudio-hetzner
      property: port
```

Diese Konfiguration:

1. **Render.com** setzt automatisch einen Port für den Web Service
2. Die `render.yaml` holt diesen Port mit `fromService.property: port` und setzt ihn als `PORT` Environment Variable
3. **Vite** (via `vite.config.ts`) liest automatisch `process.env.PORT` und bindet den Server an diesen Port

**Keine zusätzliche Konfiguration nötig** – Die `vite.config.ts` ist bereits so konfiguriert, dass sie `process.env.PORT` verwendet.

### Vite-Konfiguration

Die `vite.config.ts` ist bereits korrekt konfiguriert:

```typescript
server: {
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5173,
  host: true, // Listen on all addresses
}
```

## Schritt-für-Schritt Anleitung

### Option 1: Blueprint verwenden (empfohlen)

Die `render.yaml` wird automatisch verwendet, alle Einstellungen sind versioniert.

1. Gehe zu [dashboard.render.com](https://dashboard.render.com)
2. Klicke auf "New" → **"Blueprint"**
3. Wähle "Connect a repository" und verbinde dein GitHub Repository
4. Wähle dein Repository aus
5. Render erkennt automatisch die `render.yaml` und erstellt alle Services
6. Klicke auf "Apply" um das Blueprint zu deployen

**Vorteil:** Die `render.yaml` wird automatisch verwendet, alle Einstellungen sind versioniert.

### Option 2: Manuelles Web Service

Falls du die `render.yaml` nicht verwenden möchtest:

1. Gehe zu [dashboard.render.com](https://dashboard.render.com)
2. Klicke auf "New" → **"Web Service"**
3. Wähle "Connect a repository" und verbinde dein GitHub Repository
4. Wähle dein Repository aus

**Service-Konfiguration (manuell in der UI):**

**Build Settings:**
- **Build Command:** `pnpm install && pnpm db:generate && pnpm build && pnpm db:migrate:deploy`
- **Start Command:** `pnpm start`

**Environment Variables:**
- `NODE_ENV=production`
- `PORT` (wird automatisch von Render gesetzt, wenn du die `fromService`-Syntax verwendest)
- `DATABASE_URL` - PostgreSQL connection string (von der Datenbank)
- `PRISMA_FIELD_ENCRYPTION_KEY` - Encryption key für sensitive Felder
- `EXTENSION_ID` - Deine mittwald Extension ID
- `EXTENSION_SECRET` - Dein mittwald Extension Secret
- `HETZNER_API_TOKEN` - Optional, für lokale Entwicklung/Testing

### 3. Environment Variables setzen

In der Render-UI unter "Environment":

**Erforderliche Variablen:**
- `DATABASE_URL` - Wird automatisch von der Datenbank gesetzt (bei Blueprint)
- `PRISMA_FIELD_ENCRYPTION_KEY` - Generiere einen sicheren Schlüssel (32+ Zeichen)
- `EXTENSION_ID` - Deine mittwald Extension ID
- `EXTENSION_SECRET` - Dein mittwald Extension Secret

**Optionale Variablen:**
- `HETZNER_API_TOKEN` - Nur für lokale Entwicklung/Testing
  - ⚠️ **Hinweis**: In Production sollten Tokens über die Settings-Seite in der Datenbank gespeichert werden, nicht als Environment Variable

**Wichtig:** 
- Markiere sensible Variablen (z.B. API Keys, Secrets) als "Secret"
- Setze `PORT` nicht manuell, wenn du die `fromService`-Syntax in `render.yaml` verwendest

### 4. Database Setup

Die `render.yaml` erstellt automatisch eine PostgreSQL-Datenbank:

```yaml
databases:
  - name: mstudio-hetzner-db
    plan: free
    databaseName: mstudio_hetzner
    user: mstudio_hetzner_user
```

Die `DATABASE_URL` wird automatisch als Environment Variable gesetzt.

**Migrationen:** Die Datenbank-Migrationen werden automatisch während des Builds ausgeführt (`pnpm db:migrate:deploy`).

### 5. Deploy

**Bei Option 1 (Blueprint):**
1. Klicke auf "Apply" im Blueprint
2. Render erstellt alle Services automatisch basierend auf `render.yaml`
3. Warte, bis der Build abgeschlossen ist

**Bei Option 2 (Manuelles Web Service):**
1. Klicke auf "Create Web Service"
2. Render startet automatisch den Build-Prozess
3. Warte, bis der Build abgeschlossen ist

**Beide Optionen:**
- Die App ist unter `https://mstudio-hetzner.onrender.com` verfügbar (oder deiner benutzerdefinierten Domain)

## render.yaml Konfiguration

Die vollständige `render.yaml` für dieses Projekt:

```yaml
services:
  - type: web
    name: mstudio-hetzner
    runtime: node
    plan: free
    buildCommand: pnpm install && pnpm db:generate && pnpm build && pnpm db:migrate:deploy
    startCommand: pnpm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        fromService:
          type: web
          name: mstudio-hetzner
          property: port
      - key: DATABASE_URL
        fromDatabase:
          name: mstudio-hetzner-db
          property: connectionString
      - key: PRISMA_FIELD_ENCRYPTION_KEY
        sync: false
      - key: EXTENSION_ID
        sync: false
      - key: EXTENSION_SECRET
        sync: false
      - key: HETZNER_API_TOKEN
        sync: false
        optional: true

databases:
  - name: mstudio-hetzner-db
    plan: free
    databaseName: mstudio_hetzner
    user: mstudio_hetzner_user
```

## Build-Prozess

Der Build-Prozess führt folgende Schritte aus:

1. **Dependencies installieren**: `pnpm install`
2. **Prisma Client generieren**: `pnpm db:generate`
3. **App bauen**: `pnpm build` (führt `vite build` aus)
4. **Datenbank-Migrationen ausführen**: `pnpm db:migrate:deploy`

## Unterschiede zu anderen Plattformen

### Netlify
- **Netlify:** Verwendet Serverless Functions, `netlify` Preset
- **Render:** Läuft als Node.js-Server, verwendet Vite direkt

### Vercel
- **Vercel:** Verwendet Serverless Functions, `vercel` Preset
- **Render:** Läuft als Node.js-Server, verwendet Vite direkt

## Troubleshooting

### Build schlägt fehl

- Prüfe die Build-Logs in der Render-UI
- Stelle sicher, dass alle Dependencies korrekt installiert werden
- Prüfe, ob Prisma Client korrekt generiert wird
- Stelle sicher, dass die Datenbank-Migrationen erfolgreich sind

### App startet nicht

- Prüfe die Runtime-Logs
- Stelle sicher, dass der Start-Command korrekt ist: `pnpm start`
- Prüfe, ob alle Environment Variables gesetzt sind
- **Wichtig:** Stelle sicher, dass `PORT` gesetzt ist (wird automatisch gesetzt, wenn `fromService` verwendet wird)

### Port-Fehler

Wenn du einen Fehler wie "Port already in use" oder "EADDRINUSE" siehst:

- Stelle sicher, dass `PORT` als Environment Variable gesetzt ist
- Verwende die `fromService`-Syntax in `render.yaml` für automatische Port-Verwaltung
- Prüfe, ob die `vite.config.ts` `process.env.PORT` verwendet

### Datenbank-Verbindungsfehler

- Stelle sicher, dass `DATABASE_URL` korrekt gesetzt ist
- Prüfe, ob die Datenbank erstellt wurde
- Stelle sicher, dass die Datenbank-Migrationen erfolgreich waren
- **Wichtig:** Verwende eine non-pooling Connection für Prisma Field Encryption

### Prisma Field Encryption Fehler

- Stelle sicher, dass `PRISMA_FIELD_ENCRYPTION_KEY` gesetzt ist
- Der Schlüssel muss mindestens 32 Zeichen lang sein
- **Wichtig:** Verliere den Schlüssel nicht – ohne ihn kannst du nicht auf verschlüsselte Daten zugreifen

## Post-Deployment Checklist

- [ ] Verify HTTPS is enabled
- [ ] Test API token configuration via Settings page (`/settings`)
- [ ] Verify database migrations completed successfully
- [ ] Check that debug logging is disabled/removed
- [ ] Test webhook endpoints are accessible
- [ ] Verify extension appears in mittwald Studio
- [ ] Test server actions (power on/off, reboot)
- [ ] Monitor error logs for any issues
- [ ] Verify PORT environment variable is set correctly
- [ ] Test Hetzner API token storage and retrieval

## Weitere Ressourcen

- [Render.com Dokumentation](https://render.com/docs)
- [TanStack Start Dokumentation](https://tanstack.com/router/latest/docs/framework/react/start/overview)
- [Vite Dokumentation](https://vitejs.dev/)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)



