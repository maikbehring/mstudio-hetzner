# Add a subnet to a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#network-actions-add-a-subnet-to-a-network

## Inhaltsverzeichnis

- [Add a subnet to a Network](#add-a-subnet-to-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Add a subnet to a Network

Adds a new subnet to the Network.

If the subnet `ip_range` is not provided, the first available `/24` IP range will be used.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/add_subnet`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- typestring  required

  Allowed: `cloud` `server` `vswitch`

  Type of subnet.

  - `cloud` - Used to connect cloud Servers and Load Balancers.
  - `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.
  - `vswitch` - Used to connect cloud Servers and Load Balancers with dedicated Servers.
- ip\_rangestring

  IP range of the subnet.

  Uses CIDR notation.

  Must be a subnet of the parent Networks `ip_range`.

  Must not overlap with any other subnets or with any destinations in routes.

  Minimum network size is /30. We highly recommend that you pick a larger subnet with a /24 netmask.
- network\_zonestring  required

  Name of the Network Zone.

  The Location contains the `network_zone` it belongs to.
- vswitch\_idinteger (int64)

  ID of the robot vSwitch.

  Must be supplied if the subnet is of type `vswitch`.

#### Response

- actionobject  required
