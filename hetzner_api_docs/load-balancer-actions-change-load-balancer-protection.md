# Change Load Balancer Protection

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-change-load-balancer-protection

## Inhaltsverzeichnis

- [Change Load Balancer Protection](#change-load-balancer-protection)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change Load Balancer Protection

Changes the protection configuration of a Load Balancer.

#### HTTP Request

`POST /load_balancers/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- deleteboolean

  If true, prevents the Load Balancer from being deleted.

#### Response

- actionobject  required
