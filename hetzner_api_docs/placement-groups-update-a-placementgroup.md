# Update a PlacementGroup

**Source URL:** https://docs.hetzner.cloud/reference/cloud#placement-groups-update-a-placementgroup

## Inhaltsverzeichnis

- [Update a PlacementGroup](#update-a-placementgroup)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a PlacementGroup

Updates the Placement Group properties.

Note: if the Placement Group object changes during the request, the response will be a “conflict” error.

#### HTTP Request

`PUT /placement_groups/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Placement Group.

#### Request

- namestring

  New Placement Group name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- placement\_groupobject  required
