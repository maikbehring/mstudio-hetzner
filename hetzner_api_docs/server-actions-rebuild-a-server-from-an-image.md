# Rebuild a Server from an Image

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-rebuild-a-server-from-an-image

## Inhaltsverzeichnis

- [Rebuild a Server from an Image](#rebuild-a-server-from-an-image)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Rebuild a Server from an Image

Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server

The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.

Your Server will automatically be powered off before the rebuild command executes.

#### HTTP Request

`POST /servers/{id}/actions/rebuild`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.

- imagestring  required

  ID or name of Image to rebuilt from.

#### Response

- root\_passwordstring   – nullable

  New root password when not using SSH keys.
- actionobject
