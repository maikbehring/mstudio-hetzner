# Create a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#networks-create-a-network

## Inhaltsverzeichnis

- [Create a Network](#create-a-network)
  - [HTTP Request](#http-request)
  - [Request](#request)
  - [Response](#response)

---

### Create a Network

Creates a Network.

The provided `ip_range` can only be extended later on, but not reduced.

Subnets can be added now or later on using the add subnet action. If you do not specify an `ip_range` for the subnet the first available /24 range will be used.

Routes can be added now or later by using the add route action.

#### HTTP Request

`POST /networks`

#### Request

- namestring  required

  Name of the Network.
- ip\_rangestring  required

  IP range of the Network.

  Uses CIDR notation.

  Must span all included subnets. Must be one of the private IPv4 ranges of RFC1918.

  Minimum network size is /24. We highly recommend that you pick a larger Network with a /16 netmask.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- subnetsarray of objects

  Array of subnets to allocate.
- routesarray of objects

  Array of routes set in this Network.
- expose\_routes\_to\_vswitchboolean

  Toggle to expose routes to the Networks vSwitch.

  Indicates if the routes from this Network should be exposed to the vSwitch in this Network. Only takes effect if a vSwitch is setup in this Network.

#### Response

- networkobject
