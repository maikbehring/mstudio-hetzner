# Change Algorithm

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-change-algorithm

## Inhaltsverzeichnis

- [Change Algorithm](#change-algorithm)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change Algorithm

Change the algorithm that determines to which target new requests are sent.

#### HTTP Request

`POST /load_balancers/{id}/actions/change_algorithm`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- typestring  required

  Allowed: `round_robin` `least_connections`

  Algorithm of the Load Balancer.

#### Response

- actionobject  required
