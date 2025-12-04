# Create a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#servers-create-a-server

## Inhaltsverzeichnis

- [Create a Server](#create-a-server)
  - [HTTP Request](#http-request)
  - [Request](#request)
  - [Call specific error codes](#call-specific-error-codes)
  - [Response](#response)

---

### Create a Server

Creates a new Server. Returns preliminary information about the Server as well as an Action that covers progress of creation.

#### HTTP Request

`POST /servers`

#### Request

Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).

For `server_type` you can either use the ID as listed in `/server_types` or its name.

For `image` you can either use the ID as listed in `/images` or its name.

If you want to create the Server in a Location, you must set `location` to the ID or name as listed in `/locations`. This is the recommended way. You can be even more specific by setting `datacenter` to the ID or name as listed in `/datacenters`. However we only recommend this if you want to assign a specific Primary IP to the Server which is located in the specified Data Center.

Some properties like `start_after_create` or `automount` will trigger Actions after the Server is created. Those Actions are listed in the `next_actions` field in the response.

For accessing your Server we strongly recommend to use SSH keys by passing the respective key IDs in `ssh_keys`. If you do not specify any `ssh_keys` we will generate a root password for you and return it in the response.

Please note that provided user-data is stored in our systems. While we take measures to protect it we highly recommend that you don’t use it to store passwords or other sensitive information.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `placement_error` | An error during the placement occurred |
| `primary_ip_assigned` | The specified Primary IP is already assigned to a server |
| `primary_ip_datacenter_mismatch` | The specified Primary IP is in a different datacenter |
| `primary_ip_version_mismatch` | The specified Primary IP has the wrong IP Version |

- namestring  required

  Name of the Server to create (must be unique per Project and a valid hostname as per RFC 1123).
- locationstring

  ID or name of Location to create Server in (must not be used together with datacenter).
- datacenterstring

  ID or name of Data Center to create Server in (must not be used together with location).
- server\_typestring  required

  ID or name of the Server type this Server should be created with.
- start\_after\_createboolean

  Default: `true`

  This automatically triggers a Power on a Server-Server Action after the creation is finished and is returned in the `next_actions` response object.
- imagestring  required

  ID or name of the Image the Server is created from.
- placement\_groupinteger (int64)

  ID of the Placement Group the Server should be in.
- ssh\_keysarray of strings

  SSH key IDs (`integer`) or names (`string`) which should be injected into the Server at creation time.
- volumesarray of integers (int64)

  Volume IDs which should be attached to the Server at the creation time. Volumes must be in the same Location.
- networksarray of integers (int64)

  Network IDs which should be attached to the Server private network interface at the creation time.
- firewallsarray of objects

  Firewalls which should be applied on the Server's public network interface at creation time.
- user\_datastring

  Cloud-Init user data to use during Server creation. This field is limited to 32KiB.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- automountboolean

  Auto-mount Volumes after attach.
- public\_netobject

  Public Network options.

#### Response

- serverobject  required
- actionobject  required
- next\_actionsarray of objects  required
- root\_passwordstring   – nullablerequired

  Root password when no SSH keys have been specified.
