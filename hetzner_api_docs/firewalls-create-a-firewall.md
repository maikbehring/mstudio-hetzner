# Create a Firewall

**Source URL:** https://docs.hetzner.cloud/reference/cloud#firewalls-create-a-firewall

## Inhaltsverzeichnis

- [Create a Firewall](#create-a-firewall)
  - [Operation specific errors](#operation-specific-errors)
  - [HTTP Request](#http-request)
  - [Request](#request)
  - [Response](#response)

---

### Create a Firewall

Create a Firewall.

#### Operation specific errors

| Status Code | Error Code | Description |
| --- | --- | --- |
| `422` | `server_already_added` | The Server was applied more than once. |
| `422` | `incompatible_network_type` | The resources network type is not supported by Firewalls. |
| `422` | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found. |

#### HTTP Request

`POST /firewalls`

#### Request

- namestring  required

  Name of the Firewall.

  Limited to a maximum of 128 characters.

  Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- rulesarray of objects

  Array of rules.

  Rules are limited to 50 entries per Firewall and 500 effective rules.
- apply\_toarray of objects

  Resources to apply the Firewall to.

  Resources added directly are taking precedence over those added via a Label Selector.

#### Response

- firewallobject
- actionsarray of objects
