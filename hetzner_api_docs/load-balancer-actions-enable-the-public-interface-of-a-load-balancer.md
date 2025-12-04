# Enable the public interface of a Load Balancer

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancer-actions-enable-the-public-interface-of-a-load-balancer

## Inhaltsverzeichnis

- [Enable the public interface of a Load Balancer](#enable-the-public-interface-of-a-load-balancer)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Enable the public interface of a Load Balancer

Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.

#### HTTP Request

`POST /load_balancers/{id}/actions/enable_public_interface`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Response

- actionobject  required
