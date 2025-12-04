# Apply to Resources

**Source URL:** https://docs.hetzner.cloud/reference/cloud#firewall-actions-apply-to-resources

## Inhaltsverzeichnis

- [Apply to Resources](#apply-to-resources)
  - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Apply to Resources

Applies a Firewall to multiple resources.

Supported resources:

- Servers (with a public network interface)
- Label Selectors

A Server can be applied to a maximum of 5 Firewalls. This limit
applies to Servers applied via a matching Label Selector as well.

Updates to resources matching or no longer matching a Label Selector can take up to a few seconds
to be processed.

A Firewall is applied to a resource once the related Action with command `apply_firewall` successfully finished.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `firewall_already_applied` | Firewall is already applied to resource |
| `incompatible_network_type` | The network type of the resource is not supported by Firewalls |
| `firewall_resource_not_found` | The resource the Firewall should be applied to was not found |
| `private_net_only_server` | The Server the Firewall should be applied to has no public interface |

#### HTTP Request

`POST /firewalls/{id}/actions/apply_to_resources`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- apply\_toarray of objects  required

  Resources to apply the Firewall to.

  Extends existing resources.

#### Response

- actionsarray of objects  required
