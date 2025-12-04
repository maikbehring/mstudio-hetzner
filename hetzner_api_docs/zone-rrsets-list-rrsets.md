# List RRSets

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-rrsets-list-rrsets

## Inhaltsverzeichnis

- [List RRSets](#list-rrsets)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List RRSets

Returns all RRSets in the Zone.

Use the provided URI parameters to modify the result.

The maximum value for `per_page` on this endpoint is `100` instead of `50`.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`GET /zones/{id_or_name}/rrsets`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- typearray of strings

  Allowed: `A` `AAAA` `CAA` `CNAME` `DS` `HINFO` `HTTPS` `MX` `NS` `PTR` `RP` `SOA` `SRV` `SVCB` `TLSA` `TXT`

  Filter resources by their type. Can be used multiple times. The response will only
  contain resources matching the specified types.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- rrsetsarray of objects  required
- metaobject  required
