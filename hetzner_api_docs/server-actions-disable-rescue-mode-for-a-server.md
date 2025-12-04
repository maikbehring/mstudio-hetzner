# Disable Rescue Mode for a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-disable-rescue-mode-for-a-server

## Inhaltsverzeichnis

- [Disable Rescue Mode for a Server](#disable-rescue-mode-for-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Disable Rescue Mode for a Server

Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Disabling rescue mode will not reboot your Server — you will have to do this yourself.

#### HTTP Request

`POST /servers/{id}/actions/disable_rescue`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required
