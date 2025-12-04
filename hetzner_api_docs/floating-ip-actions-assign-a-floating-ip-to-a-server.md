# Assign a Floating IP to a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#floating-ip-actions-assign-a-floating-ip-to-a-server

## Inhaltsverzeichnis

- [Assign a Floating IP to a Server](#assign-a-floating-ip-to-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Assign a Floating IP to a Server

Assigns a Floating IP to a Server.

#### HTTP Request

`POST /floating_ips/{id}/actions/assign`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Request

- serverinteger (int64)  – nullablerequired

  Server the Floating IP is assigned to.

  `null` if not assigned.

#### Response

- actionobject  required
