# Export a Zone file

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zones-export-a-zone-file

## Inhaltsverzeichnis

- [Export a Zone file](#export-a-zone-file)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Export a Zone file

Returns a generated Zone file in BIND (RFC 1034/1035) format.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`GET /zones/{id_or_name}/zonefile`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Response

- zonefilestring  required

  Generated zone file.

  Example:

  ```text
  $ORIGIN	example.com.
  $TTL	3600

  @	IN	SOA	hydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600

  @	IN	10800	NS	hydrogen.ns.hetzner.com. ; Some comment.
  @	IN	10800	NS	oxygen.ns.hetzner.com.
  @	IN	10800	NS	helium.ns.hetzner.de.
  ```
