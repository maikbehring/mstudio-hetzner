# Get multiple Actions

**Source URL:** https://docs.hetzner.cloud/reference/cloud#actions-get-multiple-actions

## Inhaltsverzeichnis

- [Get multiple Actions](#get-multiple-actions)
  - [HTTP Request](#http-request)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### Get multiple Actions

Returns multiple Action objects specified by the `id` parameter.

**Note**: This endpoint previously allowed listing all actions in the project. This functionality was deprecated in July 2023 and removed on 30 January 2025.

- Announcement: https://docs.hetzner.cloud/changelog#2023-07-20-actions-list-endpoint-is-deprecated
- Removal: https://docs.hetzner.cloud/changelog#2025-01-30-listing-arbitrary-actions-in-the-actions-list-endpoint-is-removed

#### HTTP Request

`GET /actions`

#### Query Parameters

- idarray of integers (int64) required

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.

#### Response

- actionsarray of objects  required
