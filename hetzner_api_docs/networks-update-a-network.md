# Update a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#networks-update-a-network

## Inhaltsverzeichnis

- [Update a Network](#update-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Network

Update a Network.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`PUT /networks/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- namestring

  New Network name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".
- expose\_routes\_to\_vswitchboolean

  Toggle to expose routes to the Networks vSwitch.

  Indicates if the routes from this Network should be exposed to the vSwitch in this Network. Only takes effect if a vSwitch is setup in this Network.

#### Response

- networkobject
