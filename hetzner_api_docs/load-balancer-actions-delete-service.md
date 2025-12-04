# Delete Service

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-delete-service

## Inhaltsverzeichnis

- [Delete Service](#delete-service)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Delete Service

Delete a service of a Load Balancer.

#### HTTP Request

`POST /load_balancers/{id}/actions/delete_service`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- listen\_portinteger  required

  The listen port of the service you want to delete.

#### Response

- actionobject  required
