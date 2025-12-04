# Detach a Server from a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-detach-a-server-from-a-network

## Inhaltsverzeichnis

- [Detach a Server from a Network](#detach-a-server-from-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Detach a Server from a Network

Detaches a Server from a network. The interface for this network will vanish.

#### HTTP Request

`POST /servers/{id}/actions/detach_from_network`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- networkinteger (int64) required

  ID of an existing network to detach the Server from.

#### Response

- actionobject  required
