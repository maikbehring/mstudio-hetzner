# Delete a Primary IP

**Source URL:** https://docs.hetzner.cloud/reference/cloud#primary-ips-delete-a-primary-ip

## Inhaltsverzeichnis

- [Delete a Primary IP](#delete-a-primary-ip)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)

---

### Delete a Primary IP

Deletes a Primary IP.

If assigned to a Server the Primary IP will be unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.

#### HTTP Request

`DELETE /primary_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.
