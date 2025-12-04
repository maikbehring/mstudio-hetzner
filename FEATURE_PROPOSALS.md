# Hetzner Cloud Extension - Feature Vorschläge

Basierend auf der Hetzner Cloud API-Dokumentation und dem aktuellen Implementierungsstand.

## 🎯 Priorität: Hoch (Kern-Features)

### 0. **Server erstellen**
**Status:** Nicht implementiert

#### 0.1 Neuen Server anlegen
- **API-Endpunkt:** `POST /servers`
- **Request:**
  ```json
  {
    "name": "web-server-01",           // Required: Eindeutiger Hostname (RFC 1123)
    "server_type": "cx11",             // Required: Server-Typ (ID oder Name)
    "image": "ubuntu-22.04",           // Required: Image (ID oder Name)
    "location": "nbg1",                // Optional: Location (ID oder Name)
    "datacenter": "nbg1-dc3",          // Optional: Data Center (ID oder Name)
    "start_after_create": true,        // Optional: Default true - Server nach Erstellung starten
    "ssh_keys": [123, 456],            // Optional: SSH Key IDs oder Namen
    "volumes": [789],                  // Optional: Volume IDs (müssen in gleicher Location sein)
    "networks": [101],                 // Optional: Network IDs für private Netzwerke
    "firewalls": [                     // Optional: Firewalls für public interface
      { "firewall": 202 }
    ],
    "placement_group": 303,            // Optional: Placement Group ID
    "user_data": "#cloud-config\n...", // Optional: Cloud-Init User Data (max 32KiB)
    "labels": {                        // Optional: Labels
      "environment": "production",
      "project": "web-app"
    },
    "automount": true,                 // Optional: Volumes automatisch mounten
    "public_net": {                    // Optional: Public Network Optionen
      "enable_ipv4": true,
      "enable_ipv6": true,
      "ipv4": 404,                     // Optional: Primary IPv4 ID
      "ipv6": 505                      // Optional: Primary IPv6 ID
    }
  }
  ```
- **Response:**
  ```json
  {
    "server": {
      "id": 123,
      "name": "web-server-01",
      "status": "initializing",
      "created": "2024-01-01T00:00:00Z",
      "public_net": {
        "ipv4": { "ip": "1.2.3.4", ... },
        "ipv6": { "ip": "2001:db8::1", ... }
      },
      "private_net": [...],
      "server_type": { "id": 1, "name": "cx11", ... },
      "datacenter": { "id": 1, "name": "nbg1-dc3", ... },
      "image": { "id": 1, "name": "ubuntu-22.04", ... },
      ...
    },
    "action": {
      "id": 456,
      "command": "create_server",
      "status": "running",
      "progress": 0,
      ...
    },
    "next_actions": [                  // Weitere Actions die ausgelöst werden
      {
        "id": 457,
        "command": "start_server",
        "status": "running",
        ...
      }
    ],
    "root_password": "..."              // Nur wenn keine SSH Keys angegeben
  }
  ```
- **Wichtige Hinweise:**
  - **Server-Name:** Muss eindeutig pro Project sein und RFC 1123 Hostname-Format erfüllen (nur Buchstaben, Zahlen, Punkte, Bindestriche)
  - **SSH Keys:** Empfohlen für sicheren Zugriff. Wenn keine SSH Keys angegeben werden, wird ein Root-Passwort generiert
  - **Location vs. Datacenter:** 
    - `location` ist empfohlen (weniger spezifisch)
    - `datacenter` nur wenn spezifische Primary IP zugewiesen werden soll
    - Beide dürfen nicht gleichzeitig verwendet werden
  - **User Data:** Wird in Hetzner-Systemen gespeichert - keine Passwörter oder sensible Daten verwenden
  - **Volumes:** Müssen in derselben Location wie der Server sein
  - **Start nach Erstellung:** Standardmäßig `true` - Server wird automatisch gestartet
- **Fehler-Codes:**
  - `placement_error`: Fehler bei der Platzierung
  - `primary_ip_assigned`: Primary IP ist bereits einem Server zugewiesen
  - `primary_ip_datacenter_mismatch`: Primary IP ist in anderem Data Center
  - `primary_ip_version_mismatch`: Primary IP hat falsche IP-Version
- **Implementierung:**
  - Neue Route: `/servers/create` oder Modal-Dialog
  - **Schritt 1:** Basis-Konfiguration
    - Server-Name (mit Validierung)
    - Server-Typ (Dropdown mit Preisen)
    - Image (Dropdown mit System-Images)
    - Location (Dropdown)
  - **Schritt 2:** Netzwerk-Konfiguration
    - SSH Keys auswählen (optional)
    - Private Networks auswählen (optional)
    - Firewalls auswählen (optional)
    - Public Network Optionen (IPv4/IPv6)
  - **Schritt 3:** Erweiterte Optionen
    - Volumes anhängen (optional)
    - Placement Group (optional)
    - Labels (optional)
    - User Data / Cloud-Init (optional)
  - **Schritt 4:** Zusammenfassung & Erstellung
    - Kosten-Vorschau
    - Confirmation
    - Progress-Tracking während Erstellung
  - **Nach Erstellung:**
    - Root-Passwort sicher anzeigen (wenn vorhanden)
    - Zu Server-Detail weiterleiten
    - Action-Progress anzeigen
