# List Actions for a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-list-actions-for-a-server

## Inhaltsverzeichnis

- [List Actions for a Server](#list-actions-for-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Actions for a Server

Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

#### HTTP Request

`GET /servers/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Query Parameters

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
