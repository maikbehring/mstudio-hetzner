# List Floating IPs

**Source URL:** https://docs.hetzner.cloud/reference/cloud#floating-ips-list-floating-ips

## Inhaltsverzeichnis

- [List Floating IPs](#list-floating-ips)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Floating IPs

List multiple Floating IPs.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /floating_ips`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- floating\_ipsarray of objects  required
- metaobject  required
