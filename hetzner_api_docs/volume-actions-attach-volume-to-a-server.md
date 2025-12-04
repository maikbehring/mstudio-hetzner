# Attach Volume to a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#volume-actions-attach-volume-to-a-server

## Inhaltsverzeichnis

- [Attach Volume to a Server](#attach-volume-to-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Attach Volume to a Server

Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.

#### HTTP Request

`POST /volumes/{id}/actions/attach`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Request

- serverinteger (int64) required

  ID of the Server the Volume will be attached to.
- automountboolean

  Auto-mount the Volume after attaching it.

#### Response

- actionobject  required
