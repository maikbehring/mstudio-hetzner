# Remove from Resources

**Source URL:** https://docs.hetzner.cloud/reference/cloud#firewall-actions-remove-from-resources

## Inhaltsverzeichnis

- [Remove from Resources](#remove-from-resources)
  - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Remove from Resources

Removes a Firewall from multiple resources.

Supported resources:

- Servers (with a public network interface)

A Firewall is removed from a resource once the related Action with command `remove_firewall` successfully finished.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `firewall_resource_not_found` | The resource the Firewall should be removed from was not found |
| `firewall_managed_by_label_selector` | Firewall is applied via a Label Selector and cannot be removed manually |

#### HTTP Request

`POST /firewalls/{id}/actions/remove_from_resources`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- remove\_fromarray of objects  required

  Resources to remove the Firewall from.

#### Response

- actionsarray of objects  required
