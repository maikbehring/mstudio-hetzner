# Reset a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-reset-a-server

## Inhaltsverzeichnis

- [Reset a Server](#reset-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Reset a Server

Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.

#### HTTP Request

`POST /servers/{id}/actions/reset`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required
