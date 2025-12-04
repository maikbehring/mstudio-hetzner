# Set Rules

**Source URL:** https://docs.hetzner.cloud/reference/cloud#firewall-actions-set-rules

## Inhaltsverzeichnis

- [Set Rules](#set-rules)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Set Rules

Set the rules of a Firewall.

Overwrites the existing rules with the given ones. Pass an empty array to remove all rules.

Rules are limited to 50 entries per Firewall and 500 effective rules.

#### HTTP Request

`POST /firewalls/{id}/actions/set_rules`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- rulesarray of objects  required

  Array of rules.

  Rules are limited to 50 entries per Firewall and 500 effective rules.

  Existing rules will be replaced.

#### Response

- actionsarray of objects  required
