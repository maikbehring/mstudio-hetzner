# Enable and Configure Backups for a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server-actions-enable-and-configure-backups-for-a-server

## Inhaltsverzeichnis

- [Enable and Configure Backups for a Server](#enable-and-configure-backups-for-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Enable and Configure Backups for a Server

Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.

Backups are automatically created daily.

#### HTTP Request

`POST /servers/{id}/actions/enable_backup`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required