- **Benötigte zusätzliche API-Calls:**
  - `GET /server_types` - Server-Typen mit Preisen auflisten
  - `GET /images?type=system` - System-Images auflisten
  - `GET /locations` - Verfügbare Locations auflisten
  - `GET /ssh_keys` - SSH Keys auflisten (falls vorhanden)
  - `GET /networks` - Private Networks auflisten (falls vorhanden)
  - `GET /firewalls` - Firewalls auflisten (falls vorhanden)
  - `GET /volumes` - Volumes auflisten (falls vorhanden)
- **Dokumentation:** `hetzner_api_docs/servers-create-a-server.md`

### 1. **Server Management - Erweiterte Aktionen**
**Status:** Teilweise implementiert (poweron, poweroff, reboot, shutdown)

**Fehlende Server-Aktionen:**

#### 1.1 Rescue Mode aktivieren/deaktivieren
- **API-Endpunkte:**
  - `POST /servers/{id}/actions/enable_rescue` - Aktiviert Rescue Mode
  - `POST /servers/{id}/actions/disable_rescue` - Deaktiviert Rescue Mode
- **Request (enable_rescue):**
  ```json
  {
    "type": "linux64",  // Optional: "linux32" | "linux64" | "freebsd64"
    "ssh_keys": [123]   // Optional: Array of SSH Key IDs
  }
  ```
- **Response:**
  ```json
  {
    "action": { "id": 123, "status": "running", ... },
    "root_password": "..." // Nur bei enable_rescue
  }
  ```
- **Implementierung:** 
  - Neue Actions zu `serverActions.ts` hinzufügen
  - UI: Button in Server-Detail-Ansicht
  - **Dokumentation:** `hetzner_api_docs/server-actions-disable-rescue-mode-for-a-server.md`

#### 1.2 Server-Reset (Root-Passwort zurücksetzen)
- **API-Endpunkt:** `POST /servers/{id}/actions/reset_password`
- **Voraussetzungen:** 
  - Server muss `running` sein
  - QEMU Guest Agent muss laufen
- **Response:**
  ```json
  {
    "action": { "id": 123, "status": "running", ... },
    "root_password": "new-password-here"
  }
  ```
- **Implementierung:**
  - Neue Action in `serverActions.ts`
  - **Wichtig:** Passwort sicher anzeigen (Copy-to-Clipboard, nicht im Log)
  - **Dokumentation:** `hetzner_api_docs/server-actions-reset-root-password-of-a-server.md`

#### 1.3 Server-Rebuild (von Image neu aufsetzen)
- **API-Endpunkt:** `POST /servers/{id}/actions/rebuild`
- **Request:**
  ```json
  {
    "image": "ubuntu-22.04" // Image name oder ID
  }
  ```
- **Implementierung:**
  - Image-Auswahl-Dialog in UI
  - Warning: Alle Daten werden gelöscht
  - **Dokumentation:** `hetzner_api_docs/server-actions-rebuild-a-server-from-an-image.md`

#### 1.4 Server-Typ ändern (Upgrade/Downgrade)
- **API-Endpunkt:** `POST /servers/{id}/actions/change_type`
- **Request:**
  ```json
  {
    "server_type": "cx21",  // Neuer Server-Typ
    "upgrade_disk": true     // Optional: Disk mit upgraden
  }
  ```
- **Implementierung:**
  - Server-Typ-Auswahl-Dialog
  - Kosten-Vergleich anzeigen
  - **Dokumentation:** `hetzner_api_docs/server-actions-change-the-type-of-a-server.md`

#### 1.5 Backups aktivieren/deaktivieren
- **API-Endpunkte:**
  - `POST /servers/{id}/actions/enable_backup` - Aktiviert automatische Backups
  - `POST /servers/{id}/actions/disable_backup` - Deaktiviert Backups
- **Hinweise:**
  - Backups erhöhen Server-Preis um 20%
  - 7 Backup-Slots verfügbar
  - Backups werden täglich automatisch erstellt
- **Response (enable_backup):**
  ```json
  {
    "action": { "id": 123, "status": "running", ... }
  }
  ```
- **Implementierung:**
  - Toggle-Button in Server-Detail
  - Backup-Window wird automatisch zugewiesen
  - **Dokumentation:** `hetzner_api_docs/server-actions-enable-and-configure-backups-for-a-server.md`

#### 1.6 Server-Protection (Delete/Rebuild-Schutz)
- **API-Endpunkt:** `POST /servers/{id}/actions/change_protection`
- **Request:**
  ```json
  {
    "delete": true,   // Verhindert Löschen
    "rebuild": true   // Verhindert Rebuild (muss gleich wie delete sein)
  }
  ```
- **Implementierung:**
  - Protection-Toggle in Server-Detail
  - Confirmation-Dialog beim Deaktivieren
  - **Dokumentation:** `hetzner_api_docs/server-actions-change-server-protection.md`

#### 1.7 Server-Metriken anzeigen
- **API-Endpunkt:** `GET /servers/{id}/metrics`
- **Query Parameters:**
  ```
  ?type=cpu,disk,network  // Komma-separiert
  &start=2024-01-01T00:00:00Z  // ISO-8601
  &end=2024-01-02T00:00:00Z    // ISO-8601
  &step=3600  // Optional: Auflösung in Sekunden
  ```
