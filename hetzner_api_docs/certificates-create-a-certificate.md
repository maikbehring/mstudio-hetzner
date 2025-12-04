# Create a Certificate

**Source URL:** https://docs.hetzner.cloud/reference/cloud#certificates-create-a-certificate

## Inhaltsverzeichnis

- [Create a Certificate](#create-a-certificate)
  - [HTTP Request](#http-request)
  - [Request](#request)
  - [Response](#response)

---

### Create a Certificate

Creates a new Certificate.

The default type **uploaded** allows for uploading your existing `certificate` and `private_key` in PEM format. You have to monitor its expiration date and handle renewal yourself.

In contrast, type **managed** requests a new Certificate from *Let's Encrypt* for the specified `domain_names`. Only domains managed by *Hetzner DNS* are supported. We handle renewal and timely alert the project owner via email if problems occur.

For type `managed` Certificates the `action` key of the response contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.

#### HTTP Request

`POST /certificates`

#### Request

- namestring  required

  Name of the Certificate.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- typestring

  Allowed: `uploaded` `managed`Default: `uploaded`

  Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate.
- certificatestring

  Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.
- private\_keystring

  Certificate key in PEM format. Required for type `uploaded` Certificates.
- domain\_namesarray of strings

  Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.

#### Response

- certificateobject  required
- actionobject   – nullable
