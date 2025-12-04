# List Actions for a Floating IP

**Source URL:** https://docs.hetzner.cloud/reference/cloud#floating-ip-actions-list-actions-for-a-floating-ip

## Inhaltsverzeichnis

- [List Actions for a Floating IP](#list-actions-for-a-floating-ip)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Actions for a Floating IP

Lists Actions for a Floating IP.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /floating_ips/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

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
