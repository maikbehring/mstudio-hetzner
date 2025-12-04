# Create an SSH key

**Source URL:** https://docs.hetzner.cloud/reference/cloud#ssh-keys-create-an-ssh-key

## Inhaltsverzeichnis

- [Create an SSH key](#create-an-ssh-key)
  - [HTTP Request](#http-request)
  - [Request](#request)
  - [Response](#response)

---

### Create an SSH key

Creates a new SSH key with the given `name` and `public_key`. Once an SSH key is created, it can be used in other calls such as creating Servers.

#### HTTP Request

`POST /ssh_keys`

#### Request

- namestring  required

  Name of the SSH key.
- public\_keystring  required

  Public key.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".

#### Response

- ssh\_keyobject  required
