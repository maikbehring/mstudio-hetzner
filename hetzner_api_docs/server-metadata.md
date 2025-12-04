# Server Metadata

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-metadata

## Inhaltsverzeichnis

- [Server Metadata](#server-metadata)

---

## Server Metadata

Your Server can discover metadata about itself by doing a HTTP request to specific URLs. The following data is available:

| Data | Format | Contents |
| --- | --- | --- |
| hostname | text | Name of the Server as set in the api |
| instance-id | number | ID of the server |
| public-ipv4 | text | Primary public IPv4 address |
| private-networks | yaml | Details about the private networks the Server is attached to |
| availability-zone | text | Name of the availability zone that Server runs in |
| region | text | Network zone, e.g. eu-central |
