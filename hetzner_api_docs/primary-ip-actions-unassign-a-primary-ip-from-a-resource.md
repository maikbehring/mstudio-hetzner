# Unassign a Primary IP from a resource

**Source URL:** https://docs.hetzner.cloud/reference/cloud#primary-ip-actions-unassign-a-primary-ip-from-a-resource

## Inhaltsverzeichnis

- [Unassign a Primary IP from a resource](#unassign-a-primary-ip-from-a-resource)
  - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Unassign a Primary IP from a resource

Unassign a Primary IP from a resource.

A Server must be powered off (status `off`) in order for this operation to succeed.

A Server requires at least one network interface (public or private) to be powered on.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `server_not_stopped` | The Server is running, but needs to be powered off |
| `server_is_load_balancer_target` | The Server IPv4 address is a loadbalancer target |

#### HTTP Request

`POST /primary_ips/{id}/actions/unassign`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Response

- actionobject  required
