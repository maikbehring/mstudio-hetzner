# Change Server Protection

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-change-server-protection

## Inhaltsverzeichnis

- [Change Server Protection](#change-server-protection)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change Server Protection

Changes the protection configuration of the Server.

#### HTTP Request

`POST /servers/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- deleteboolean

  If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value).
- rebuildboolean

  If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value).

#### Response

- actionobject  required
