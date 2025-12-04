# Create an RRSet

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-rrsets-create-an-rrset

## Inhaltsverzeichnis

- [Create an RRSet](#create-an-rrset)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Request](#request)
  - [Response](#response)

---

### Create an RRSet

Create an RRSet in the Zone.

Only applicable for Zones in primary mode.

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/rrsets`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- namestring  required

  Name of the RRSet.

  The name must be in lower case, and must not end with a dot or the Zone
  name. Names containing non-ASCII characters must be transcribed to
  Punycode representation with ACE prefix, e.g.
  `xn--4bi` (✉️).

  For the Zone apex, use `@`.
- typestring  required

  Allowed: `A` `AAAA` `CAA` `CNAME` `DS` `HINFO` `HTTPS` `MX` `NS` `PTR` `RP` `SOA` `SRV` `SVCB` `TLSA` `TXT`

  Type of the RRSet.
- ttlinteger   – nullable

  Time To Live (TTL) of the RRSet.

  Must be in between 60s and 2147483647s.

  If not set, the Zone's Default TTL is used.
- recordsarray of objects  required

  Records of the RRSet.

  Must not be empty and must only contain distinct record values.
  The order of records returned in responses is not guaranteed to be consistent.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".

#### Response

- rrsetobject  required
- actionobject  required
