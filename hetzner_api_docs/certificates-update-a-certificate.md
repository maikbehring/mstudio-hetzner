# Update a Certificate

**Source URL:** https://docs.hetzner.cloud/reference/cloud#certificates-update-a-certificate

## Inhaltsverzeichnis

- [Update a Certificate](#update-a-certificate)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Certificate

Updates the Certificate properties.

Note: if the Certificate object changes during the request, the response will be a “conflict” error.

#### HTTP Request

`PUT /certificates/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.

#### Request

- namestring

  New Certificate name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- certificateobject  required