- **Response:**
  ```json
  {
    "metrics": {
      "start": "2024-01-01T00:00:00Z",
      "end": "2024-01-02T00:00:00Z",
      "step": 3600,
      "time_series": {
        "cpu": [
          { "timestamp": 1234567890, "value": "45.5" }
        ],
        "disk.0.iops.read": [...],
        "network.0.bandwidth.in": [...]
      }
    }
  }
  ```
- **Metriken verfügbar:**
  - **CPU:** `cpu` (percent)
  - **Disk:** `disk.0.iops.read/write`, `disk.0.bandwidth.read/write`
  - **Network:** `network.0.pps.in/out`, `network.0.bandwidth.in/out`
- **Implementierung:**
  - Neue Route: `/servers/:serverId/metrics`
  - Chart-Komponente für Visualisierung (z.B. Chart.js oder Recharts)
  - Zeitraum-Auswahl (letzte Stunde/Tag/Woche)
  - **Dokumentation:** `hetzner_api_docs/servers-get-metrics-for-a-server.md`

### 2. **Snapshots & Images Management**
**Status:** Nicht implementiert

#### 2.1 Snapshots erstellen
- **API-Endpunkt:** `POST /servers/{id}/actions/create_image`
- **Request:**
  ```json
  {
    "description": "Backup vor Update",  // Optional
    "type": "snapshot",                   // "snapshot" | "backup" (default: "snapshot")
    "labels": {                          // Optional
      "environment": "production"
    }
  }
  ```
- **Hinweise:**
  - **Snapshot:** Unabhängig vom Server, überlebt Server-Löschung, wird pro GB berechnet
  - **Backup:** Gebunden an Server, wird gelöscht wenn Server gelöscht wird, nur verfügbar wenn Backups aktiviert
  - **Empfehlung:** Server vorher herunterfahren für konsistente Snapshots
- **Response:**
  ```json
  {
    "action": { "id": 123, "status": "running", ... },
    "image": {
      "id": 456,
      "type": "snapshot",
      "status": "creating",
      "name": "server-123-snapshot-2024-01-01",
      ...
    }
  }
  ```
- **Implementierung:**
  - Button in Server-Detail: "Create Snapshot"
  - Dialog: Beschreibung, Typ (Snapshot/Backup), Labels
  - Progress-Tracking während Erstellung
  - **Dokumentation:** `hetzner_api_docs/server-actions-create-image-from-a-server.md`

#### 2.2 Images auflisten
- **API-Endpunkt:** `GET /images`
- **Query Parameters:**
  ```
  ?type=system|snapshot|backup|app
  &status=available|creating|unavailable
  &bound_to=123  // Optional: Nur Images für bestimmten Server
  ```
- **Response:**
  ```json
  {
    "images": [
      {
        "id": 123,
        "type": "snapshot",
        "status": "available",
        "name": "server-backup-2024-01-01",
        "description": "...",
        "image_size": 1024000000,
        "disk_size": 20,
        "created": "2024-01-01T00:00:00Z",
        "labels": {}
      }
    ],
    "meta": { "pagination": {...} }
  }
  ```
- **Implementierung:**
  - Neue Route: `/images`
  - Filter nach Typ (System/Snapshot/Backup)
  - Image-Detail-Ansicht mit Löschen-Option
  - **Dokumentation:** `hetzner_api_docs/images-list-images.md` (falls vorhanden)

### 3. **Volumes Management - Erweitert**
**Status:** Nur Liste implementiert

#### 3.1 Volume erstellen
- **API-Endpunkt:** `POST /volumes`
- **Request:**
  ```json
  {
    "name": "database-storage",
    "size": 100,              // GB (10-10000)
    "location": "nbg1",       // Optional: Location
    "format": "ext4",         // Optional: "ext4" | "xfs"
    "labels": {}              // Optional
  }
  ```
- **Response:**
  ```json
  {
    "volume": {
      "id": 123,
      "name": "database-storage",
      "size": 100,
      "location": { "id": 1, "name": "nbg1", ... },
      "status": "creating",
      ...
    },
    "action": { "id": 456, ... }
  }
  ```
- **Implementierung:**
  - Create-Dialog in Volumes-Übersicht
  - Location-Auswahl (muss mit Server-Location übereinstimmen für Attach)
  - **Dokumentation:** `hetzner_api_docs/volumes.md`

#### 3.2 Volume an Server anhängen/lösen
- **API-Endpunkte:**
  - `POST /volumes/{id}/actions/attach` - Volume anhängen
  - `POST /volumes/{id}/actions/detach` - Volume lösen
- **Request (attach):**
  ```json
  {
    "server": 789,        // Server-ID
    "automount": true     // Optional: Auto-mount nach Attach
  }
  ```
- **Voraussetzungen:**
  - Volume und Server müssen in derselben Location sein
- **Response:**
  ```json
  {
    "action": { "id": 123, "status": "running", ... }
  }
  ```
- **Implementierung:**
  - Attach-Button in Volume-Detail
  - Server-Auswahl-Dialog
  - Detach-Button wenn Volume attached ist
  - **Dokumentation:** `hetzner_api_docs/volume-actions-attach-volume-to-a-server.md`

