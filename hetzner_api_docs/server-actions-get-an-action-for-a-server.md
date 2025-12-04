# Get an Action for a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-get-an-action-for-a-server

## Inhaltsverzeichnis

- [Get an Action for a Server](#get-an-action-for-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Get an Action for a Server

Returns a specific Action object for a Server.

#### HTTP Request

`GET /servers/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required
