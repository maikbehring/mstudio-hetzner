# Get an Action for a Certificate

**Source URL:** https://docs.hetzner.cloud/reference/cloud#certificate-actions-get-an-action-for-a-certificate

## Inhaltsverzeichnis

- [Get an Action for a Certificate](#get-an-action-for-a-certificate)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Get an Action for a Certificate

Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.

#### HTTP Request

`GET /certificates/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required
