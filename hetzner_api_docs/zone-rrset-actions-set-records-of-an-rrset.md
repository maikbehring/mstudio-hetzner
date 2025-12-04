# Set Records of an RRSet

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-rrset-actions-set-records-of-an-rrset

## Inhaltsverzeichnis

- [Set Records of an RRSet](#set-records-of-an-rrset)
  - [Call specific error codes](#call-specific-error-codes)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Set Records of an RRSet

Overwrites the resource records (RRs) of an existing RRSet in the Zone.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/set_records`

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

  Records to set in the RRSet.

  Must not be empty and must only contain distinct record values.

#### Response

- actionobject  required
