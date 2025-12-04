# Delete a subnet from a Network

**Source URL:** https://docs.hetzner.cloud/reference/cloud#network-actions-delete-a-subnet-from-a-network

## Inhaltsverzeichnis

- [Delete a subnet from a Network](#delete-a-subnet-from-a-network)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Delete a subnet from a Network

Deletes a single subnet entry from a Network.

Subnets containing attached resources can not be deleted, they must be detached beforehand.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/delete_subnet`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- ip\_rangestring  required

  IP range in CIDR block notation of the subnet to delete.

#### Response

- actionobject  required
