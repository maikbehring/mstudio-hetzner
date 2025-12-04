# Get an Action for a Volume

**Source URL:** https://docs.hetzner.cloud/reference/cloud#volume-actions-get-an-action-for-a-volume

## Inhaltsverzeichnis

- [Get an Action for a Volume](#get-an-action-for-a-volume)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Get an Action for a Volume

Returns a specific Action for a Volume.

#### HTTP Request

`GET /volumes/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required
