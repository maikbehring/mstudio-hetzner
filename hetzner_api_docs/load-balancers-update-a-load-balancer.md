# Update a Load Balancer

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancers-update-a-load-balancer

## Inhaltsverzeichnis

- [Update a Load Balancer](#update-a-load-balancer)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Update a Load Balancer

Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.

Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.

#### HTTP Request

`PUT /load_balancers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- namestring

  New Load Balancer name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- load\_balancerobject  required
