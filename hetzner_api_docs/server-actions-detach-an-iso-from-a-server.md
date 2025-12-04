# Detach an ISO from a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-detach-an-iso-from-a-server

## Inhaltsverzeichnis

- [Detach an ISO from a Server](#detach-an-iso-from-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Detach an ISO from a Server

Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`.

#### HTTP Request

`POST /servers/{id}/actions/detach_iso`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required
