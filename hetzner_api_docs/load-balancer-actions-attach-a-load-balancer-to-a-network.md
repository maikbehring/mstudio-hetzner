# Attach a Load Balancer to a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-attach-a-load-balancer-to-a-network

## Inhaltsverzeichnis

- [Attach a Load Balancer to a Network](#attach-a-load-balancer-to-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Attach a Load Balancer to a Network

Attach a Load Balancer to a Network.

**Call specific error codes**

| Code | Description |
| --- | --- |
| `load_balancer_already_attached` | The Load Balancer is already attached to a network |
| `ip_not_available` | The provided Network IP is not available |
| `no_subnet_available` | No Subnet or IP is available for the Load Balancer within the network |

#### HTTP Request

`POST /load_balancers/{id}/actions/attach_to_network`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- networkinteger (int64) required

  ID of an existing network to attach the Load Balancer to.
- ipstring

  IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address.
- ip\_rangestring

  IP range in CIDR block notation of the subnet to attach to.

  This allows for auto assigning an IP address for a specific subnet.
  Providing `ip` that is not part of `ip_range` will result in an error.

#### Response

- actionobject  required
