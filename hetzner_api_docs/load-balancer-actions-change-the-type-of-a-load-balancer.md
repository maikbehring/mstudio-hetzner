# Change the Type of a Load Balancer

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-change-the-type-of-a-load-balancer

## Inhaltsverzeichnis

- [Change the Type of a Load Balancer](#change-the-type-of-a-load-balancer)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change the Type of a Load Balancer

Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.

**Call specific error codes**

| Code | Description |
| --- | --- |
| `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |

#### HTTP Request

`POST /load_balancers/{id}/actions/change_type`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- load\_balancer\_typestring  required

  ID or name of Load Balancer type the Load Balancer should migrate to.

#### Response

- actionobject  required
