# Get Metrics for a LoadBalancer

**Source URL:** https://docs.hetzner.cloud/reference/cloud#load-balancers-get-metrics-for-a-loadbalancer

## Inhaltsverzeichnis

- [Get Metrics for a LoadBalancer](#get-metrics-for-a-loadbalancer)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### Get Metrics for a LoadBalancer

You must specify the type of metric to get: `open_connections`, `connections_per_second`, `requests_per_second` or `bandwidth`. You can also specify more than one type by comma separation, e.g. `requests_per_second,bandwidth`.

Depending on the type you will get different time series data:

| Type | Timeseries | Unit | Description |
| --- | --- | --- | --- |
| open\_connections | open\_connections | number | Open connections |
| connections\_per\_second | connections\_per\_second | connections/s | Connections per second |
| requests\_per\_second | requests\_per\_second | requests/s | Requests per second |
| bandwidth | bandwidth.in | bytes/s | Ingress bandwidth |
|  | bandwidth.out | bytes/s | Egress bandwidth |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that 200 samples are returned.

We limit the number of samples to a maximum of 500 and will adjust the step parameter accordingly.

#### HTTP Request

`GET /load_balancers/{id}/metrics`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Query Parameters

- typearray of strings  required

  Allowed: `open_connections` `connections_per_second` `requests_per_second` `bandwidth`

  Type of metrics to get.
- startstring  required

  Start of period to get Metrics for (in ISO-8601 format).
- endstring  required

  End of period to get Metrics for (in ISO-8601 format).
- stepstring

  Resolution of results in seconds.

#### Response

- metricsobject  required
