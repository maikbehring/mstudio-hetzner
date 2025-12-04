# Remove Records from an RRSet

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-rrset-actions-remove-records-from-an-rrset

## Inhaltsverzeichnis

- [Remove Records from an RRSet](#remove-records-from-an-rrset)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Remove Records from an RRSet

Removes resource records (RRs) from an existing RRSet in the Zone.

For convenience, the RRSet will be automatically deleted if it doesn't contain any RRs afterwards.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/remove_records`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.
- rr\_namestring  required

  Name of the RRSet.

  The name must be in lower case, and must not end with a dot or the Zone
  name. Names containing non-ASCII characters must be transcribed to
  Punycode representation with ACE prefix, e.g.
  `xn--4bi` (✉️).

  For the Zone apex, use `@`.
- rr\_typestring  required

  Allowed: `A` `AAAA` `CAA` `CNAME` `DS` `HINFO` `HTTPS` `MX` `NS` `PTR` `RP` `SOA` `SRV` `SVCB` `TLSA` `TXT`

  Type of the RRSet.

#### Request

- recordsarray of objects  required

  Records to remove from the RRSet.

  Must not be empty and must only contain distinct record values.

#### Response

- actionobject  required