#### 3.3 Volume vergrößern
- **API-Endpunkt:** `POST /volumes/{id}/actions/resize`
- **Request:**
  ```json
  {
    "size": 200  // Neue Größe in GB (nur größer möglich)
  }
  ```
- **Implementierung:**
  - Resize-Button in Volume-Detail
  - Validation: Neue Größe muss größer sein
  - **Dokumentation:** `hetzner_api_docs/volume-actions-resize-volume.md`

#### 3.4 Volume löschen
- **API-Endpunkt:** `DELETE /volumes/{id}`
- **Voraussetzungen:**
  - Volume muss detached sein
  - Keine Protection aktiv
- **Implementierung:**
  - Delete-Button mit Confirmation-Dialog
  - Check ob Volume attached ist
  - **Dokumentation:** `hetzner_api_docs/volumes-delete-a-volume.md`

### 4. **Networks Management**
**Status:** Nicht implementiert

#### 4.1 Networks auflisten
- **API-Endpunkt:** `GET /networks`
- **Response:**
  ```json
  {
    "networks": [
      {
        "id": 123,
        "name": "private-network",
        "ip_range": "10.0.0.0/16",
        "gateway": "10.0.0.1",
        "subnets": [...],
        "routes": [...],
        "servers": [456, 789],
        "labels": {}
      }
    ],
    "meta": { "pagination": {...} }
  }
  ```
- **Implementierung:**
  - Neue Route: `/networks`
  - Network-Liste mit Details (IP-Range, Anzahl Server)
  - **Dokumentation:** `hetzner_api_docs/networks-list-networks.md`

#### 4.2 Network erstellen
- **API-Endpunkt:** `POST /networks`
- **Request:**
  ```json
  {
    "name": "production-network",
    "ip_range": "10.0.0.0/16",  // CIDR, min /24, empfohlen /16
    "labels": {},                // Optional
    "subnets": [                 // Optional
      {
        "type": "cloud",
        "network_zone": "eu-central"
      }
    ],
    "routes": [],                // Optional
    "expose_routes_to_vswitch": false  // Optional
  }
  ```
- **Hinweise:**
  - IP-Range kann später nur erweitert, nicht reduziert werden
  - Muss RFC1918 private IPv4 Range sein
  - **Dokumentation:** `hetzner_api_docs/networks-create-a-network.md`

#### 4.3 Server zu Network hinzufügen/entfernen
- **API-Endpunkte:**
  - `POST /servers/{id}/actions/attach_to_network`
  - `POST /servers/{id}/actions/detach_from_network`
- **Request (attach_to_network):**
  ```json
  {
    "network": 123,
    "ip": "10.0.0.2"  // Optional: Spezifische IP im Network
  }
  ```
- **Implementierung:**
  - Button in Server-Detail: "Attach to Network"
  - Network-Auswahl-Dialog
  - Optional: IP-Adresse eingeben
  - **Dokumentation:** `hetzner_api_docs/server-actions-attach-a-server-to-a-network.md`

### 5. **Firewalls Management**
**Status:** Nur View-only erwähnt

#### 5.1 Firewalls auflisten
- **API-Endpunkt:** `GET /firewalls`
- **Response:**
  ```json
  {
    "firewalls": [
      {
        "id": 123,
        "name": "web-server-firewall",
        "labels": {},
        "rules": {
          "inbound": [
            {
              "protocol": "tcp",
              "port": "80",
              "source_ips": ["0.0.0.0/0", "::/0"],
              "description": "Allow HTTP"
            }
          ],
          "outbound": [...]
        },
        "applied_to": [
          { "type": "server", "server": { "id": 456 } }
        ]
      }
    ],
    "meta": { "pagination": {...} }
  }
  ```
- **Implementierung:**
  - Neue Route: `/firewalls`
  - Firewall-Liste mit angewendeten Ressourcen
  - **Dokumentation:** `hetzner_api_docs/firewalls-list-firewalls.md`

#### 5.2 Firewall erstellen
- **API-Endpunkt:** `POST /firewalls`
- **Request:**
  ```json
  {
    "name": "web-server-firewall",
    "labels": {},
    "rules": {
      "inbound": [
        {
          "protocol": "tcp",
          "port": "80",
          "source_ips": ["0.0.0.0/0"],
          "description": "Allow HTTP"
        },
        {
          "protocol": "tcp",
          "port": "443",
          "source_ips": ["0.0.0.0/0"],
          "description": "Allow HTTPS"
        }
      ],
      "outbound": [
        {
          "protocol": "tcp",
          "port": "53",
          "destination_ips": ["0.0.0.0/0"],
          "description": "Allow DNS"
        }
      ]
    },
    "apply_to": [
      { "type": "server", "server": { "id": 456 } }
    ]
  }
  ```
- **Hinweise:**
  - Max. 50 Regeln pro Firewall
  - Max. 500 effektive Regeln insgesamt
  - **Dokumentation:** `hetzner_api_docs/firewalls-create-a-firewall.md`

#### 5.3 Firewall-Regeln setzen
- **API-Endpunkt:** `POST /firewalls/{id}/actions/set_rules`
- **Request:**
  ```json
  {
    "rules": {
      "inbound": [...],
      "outbound": [...]
    }
  }
  ```
