# Detach a Load Balancer from a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-detach-a-load-balancer-from-a-network

## Inhaltsverzeichnis

- [Detach a Load Balancer from a Network](#detach-a-load-balancer-from-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Detach a Load Balancer from a Network

Detaches a Load Balancer from a network.

#### HTTP Request

`POST /load_balancers/{id}/actions/detach_from_network`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- networkinteger (int64) required

  ID of an existing network to detach the Load Balancer from.

#### Response

- actionobject  required
