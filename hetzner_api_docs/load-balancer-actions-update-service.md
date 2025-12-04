# Update Service

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-update-service

## Inhaltsverzeichnis

- [Update Service](#update-service)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update Service

Updates a Load Balancer Service.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `source_port_already_used` | The source port you are trying to add is already in use |

#### HTTP Request

`POST /load_balancers/{id}/actions/update_service`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- protocolstring

  Allowed: `tcp` `http` `https`

  Protocol of the Load Balancer.
- listen\_portinteger  required

  Port the Load Balancer listens on.
- destination\_portinteger

  Port the Load Balancer will balance to.
- proxyprotocolboolean

  Is Proxyprotocol enabled or not.
- health\_checkobject

  Service health check.
- httpobject

  Configuration option for protocols http and https.

#### Response

- actionobject  required