- **Hinweise:**
  - Überschreibt alle bestehenden Regeln
  - Leeres Array entfernt alle Regeln
  - **Dokumentation:** `hetzner_api_docs/firewall-actions-set-rules.md`

#### 5.4 Firewall auf Ressourcen anwenden
- **API-Endpunkt:** `POST /firewalls/{id}/actions/apply_to_resources`
- **Request:**
  ```json
  {
    "apply_to": [
      { "type": "server", "server": { "id": 456 } },
      { "type": "label_selector", "label_selector": { "selector": "env=production" } }
    ]
  }
  ```
- **Implementierung:**
  - Apply-Button in Firewall-Detail
  - Ressourcen-Auswahl (Server oder Label-Selector)
  - **Dokumentation:** `hetzner_api_docs/firewall-actions-apply-to-resources.md`

## 🎯 Priorität: Mittel (Nützliche Features)

### 6. **Load Balancers**
**Status:** Nicht implementiert

- ✅ **Load Balancers auflisten**
  - `GET /load_balancers`
  - Load Balancer-Typen anzeigen

- ✅ **Load Balancer erstellen**
  - `POST /load_balancers`
  - Algorithmus, Services konfigurieren

- ✅ **Targets hinzufügen/entfernen**
  - Server zu Load Balancer hinzufügen
  - Health Checks konfigurieren

- ✅ **Load Balancer-Metriken**
  - `GET /load_balancers/{id}/metrics`
  - Traffic-Statistiken

### 7. **SSH Keys Management**
**Status:** Nicht implementiert

- ✅ **SSH Keys auflisten**
  - `GET /ssh_keys`
  - Öffentliche Keys verwalten

- ✅ **SSH Key erstellen**
  - `POST /ssh_keys`
  - Key für Server-Deployment

- ✅ **SSH Key aktualisieren/löschen**
  - Wichtig für Security-Management

### 8. **Floating IPs - Erweitert**
**Status:** Nur Liste implementiert

- ✅ **Floating IP erstellen**
  - `POST /floating_ips`
  - IPv4/IPv6, Location wählen

- ✅ **Floating IP zu Server zuweisen**
  - `POST /floating_ips/{id}/actions/assign`
  - `POST /floating_ips/{id}/actions/unassign`

- ✅ **Reverse DNS konfigurieren**
  - `POST /floating_ips/{id}/actions/change_dns_ptr`

- ✅ **Floating IP löschen**
  - `DELETE /floating_ips/{id}`

### 9. **Primary IPs**
**Status:** Nicht implementiert

- ✅ **Primary IPs auflisten**
  - `GET /primary_ips`
  - Statische IPs verwalten

- ✅ **Primary IP erstellen**
  - `POST /primary_ips`
  - Zu Server zuweisen

### 10. **Placement Groups**
**Status:** Nicht implementiert

- ✅ **Placement Groups auflisten**
  - `GET /placement_groups`
  - Anti-Affinity Rules für Server

- ✅ **Placement Group erstellen**
  - `POST /placement_groups`
  - Server zu Placement Group hinzufügen

## 🎯 Priorität: Niedrig (Nice-to-Have)

### 11. **Certificates Management**
**Status:** Nicht implementiert

- ✅ **SSL/TLS Certificates verwalten**
  - `GET /certificates`
  - Let's Encrypt Integration
  - Certificate Actions (retry issuance)

### 12. **DNS Zones Management**
**Status:** Nicht implementiert

- ✅ **DNS Zones auflisten**
  - `GET /zones`
  - DNS-Verwaltung

- ✅ **Zone erstellen**
  - `POST /zones`
  - Records verwalten (A, AAAA, CNAME, MX, etc.)

- ✅ **Zone-File Import/Export**
  - Bulk DNS-Management

### 13. **ISOs Management**
**Status:** Nicht implementiert

- ✅ **ISOs auflisten**
  - `GET /isos`
  - ISO-Images für Server

- ✅ **ISO an Server anhängen**
  - `POST /servers/{id}/actions/attach_iso`
  - `POST /servers/{id}/actions/detach_iso`

### 14. **Actions & Events Tracking**
**Status:** Teilweise erwähnt

- ✅ **Actions-Liste für Server**
  - `GET /servers/{id}/actions`
  - Action-Status prüfen
  - Progress-Tracking

- ✅ **Alle Actions auflisten**
  - `GET /actions`
  - Systemweite Activity-Log

### 15. **Server-Metadaten & Cloud-Init**
**Status:** Nicht implementiert

- ✅ **Server-Metadaten abrufen**
  - `GET /servers/{id}/metadata`
  - Cloud-Init-Daten

- ✅ **User Data setzen**
  - Bei Server-Erstellung

## 📊 Implementierungsreihenfolge (Empfehlung)

### Phase 0: Server erstellen (NEU)
1. **Server erstellen** - Grundfunktionalität
   - Basis-Konfiguration (Name, Typ, Image, Location)
   - Netzwerk-Konfiguration (SSH Keys, Networks, Firewalls)
   - Erweiterte Optionen (Volumes, Labels, User Data)
   - Kosten-Vorschau
   - Progress-Tracking während Erstellung
   - Root-Passwort sicher anzeigen

