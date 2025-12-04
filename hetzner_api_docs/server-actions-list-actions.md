# List Actions

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-list-actions

## Inhaltsverzeichnis

- [List Actions](#list-actions)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Actions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.

#### HTTP Request

`GET /servers/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required
