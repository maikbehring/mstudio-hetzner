# Change reverse DNS records for a Floating IP

**Source URL:** https://docs.hetzner.cloud/reference/cloud#floating-ip-actions-change-reverse-dns-records-for-a-floating-ip

## Inhaltsverzeichnis

- [Change reverse DNS records for a Floating IP](#change-reverse-dns-records-for-a-floating-ip)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Change reverse DNS records for a Floating IP

Change the reverse DNS records for this Floating IP.

Allows to modify the PTR records set for the IP address.

#### HTTP Request

`POST /floating_ips/{id}/actions/change_dns_ptr`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Request

The `ip` attributes specifies for which IP address the record is set. For IPv4 addresses this must be the exact address of the Floating IP. For IPv6 addresses this must be a single address within the `/64` subnet of the Floating IP.

The `dns_ptr` attribute specifies the hostname used for the IP address. Must be a fully qualified domain name (FQDN) without trailing dot.

For IPv6 Floating IPs up to 100 entries can be created.

- ipstring  required

  Single IPv4 or IPv6 address to create pointer for.
- dns\_ptrstring  required

  Domain Name to point to.

  PTR record content used for reverse DNS.

#### Response

- actionobject  required