### Phase 1: Server Management erweitern
1. Server-Metriken anzeigen
2. Rescue Mode aktivieren/deaktivieren
3. Server-Reset (Password)
4. Backups aktivieren/deaktivieren
5. Server-Protection verwalten

### Phase 2: Snapshots & Images
1. Snapshots erstellen
2. Images auflisten
3. Snapshot-Verwaltung

### Phase 3: Volumes erweitern
1. Volume erstellen
2. Volume an Server anhängen/lösen
3. Volume vergrößern

### Phase 4: Networks & Firewalls
1. Networks auflisten
2. Network erstellen
3. Server zu Network hinzufügen
4. Firewalls auflisten und verwalten

### Phase 5: Load Balancers & SSH Keys
1. Load Balancers verwalten
2. SSH Keys verwalten

### Phase 6: Weitere Features
1. Floating IPs erweitern
2. Primary IPs
3. Placement Groups
4. DNS Zones
5. Certificates

## 🔧 Technische Überlegungen

### API Client Erweiterungen
- Neue Methoden zu `HetznerApiClient` hinzufügen
- Zod-Schemas für neue Ressourcen erstellen
- Type-Safety für alle neuen Endpoints

### UI-Komponenten
- Action-Buttons für neue Features
- Formulare für Create/Update-Operationen
- Confirmation-Dialogs für destruktive Aktionen
- Progress-Indicators für Actions

### Error Handling
- Validation für alle Inputs
- User-friendly Error Messages
- Retry-Mechanismen für Actions

### Performance
- Optimistic Updates wo möglich
- Caching für statische Daten (Images, Server Types, etc.)
- Pagination für große Listen

## 💻 Implementierungsbeispiele

### Beispiel 0: Server erstellen

#### API Client (`src/lib/hetzner-api.ts`)
```typescript
async createServer(params: {
  name: string;
  server_type: string;
  image: string;
  location?: string;
  datacenter?: string;
  start_after_create?: boolean;
  ssh_keys?: (string | number)[];
  volumes?: number[];
  networks?: number[];
  firewalls?: Array<{ firewall: number }>;
  placement_group?: number;
  user_data?: string;
  labels?: Record<string, string>;
  automount?: boolean;
  public_net?: {
    enable_ipv4?: boolean;
    enable_ipv6?: boolean;
    ipv4?: number;
    ipv6?: number;
  };
}): Promise<CreateServerResponse> {
  const response = await this.fetch("/servers", {
    method: "POST",
    body: JSON.stringify(params),
  });
  return CreateServerResponseSchema.parse(await response.json());
}

async listServerTypes(): Promise<ServerTypesResponse> {
  const response = await this.fetch("/server_types");
  return ServerTypesResponseSchema.parse(await response.json());
}

async listSystemImages(): Promise<ImagesResponse> {
  const response = await this.fetch("/images?type=system");
  return ImagesResponseSchema.parse(await response.json());
}

async listLocations(): Promise<LocationsResponse> {
  const response = await this.fetch("/locations");
  return LocationsResponseSchema.parse(await response.json());
}
```

#### Server Function (`src/server/functions/hetzner/createServer.ts`)
```typescript
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

const CreateServerSchema = z.object({
  name: z.string()
    .min(1)
    .max(63)
    .regex(/^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, 
      "Must be a valid hostname (RFC 1123)"),
  server_type: z.string(),
  image: z.string(),
  location: z.string().optional(),
  datacenter: z.string().optional(),
  start_after_create: z.boolean().default(true),
  ssh_keys: z.array(z.union([z.string(), z.number()])).optional(),
  volumes: z.array(z.number()).optional(),
  networks: z.array(z.number()).optional(),
  firewalls: z.array(z.object({ firewall: z.number() })).optional(),
  placement_group: z.number().optional(),
  user_data: z.string().max(32 * 1024).optional(), // Max 32KiB
  labels: z.record(z.string()).optional(),
  automount: z.boolean().optional(),
  public_net: z.object({
    enable_ipv4: z.boolean().optional(),
    enable_ipv6: z.boolean().optional(),
    ipv4: z.number().optional(),
    ipv6: z.number().optional(),
  }).optional(),
}).refine(
  (data) => !(data.location && data.datacenter),
  { message: "Cannot specify both location and datacenter" }
);

export const createServer = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(CreateServerSchema))
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    const { extensionInstanceId } = context as unknown as VerifiedContext;
    const parsed = data as z.infer<typeof CreateServerSchema>;
    const client = await getHetznerClient(extensionInstanceId);
    
    const result = await client.createServer(parsed);
    
    // Wichtig: Root-Passwort sicher behandeln
    // Nicht in Logs schreiben, nur zurückgeben
    return result;
  });
```

#### Helper Functions (`src/server/functions/hetzner/getServerCreationData.ts`)
```typescript
// Server-Typen, Images, Locations etc. für Formular laden
export const getServerTypes = createServerFn({ method: "GET" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context }) => {
    const { extensionInstanceId } = context as unknown as VerifiedContext;
    const client = await getHetznerClient(extensionInstanceId);
    return await client.listServerTypes();
  });

export const getSystemImages = createServerFn({ method: "GET" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context }) => {
    const { extensionInstanceId } = context as unknown as VerifiedContext;
    const client = await getHetznerClient(extensionInstanceId);
    return await client.listSystemImages();
  });

export const getLocations = createServerFn({ method: "GET" })
  .middleware([verifyAccessToInstance])
  .handler(async ({ context }) => {
    const { extensionInstanceId } = context as unknown as VerifiedContext;
    const client = await getHetznerClient(extensionInstanceId);
    return await client.listLocations();
  });
```

