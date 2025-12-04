# Create Image from a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-create-image-from-a-server

## Inhaltsverzeichnis

- [Create Image from a Server](#create-image-from-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Create Image from a Server

Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.

To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.

You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create a `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.

#### HTTP Request

`POST /servers/{id}/actions/create_image`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- descriptionstring

  Description of the Image, will be auto-generated if not set.
- typestring

  Allowed: `snapshot` `backup`Default: `snapshot`

  Type of Image to create.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".

#### Response

- imageobject
- actionobject
