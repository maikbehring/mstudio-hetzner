# List Volumes

**Source URL:** https://docs.hetzner.cloud/reference/cloud#volumes-list-volumes

## Inhaltsverzeichnis

- [List Volumes](#list-volumes)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Volumes

Gets all existing Volumes that you have available.

#### HTTP Request

`GET /volumes`

#### Query Parameters

- statusarray of strings

  Allowed: `available` `creating`

  Filter resources by status. Can be used multiple times. The response will only
  contain the resources with the specified status.
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
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- volumesarray of objects  required
- metaobject  required
