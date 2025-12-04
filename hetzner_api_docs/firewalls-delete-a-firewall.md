# Delete a Firewall

**Source URL:** https://docs.hetzner.cloud/reference/cloud#firewalls-delete-a-firewall

## Inhaltsverzeichnis

- [Delete a Firewall](#delete-a-firewall)
  - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)

---

### Delete a Firewall

Deletes the Firewall.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `resource_in_use` | Firewall still applied to a resource |

#### HTTP Request

`DELETE /firewalls/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.
