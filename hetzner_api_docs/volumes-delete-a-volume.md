# Delete a Volume

**Source URL:** https://docs.hetzner.cloud/reference/cloud#volumes-delete-a-volume

## Inhaltsverzeichnis

- [Delete a Volume](#delete-a-volume)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)

---

### Delete a Volume

Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.

#### HTTP Request

`DELETE /volumes/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.
