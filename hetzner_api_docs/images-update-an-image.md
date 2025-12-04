# Update an Image

**Source URL:** https://docs.hetzner.cloud/reference/cloud#images-update-an-image

## Inhaltsverzeichnis

- [Update an Image](#update-an-image)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update an Image

Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.

#### HTTP Request

`PUT /images/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.

#### Request

- descriptionstring

  New description of Image.
- typestring

  Allowed: `snapshot`

  Destination Image type to convert to.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- imageobject
