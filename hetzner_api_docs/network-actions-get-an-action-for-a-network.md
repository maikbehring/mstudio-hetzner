# Get an Action for a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#network-actions-get-an-action-for-a-network

## Inhaltsverzeichnis

- [Get an Action for a Network](#get-an-action-for-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Get an Action for a Network

Returns a specific Action for a Network.

#### HTTP Request

`GET /networks/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required
