# Update a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#servers-update-a-server

## Inhaltsverzeichnis

- [Update a Server](#update-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Server

Updates a Server. You can update a Server’s name and a Server’s labels.

Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).

#### HTTP Request

`PUT /servers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- namestring

  New name to set.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- serverobject
