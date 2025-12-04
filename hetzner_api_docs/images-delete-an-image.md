# Delete an Image

**Source URL:** https://docs.hetzner.cloud/reference/cloud#images-delete-an-image

## Inhaltsverzeichnis

- [Delete an Image](#delete-an-image)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)

---

### Delete an Image

Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.

#### HTTP Request

`DELETE /images/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.
