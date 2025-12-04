# Change the Type of a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-change-the-type-of-a-server

## Inhaltsverzeichnis

- [Change the Type of a Server](#change-the-type-of-a-server)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change the Type of a Server

Changes the type (Cores, RAM and disk sizes) of a Server.

Server must be powered off for this command to succeed.

This copies the content of its disk, and starts it again.

You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.

If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `invalid_server_type` | The server type does not fit for the given server or is deprecated |
| `server_not_stopped` | The action requires a stopped server |

#### HTTP Request

`POST /servers/{id}/actions/change_type`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- upgrade\_diskboolean  required

  If false, do not upgrade the disk (this allows downgrading the Server type later).
- server\_typestring  required

  ID or name of Server type the Server should migrate to.

#### Response

- actionobject  required
