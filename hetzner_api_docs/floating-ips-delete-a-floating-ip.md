# Delete a Floating IP

**Source URL:** https://docs.hetzner.cloud/reference/cloud#floating-ips-delete-a-floating-ip

## Inhaltsverzeichnis

- [Delete a Floating IP](#delete-a-floating-ip)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)

---

### Delete a Floating IP

Deletes a Floating IP.

If the IP is assigned to a resource it will be unassigned.

#### HTTP Request

`DELETE /floating_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.
