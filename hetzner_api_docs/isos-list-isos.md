# List ISOs

**Source URL:** https://docs.hetzner.cloud/reference/cloud#isos-list-isos

## Inhaltsverzeichnis

- [List ISOs](#list-isos)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List ISOs

Returns all available ISO objects.

#### HTTP Request

`GET /isos`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- architecturestring

  Allowed: `x86` `arm`

  Filter resources by cpu architecture. The response will only contain the resources
  with the specified cpu architecture.
- include\_architecture\_wildcardboolean

  Include Images with wildcard architecture (architecture is null). Works only if architecture filter is specified.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- isosarray of objects  required
- metaobject  required
