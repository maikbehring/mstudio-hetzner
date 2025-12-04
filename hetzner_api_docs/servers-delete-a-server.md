# Delete a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#servers-delete-a-server

## Inhaltsverzeichnis

- [Delete a Server](#delete-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Delete a Server

Deletes a Server.

This immediately removes the Server from your account, and it is no longer
accessible. Any resources attached to the server (like Volumes, Primary IPs,
Floating IPs, Firewalls, Placement Groups) are detached while the server is deleted.

#### HTTP Request

`DELETE /servers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject
