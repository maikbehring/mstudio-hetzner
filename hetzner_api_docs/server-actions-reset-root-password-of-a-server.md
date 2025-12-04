# Reset root Password of a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-reset-root-password-of-a-server

## Inhaltsverzeichnis

- [Reset root Password of a Server](#reset-root-password-of-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Reset root Password of a Server

Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.

This will generate a new password for this Server and return it.

If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.

#### HTTP Request

`POST /servers/{id}/actions/reset_password`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- root\_passwordstring

  Password that will be set for this Server once the Action succeeds.
- actionobject
