# List Placement Groups

**Source URL:** https://docs.hetzner.cloud/reference/cloud#placement-groups-list-placement-groups

## Inhaltsverzeichnis

- [List Placement Groups](#list-placement-groups)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Placement Groups

Returns all Placement Group objects.

#### HTTP Request

`GET /placement_groups`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- typearray of strings

  Allowed: `spread`

  Filter resources by type. Can be used multiple times. The response will only
  contain the resources with the specified type.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- placement\_groupsarray of objects  required
- metaobject  required
