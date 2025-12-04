# Resize Volume

**Source URL:** https://docs.hetzner.cloud/reference/cloud#volume-actions-resize-volume

## Inhaltsverzeichnis

- [Resize Volume](#resize-volume)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Resize Volume

Changes the size of a Volume. Note that downsizing a Volume is not possible.

#### HTTP Request

`POST /volumes/{id}/actions/resize`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Request

- sizenumber  required

  New Volume size in GB (must be greater than current size).

#### Response

- actionobject  required
