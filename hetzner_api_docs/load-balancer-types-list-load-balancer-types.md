# List Load Balancer Types

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-types-list-load-balancer-types

## Inhaltsverzeichnis

- [List Load Balancer Types](#list-load-balancer-types)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List Load Balancer Types

Gets all Load Balancer type objects.

#### HTTP Request

`GET /load_balancer_types`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- load\_balancer\_typesarray of objects  required
- metaobject  required
