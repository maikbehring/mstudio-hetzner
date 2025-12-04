# List SSH keys

**Source URL:** https://docs.hetzner.cloud/reference/cloud#ssh-keys-list-ssh-keys

## Inhaltsverzeichnis

- [List SSH keys](#list-ssh-keys)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### List SSH keys

Returns all SSH key objects.

#### HTTP Request

`GET /ssh_keys`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- fingerprintstring

  Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.
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

- ssh\_keysarray of objects  required
- metaobject  required
