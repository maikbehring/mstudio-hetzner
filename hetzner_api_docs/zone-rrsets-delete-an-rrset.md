# Delete an RRSet

**Source URL:** https://docs.hetzner.cloud/reference/cloud#zone-rrsets-delete-an-rrset

## Inhaltsverzeichnis

- [Delete an RRSet](#delete-an-rrset)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Response](#response)

---

### Delete an RRSet

Deletes an RRSet from the Zone.

Only applicable for Zones in primary mode.

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`DELETE /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}`

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

#### Response

- actionobject  required
