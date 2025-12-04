# Update a Floating IP

**Source URL:** https://docs.hetzner.cloud/reference/cloud#floating-ips-update-a-floating-ip

## Inhaltsverzeichnis

- [Update a Floating IP](#update-a-floating-ip)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Floating IP

Update a Floating IP.

#### HTTP Request

`PUT /floating_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Request

- descriptionstring   – nullable

  Description of the Resource.
- namestring

  Name of the Resource. Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- floating\_ipobject  required
