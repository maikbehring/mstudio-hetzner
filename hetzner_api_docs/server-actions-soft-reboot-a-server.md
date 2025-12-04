# Soft-reboot a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-soft-reboot-a-server

## Inhaltsverzeichnis

- [Soft-reboot a Server](#soft-reboot-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Soft-reboot a Server

Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.

#### HTTP Request

`POST /servers/{id}/actions/reboot`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required
