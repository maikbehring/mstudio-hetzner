# Update a Firewall

**Source URL:** https://docs.hetzner.cloud/reference/cloud#firewalls-update-a-firewall

## Inhaltsverzeichnis

- [Update a Firewall](#update-a-firewall)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Firewall

Update a Firewall.

In case of a parallel running change on the Firewall a `conflict` error will be returned.

#### HTTP Request

`PUT /firewalls/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- namestring

  Name of the Firewall.

  Limited to a maximum of 128 characters.

  Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- firewallobject  required
