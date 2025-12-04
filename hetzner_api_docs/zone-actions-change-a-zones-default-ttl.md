# Change a Zone's Default TTL

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-actions-change-a-zones-default-ttl

## Inhaltsverzeichnis

- [Change a Zone's Default TTL](#change-a-zones-default-ttl)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change a Zone's Default TTL

Changes the default Time To Live (TTL) of a Zone.

This TTL is used for RRSets that do not explicitly define a TTL.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/actions/change_ttl`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- ttlinteger  required

  Default: `3600`

  Default Time To Live (TTL) of the Zone.

  Must be in between 60s and 2147483647s.

  This TTL is used for RRSets that do not explicitly define a TTL.

#### Response

- actionobject  required
