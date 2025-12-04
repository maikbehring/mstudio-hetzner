# Pagination

**Source URL:** https://docs.hetzner.cloud/reference/cloud#pagination

## Inhaltsverzeichnis

- [Pagination](#pagination)

---

## Pagination

Responses which return multiple items support pagination. If they do support pagination, it can be controlled with following query string parameters:

- A `page` parameter specifies the page to fetch. The number of the first page is 1.
- A `per_page` parameter specifies the number of items returned per page. The default value is 25, the maximum value is 50 except otherwise specified in the documentation.

Responses contain a `Link` header with pagination information.

Additionally, if the response body is JSON and the root object is an object, that object has a `pagination` object inside the `meta` object with pagination information:

The keys `previous_page`, `next_page`, `last_page`, and `total_entries` may be `null` when on the first page, last page, or when the total number of entries is unknown.

Line breaks have been added for display purposes only and responses may only contain some of the above `rel` values.
