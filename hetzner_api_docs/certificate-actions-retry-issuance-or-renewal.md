# Retry Issuance or Renewal

**Source URL:** https://docs.hetzner.cloud/reference/cloud#certificate-actions-retry-issuance-or-renewal

## Inhaltsverzeichnis

- [Retry Issuance or Renewal](#retry-issuance-or-renewal)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Retry Issuance or Renewal

Retry a failed Certificate issuance or renewal.

Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `caa_record_does_not_allow_ca` | CAA record does not allow certificate authority |
| `ca_dns_validation_failed` | Certificate Authority: DNS validation failed |
| `ca_too_many_authorizations_failed_recently` | Certificate Authority: Too many authorizations failed recently |
| `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
| `ca_too_many_duplicate_certificates` | Certificate Authority: Too many duplicate certificates |
| `could_not_verify_domain_delegated_to_zone` | Could not verify domain delegated to zone |
| `dns_zone_not_found` | DNS zone not found |
| `dns_zone_is_secondary_zone` | DNS zone is a secondary zone |

#### HTTP Request

`POST /certificates/{id}/actions/retry`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.

#### Response

- actionobject  required
