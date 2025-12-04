# Delete a route from a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#network-actions-delete-a-route-from-a-network

## Inhaltsverzeichnis

- [Delete a route from a Network](#delete-a-route-from-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Delete a route from a Network

Delete a route entry from a Network.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/delete_route`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- destinationstring  required

  Destination network or host of the route.

  Packages addressed for IPs matching the destination IP prefix will be send to the specified gateway.

  Must be one of

  - private IPv4 ranges of RFC1918
  - or `0.0.0.0/0`.

  Must not overlap with

  - an existing ip\_range in any subnets
  - or with any destinations in other routes
  - or with `172.31.1.1`.

  `172.31.1.1` is being used as a gateway for the public network interface of Servers.
- gatewaystring  required

  Gateway of the route.

  Packages addressed for the specified destination will be send to this IP address.

  Cannot be

  - the first IP of the networks ip\_range,
  - an IP behind a vSwitch or
  - `172.31.1.1`.

  `172.31.1.1` is being used as a gateway for the public network interface of Servers.

#### Response

- actionobject  required
