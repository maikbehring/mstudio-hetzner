# Change a Zone's Protection

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-actions-change-a-zones-protection

## Inhaltsverzeichnis

- [Change a Zone's Protection](#change-a-zones-protection)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change a Zone's Protection

Changes the protection configuration of a Zone.

#### HTTP Request

`POST /zones/{id_or_name}/actions/change_protection`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- deleteboolean

  Prevents the Zone from being deleted.

#### Response

- actionobject  required
