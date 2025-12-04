# List Data Centers

**Source URL:** https://docs.hetzner.cloud/reference/cloud#data-centers-list-data-centers

## Inhaltsverzeichnis

- [List Data Centers](#list-data-centers)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Data Centers

Returns all Data Centers.

#### HTTP Request

`GET /datacenters`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- datacentersarray of objects  required

  List of Data Centers.
- recommendationinteger (int64) required

  Recommended Data Center for creating new resources.
- metaobject  required