#### UI Component (`src/routes/servers/create.tsx`)
```typescript
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import { Content, Heading, Button, TextField, Select } from "@mittwald/flow-remote-react-components";
import { createServer, getServerTypes, getSystemImages, getLocations } from "~/server/functions/hetzner/...";

export const Route = createFileRoute("/servers/create")({
  component: CreateServerComponent,
});

function CreateServerComponent() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    server_type: "",
    image: "",
    location: "",
    ssh_keys: [],
    // ... weitere Felder
  });

  // Daten für Dropdowns laden
  const { data: serverTypes } = useQuery({
    queryKey: ["serverTypes"],
    queryFn: () => getServerTypes(),
  });

  const { data: images } = useQuery({
    queryKey: ["systemImages"],
    queryFn: () => getSystemImages(),
  });

  const { data: locations } = useQuery({
    queryKey: ["locations"],
    queryFn: () => getLocations(),
  });

  const createMutation = useMutation({
    mutationFn: (data: typeof formData) => createServer({ data }),
    onSuccess: (result) => {
      // Root-Passwort sicher anzeigen (Modal mit Copy-Button)
      if (result.root_password) {
        // Passwort-Modal anzeigen
      }
      // Zu Server-Detail weiterleiten
      router.navigate({ to: "/servers/$serverId", params: { serverId: String(result.server.id) } });
    },
  });

  return (
    <Content>
      <Heading>Neuen Server erstellen</Heading>
      
      {/* Schritt 1: Basis-Konfiguration */}
      {step === 1 && (
        <>
          <TextField
            label="Server-Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            description="Muss eindeutig sein und RFC 1123 Hostname-Format erfüllen"
          />
          
          <Select
            label="Server-Typ"
            options={serverTypes?.server_types.map(st => ({
              value: st.name,
              label: `${st.name} - ${st.description} (€${st.prices[0].price_monthly.gross}/Monat)`,
            }))}
            value={formData.server_type}
            onChange={(value) => setFormData({ ...formData, server_type: value })}
          />
          
          <Select
            label="Image"
            options={images?.images.map(img => ({
              value: img.name || String(img.id),
              label: `${img.name || img.id} (${img.os_flavor} ${img.os_version})`,
            }))}
            value={formData.image}
            onChange={(value) => setFormData({ ...formData, image: value })}
          />
          
          <Select
            label="Location"
            options={locations?.locations.map(loc => ({
              value: loc.name,
              label: `${loc.name} - ${loc.city}, ${loc.country}`,
            }))}
            value={formData.location}
            onChange={(value) => setFormData({ ...formData, location: value })}
          />
          
          <Button onPress={() => setStep(2)}>Weiter</Button>
        </>
      )}
      
      {/* Schritt 2: Netzwerk-Konfiguration */}
      {step === 2 && (
        <>
          {/* SSH Keys, Networks, Firewalls */}
          <Button onPress={() => setStep(1)}>Zurück</Button>
          <Button onPress={() => setStep(3)}>Weiter</Button>
        </>
      )}
      
      {/* Schritt 3: Erweiterte Optionen */}
      {step === 3 && (
        <>
          {/* Volumes, Labels, User Data */}
          <Button onPress={() => setStep(2)}>Zurück</Button>
          <Button onPress={() => setStep(4)}>Weiter</Button>
        </>
      )}
      
      {/* Schritt 4: Zusammenfassung & Erstellung */}
      {step === 4 && (
        <>
          {/* Kosten-Vorschau, Zusammenfassung */}
          <Button onPress={() => setStep(3)}>Zurück</Button>
          <Button 
            onPress={() => createMutation.mutate(formData)}
            isLoading={createMutation.isPending}
          >
            Server erstellen
          </Button>
        </>
      )}
    </Content>
  );
}
```

### Beispiel 1: Server-Metriken implementieren

#### API Client (`src/lib/hetzner-api.ts`)
```typescript
async getServerMetrics(
  serverId: number,
  type: "cpu" | "disk" | "network" | string,
  start: string,
  end: string,
  step?: number
): Promise<ServerMetrics> {
  const params = new URLSearchParams({
    type: Array.isArray(type) ? type.join(",") : type,
    start,
    end,
  });
  if (step) params.set("step", String(step));

  const response = await this.fetch(`/servers/${serverId}/metrics?${params}`);
  return ServerMetricsSchema.parse(await response.json());
}
```

#### Server Function (`src/server/functions/hetzner/getServerMetrics.ts`)
```typescript
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

const GetServerMetricsSchema = z.object({
  serverId: z.number(),
  type: z.enum(["cpu", "disk", "network"]).or(z.string()),
  start: z.string(), // ISO-8601
  end: z.string(),   // ISO-8601
  step: z.number().optional(),
});

export const getServerMetrics = createServerFn({ method: "GET" })
  .inputValidator(zodValidator(GetServerMetricsSchema))
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    const { extensionInstanceId } = context as unknown as VerifiedContext;
    const parsed = data as z.infer<typeof GetServerMetricsSchema>;
    const client = await getHetznerClient(extensionInstanceId);
    
    return await client.getServerMetrics(
      parsed.serverId,
      parsed.type,
      parsed.start,
      parsed.end,
      parsed.step
    );
  });
```

