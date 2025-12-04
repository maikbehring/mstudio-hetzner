# Get a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#servers-get-a-server

## Inhaltsverzeichnis

- [Get a Server](#get-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Get a Server

Returns a specific Server object. The Server must exist inside the Project.

#### HTTP Request

`GET /servers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- serverobject
