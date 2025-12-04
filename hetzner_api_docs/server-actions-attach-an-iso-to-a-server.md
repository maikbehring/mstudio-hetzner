# Attach an ISO to a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-attach-an-iso-to-a-server

## Inhaltsverzeichnis

- [Attach an ISO to a Server](#attach-an-iso-to-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Attach an ISO to a Server

Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.

Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.

#### HTTP Request

`POST /servers/{id}/actions/attach_iso`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- isostring  required

  ID or name of ISO to attach to the Server as listed in GET `/isos`.

#### Response

- actionobject  required