#### UI Component (`src/routes/servers/$serverId/metrics.tsx`)
```typescript
import { useQuery } from "@tanstack/react-query";
import { Content, Heading, Text } from "@mittwald/flow-remote-react-components";
import { getServerMetrics } from "~/server/functions/hetzner/getServerMetrics";

export const Route = createFileRoute("/servers/$serverId/metrics")({
  component: ServerMetricsComponent,
});

function ServerMetricsComponent() {
  const { serverId } = Route.useParams();
  const [timeRange, setTimeRange] = useState("1h");
  
  const { data, isLoading } = useQuery({
    queryKey: ["serverMetrics", serverId, timeRange],
    queryFn: () => {
      const end = new Date();
      const start = new Date(end.getTime() - getTimeRangeMs(timeRange));
      return getServerMetrics({
        serverId: Number(serverId),
        type: "cpu,disk,network",
        start: start.toISOString(),
        end: end.toISOString(),
      });
    },
  });

  // Chart-Komponente für Visualisierung
  return (
    <Content>
      <Heading>Server Metrics</Heading>
      {/* Chart-Komponente hier */}
    </Content>
  );
}
```

### Beispiel 2: Snapshot erstellen

#### Server Function (`src/server/functions/hetzner/createSnapshot.ts`)
```typescript
import { createServerFn } from "@tanstack/react-start";
import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";
import { verifyAccessToInstance } from "~/middlewares/verify-access-to-instance";
import { getHetznerClient } from "./getHetznerClient";
import type { VerifiedContext } from "~/types/middleware-context";

const CreateSnapshotSchema = z.object({
  serverId: z.number(),
  description: z.string().optional(),
  type: z.enum(["snapshot", "backup"]).default("snapshot"),
  labels: z.record(z.string()).optional(),
});

export const createSnapshot = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(CreateSnapshotSchema))
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    const { extensionInstanceId } = context as unknown as VerifiedContext;
    const parsed = data as z.infer<typeof CreateSnapshotSchema>;
    const client = await getHetznerClient(extensionInstanceId);
    
    return await client.createImageFromServer(parsed.serverId, {
      description: parsed.description,
      type: parsed.type,
      labels: parsed.labels,
    });
  });
```

### Beispiel 3: Volume erstellen und anhängen

#### Server Functions
```typescript
// createVolume.ts
const CreateVolumeSchema = z.object({
  name: z.string(),
  size: z.number().min(10).max(10000),
  location: z.string().optional(),
  format: z.enum(["ext4", "xfs"]).optional(),
  labels: z.record(z.string()).optional(),
});

// attachVolume.ts
const AttachVolumeSchema = z.object({
  volumeId: z.number(),
  serverId: z.number(),
  automount: z.boolean().optional(),
});
```

### Beispiel 4: Firewall-Regeln setzen

#### Server Function (`src/server/functions/hetzner/setFirewallRules.ts`)
```typescript
const FirewallRuleSchema = z.object({
  protocol: z.enum(["tcp", "udp", "icmp"]),
  port: z.string().optional(),
  source_ips: z.array(z.string()).optional(),
  destination_ips: z.array(z.string()).optional(),
  description: z.string().optional(),
});

const SetFirewallRulesSchema = z.object({
  firewallId: z.number(),
  rules: z.object({
    inbound: z.array(FirewallRuleSchema).optional(),
    outbound: z.array(FirewallRuleSchema).optional(),
  }),
});

export const setFirewallRules = createServerFn({ method: "POST" })
  .inputValidator(zodValidator(SetFirewallRulesSchema))
  .middleware([verifyAccessToInstance])
  .handler(async ({ context, data }) => {
    // Implementation
  });
```

## 📚 Verweise auf Dokumentation

Alle API-Details sind in den entsprechenden Markdown-Dateien im `hetzner_api_docs/` Verzeichnis dokumentiert:

- **Server Actions:** `hetzner_api_docs/server-actions-*.md`
- **Volumes:** `hetzner_api_docs/volumes*.md` und `hetzner_api_docs/volume-actions-*.md`
- **Networks:** `hetzner_api_docs/networks*.md` und `hetzner_api_docs/network-actions-*.md`
- **Firewalls:** `hetzner_api_docs/firewalls*.md` und `hetzner_api_docs/firewall-actions-*.md`
- **Images:** `hetzner_api_docs/images*.md` und `hetzner_api_docs/image-actions-*.md`

Verwende die `CURSOR_GUIDE.md` für Anleitungen zur effektiven Nutzung der Dokumentation in Cursor.

## 📝 Notizen

- **Snapshots** sind besonders wichtig für Backup-Strategien
- **Networks** sind essentiell für Multi-Server-Setups
- **Firewalls** sollten priorisiert werden für Security
- **Load Balancers** sind wichtig für Production-Setups
- **SSH Keys** sind wichtig für Server-Deployment-Automation


