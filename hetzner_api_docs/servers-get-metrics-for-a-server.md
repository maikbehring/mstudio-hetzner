# Get Metrics for a Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#servers-get-metrics-for-a-server

## Inhaltsverzeichnis

- [Get Metrics for a Server](#get-metrics-for-a-server)
  - [HTTP Request](#http-request)
  - [Path Parameters](#path-parameters)
  - [Query Parameters](#query-parameters)
  - [Response](#response)

---

### Get Metrics for a Server

Get Metrics for specified Server.

You must specify the type of metric to get: cpu, disk or network. You can also specify more than one type by comma separation, e.g. cpu,disk.

Depending on the type you will get different time series data

| Type | Timeseries | Unit | Description |
| --- | --- | --- | --- |
| cpu | cpu | percent | Percent CPU usage |
| disk | disk.0.iops.read | iop/s | Number of read IO operations per second |
|  | disk.0.iops.write | iop/s | Number of write IO operations per second |
|  | disk.0.bandwidth.read | bytes/s | Bytes read per second |
|  | disk.0.bandwidth.write | bytes/s | Bytes written per second |
| network | network.0.pps.in | packets/s | Public Network interface packets per second received |
|  | network.0.pps.out | packets/s | Public Network interface packets per second sent |
|  | network.0.bandwidth.in | bytes/s | Public Network interface bytes/s received |
|  | network.0.bandwidth.out | bytes/s | Public Network interface bytes/s sent |

Metrics are available for the last 30 days only.

If you do not provide the step argument we will automatically adjust it so that a maximum of 200 samples are returned.

We limit the number of samples returned to a maximum of 500 and will adjust the step parameter accordingly.

#### HTTP Request

`GET /servers/{id}/metrics`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Query Parameters

- typearray of strings  required

  Allowed: `cpu` `disk` `network`

  Type of metrics to get.
- startstring  required

  Start of period to get Metrics for (in ISO-8601 format).
- endstring  required

  End of period to get Metrics for (in ISO-8601 format).
- stepstring

  Resolution of results in seconds.

#### Response

- metricsobject  required
