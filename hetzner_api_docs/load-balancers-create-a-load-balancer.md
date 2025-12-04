# Create a Load Balancer

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancers-create-a-load-balancer

## Inhaltsverzeichnis

- [Create a Load Balancer](#create-a-load-balancer)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Request](#request)
  - [Response](#response)

---

### Create a Load Balancer

Creates a Load Balancer.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `cloud_resource_ip_not_allowed` | The IP you are trying to add as a target belongs to a Hetzner Cloud resource |
| `ip_not_owned` | The IP is not owned by the owner of the project of the Load Balancer |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network |
| `robot_unavailable` | Robot was not available. The caller may retry the operation after a short delay. |
| `server_not_attached_to_network` | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `source_port_already_used` | The source port you are trying to add is already in use |
| `missing_ipv4` | The server that you are trying to add as a public target does not have a public IPv4 address |
| `target_already_defined` | The Load Balancer target you are trying to define is already defined |

#### HTTP Request

`POST /load_balancers`

#### Request

- namestring  required

  Name of the Load Balancer.
- load\_balancer\_typestring  required

  ID or name of the Load Balancer type this Load Balancer should be created with.
- algorithmobject

  Algorithm of the Load Balancer.
- servicesarray of objects

  Array of services.
- targetsarray of objects

  Array of targets.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- public\_interfaceboolean

  Enable or disable the public interface of the Load Balancer.
- networkinteger (int64)

  ID of the network the Load Balancer should be attached to on creation.
- network\_zonestring

  Name of network zone.
- locationstring

  ID or name of Location to create Load Balancer in.

#### Response

- load\_balancerobject  required
- actionobject  required
