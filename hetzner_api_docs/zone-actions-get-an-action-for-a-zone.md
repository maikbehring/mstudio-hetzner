# Get an Action for a Zone

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-actions-get-an-action-for-a-zone

## Inhaltsverzeichnis

- [Get an Action for a Zone](#get-an-action-for-a-zone)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Get an Action for a Zone

Returns a specific Action for a Zone.

#### HTTP Request

`GET /zones/{id_or_name}/actions/{action_id}`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required
