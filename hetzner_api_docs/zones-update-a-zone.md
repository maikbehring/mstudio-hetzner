# Update a Zone

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zones-update-a-zone

## Inhaltsverzeichnis

- [Update a Zone](#update-a-zone)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Zone

Updates a Zone.

To modify resource record sets (RRSets), use the RRSet Actions
endpoints.

#### HTTP Request

`PUT /zones/{id_or_name}`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- zoneobject  required
