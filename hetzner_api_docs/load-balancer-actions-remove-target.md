# Remove Target

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-remove-target

## Inhaltsverzeichnis

- [Remove Target](#remove-target)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Remove Target

Removes a target from a Load Balancer.

#### HTTP Request

`POST /load_balancers/{id}/actions/remove_target`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- typestring  required

  Allowed: `server` `label_selector` `ip`

  Type of the resource.
- serverobject

  Configuration for type Server, required if type is `server`.
- label\_selectorobject

  Configuration for label selector targets, required if type is `label_selector`.
- ipobject

  IP target where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type `ip`.

#### Response

- actionobject  required
