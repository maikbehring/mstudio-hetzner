# Get an Action for a Load Balancer

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-get-an-action-for-a-load-balancer

## Inhaltsverzeichnis

- [Get an Action for a Load Balancer](#get-an-action-for-a-load-balancer)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Get an Action for a Load Balancer

Returns a specific Action for a Load Balancer.

#### HTTP Request

`GET /load_balancers/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required
