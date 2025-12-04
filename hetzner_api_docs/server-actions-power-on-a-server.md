# Power on a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-power-on-a-server

## Inhaltsverzeichnis

- [Power on a Server](#power-on-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Power on a Server

Starts a Server by turning its power on.

#### HTTP Request

`POST /servers/{id}/actions/poweron`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required
