# Update a Volume

**Source URL:** https://docs.hetzner.cloud/reference/cloud#volumes-update-a-volume

## Inhaltsverzeichnis

- [Update a Volume](#update-a-volume)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Volume

Updates the Volume properties.

#### HTTP Request

`PUT /volumes/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Request

- namestring

  New Volume name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- volumeobject  required
