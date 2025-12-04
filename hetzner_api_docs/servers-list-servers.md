# List Servers

**Source URL:** https://docs.hetzner.cloud/reference/cloud#servers-list-servers

## Inhaltsverzeichnis

- [List Servers](#list-servers)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Servers

Returns all existing Server objects.

#### HTTP Request

`GET /servers`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `initializing` `starting` `stopping` `off` `deleting` `migrating` `rebuilding` `unknown`

  Filter resources by status. Can be used multiple times. The response will only
  contain the resources with the specified status.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- serversarray of objects  required
- metaobject  required
