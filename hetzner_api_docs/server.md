# Server

**Source URL:** https://docs.hetzner.cloud/reference/cloud#server

## Inhaltsverzeichnis

- [Hetzner Cloud API](#hetzner-cloud-api)
  - [Introduction](#introduction)
    - [Open source credits](#open-source-credits)
  - [Getting Started](#getting-started)
      - [Example Request](#example-request)
      - [Example Response](#example-response)
  - [Authentication](#authentication)
      - [Example Authorization header](#example-authorization-header)
  - [Errors](#errors)
    - [Error Codes](#error-codes)
      - [Example response](#example-response)
      - [invalid\_input](#invalid_input)
      - [uniqueness\_error](#uniqueness_error)
      - [resource\_limit\_exceeded](#resource_limit_exceeded)
      - [deprecated\_api\_endpoint](#deprecated_api_endpoint)
  - [Labels](#labels)
      - [Example Labels](#example-labels)
  - [Label Selector](#label-selector)
    - [Examples](#examples)
  - [Pagination](#pagination)
      - [Example Pagination](#example-pagination)
      - [Example Pagination Link header](#example-pagination-link-header)
  - [Rate Limiting](#rate-limiting)
  - [Server Metadata](#server-metadata)
      - [Example: Summary](#example-summary)
      - [Example: Hostname](#example-hostname)
      - [Example: Instance ID](#example-instance-id)
      - [Example: Public IPv4](#example-public-ipv4)
      - [Example: Private Networks](#example-private-networks)
      - [Example: Availability Zone](#example-availability-zone)
      - [Example: Region](#example-region)
  - [Sorting](#sorting)
      - [Example: Sorting](#example-sorting)
  - [Deprecation Notices](#deprecation-notices)
  - [Actions](#actions)
    - [Get multiple Actions](#get-multiple-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Security](#security)
  - [Certificates](#certificates)
    - [List Certificates](#list-certificates)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Certificate](#create-a-certificate)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Certificate](#get-a-certificate)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Certificate](#update-a-certificate)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Certificate](#delete-a-certificate)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Certificate Actions](#certificate-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Certificate](#list-actions-for-a-certificate)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Retry Issuance or Renewal](#retry-issuance-or-renewal)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Certificate](#get-an-action-for-a-certificate)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [SSH Keys](#ssh-keys)
    - [List SSH keys](#list-ssh-keys)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create an SSH key](#create-an-ssh-key)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a SSH key](#get-a-ssh-key)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update an SSH key](#update-an-ssh-key)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete an SSH key](#delete-an-ssh-key)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Locations](#locations)
    - [List Locations](#list-locations)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Location](#get-a-location)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Data Centers](#data-centers)
    - [List Data Centers](#list-data-centers)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Data Center](#get-a-data-center)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Firewalls](#firewalls)
    - [List Firewalls](#list-firewalls)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Firewall](#create-a-firewall)
      - [Operation specific errors](#operation-specific-errors)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Firewall](#get-a-firewall)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Firewall](#update-a-firewall)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Firewall](#delete-a-firewall)
      - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Firewall Actions](#firewall-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Firewall](#list-actions-for-a-firewall)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Apply to Resources](#apply-to-resources)
      - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Remove from Resources](#remove-from-resources)
      - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Set Rules](#set-rules)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Firewall](#get-an-action-for-a-firewall)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Floating IPs](#floating-ips)
    - [List Floating IPs](#list-floating-ips)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Floating IP](#create-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Floating IP](#get-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Floating IP](#update-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Floating IP](#delete-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Floating IP Actions](#floating-ip-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Floating IP](#list-actions-for-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Assign a Floating IP to a Server](#assign-a-floating-ip-to-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change reverse DNS records for a Floating IP](#change-reverse-dns-records-for-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Floating IP Protection](#change-floating-ip-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Unassign a Floating IP](#unassign-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Floating IP](#get-an-action-for-a-floating-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Servers](#servers)
    - [List Servers](#list-servers)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Server](#create-a-server)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Call specific error codes](#call-specific-error-codes)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Server](#get-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Server](#update-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Server](#delete-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get Metrics for a Server](#get-metrics-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Images](#images)
    - [System Images](#system-images)
    - [Snapshot Images](#snapshot-images)
    - [Backup Images](#backup-images)
    - [App Images](#app-images)
    - [List Images](#list-images)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Image](#get-an-image)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update an Image](#update-an-image)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete an Image](#delete-an-image)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Image Actions](#image-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for an Image](#list-actions-for-an-image)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Image Protection](#change-image-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for an Image](#get-an-action-for-an-image)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [ISOs](#isos)
    - [List ISOs](#list-isos)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an ISO](#get-an-iso)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Placement Groups](#placement-groups)
    - [List Placement Groups](#list-placement-groups)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a PlacementGroup](#create-a-placementgroup)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a PlacementGroup](#get-a-placementgroup)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a PlacementGroup](#update-a-placementgroup)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a PlacementGroup](#delete-a-placementgroup)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Primary IPs](#primary-ips)
    - [List Primary IPs](#list-primary-ips)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Primary IP](#create-a-primary-ip)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Primary IP](#get-a-primary-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Primary IP](#update-a-primary-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Primary IP](#delete-a-primary-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Primary IP Actions](#primary-ip-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Assign a Primary IP to a resource](#assign-a-primary-ip-to-a-resource)
      - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change reverse DNS records for a Primary IP](#change-reverse-dns-records-for-a-primary-ip)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Primary IP Protection](#change-primary-ip-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Unassign a Primary IP from a resource](#unassign-a-primary-ip-from-a-resource)
      - [Error Codes specific to this Call](#error-codes-specific-to-this-call)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Server Actions](#server-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Server](#list-actions-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Add a Server to a Placement Group](#add-a-server-to-a-placement-group)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Attach an ISO to a Server](#attach-an-iso-to-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Attach a Server to a Network](#attach-a-server-to-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change alias IPs of a Network](#change-alias-ips-of-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change reverse DNS entry for this Server](#change-reverse-dns-entry-for-this-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Server Protection](#change-server-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change the Type of a Server](#change-the-type-of-a-server)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create Image from a Server](#create-image-from-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Detach a Server from a Network](#detach-a-server-from-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Detach an ISO from a Server](#detach-an-iso-from-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Disable Backups for a Server](#disable-backups-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Disable Rescue Mode for a Server](#disable-rescue-mode-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Enable and Configure Backups for a Server](#enable-and-configure-backups-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Enable Rescue Mode for a Server](#enable-rescue-mode-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Power off a Server](#power-off-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Power on a Server](#power-on-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Soft-reboot a Server](#soft-reboot-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Rebuild a Server from an Image](#rebuild-a-server-from-an-image)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Remove from Placement Group](#remove-from-placement-group)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Request Console for a Server](#request-console-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Reset a Server](#reset-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Reset root Password of a Server](#reset-root-password-of-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Shutdown a Server](#shutdown-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Server](#get-an-action-for-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Server Types](#server-types)
    - [List Server Types](#list-server-types)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Server Type](#get-a-server-type)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Load Balancers](#load-balancers)
    - [List Load Balancers](#list-load-balancers)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Load Balancer](#create-a-load-balancer)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Load Balancer](#get-a-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Load Balancer](#update-a-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Load Balancer](#delete-a-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
    - [Get Metrics for a LoadBalancer](#get-metrics-for-a-loadbalancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Load Balancer Actions](#load-balancer-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Load Balancer](#list-actions-for-a-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Add Service](#add-service)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Add Target](#add-target)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Attach a Load Balancer to a Network](#attach-a-load-balancer-to-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Algorithm](#change-algorithm)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change reverse DNS entry for this Load Balancer](#change-reverse-dns-entry-for-this-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Load Balancer Protection](#change-load-balancer-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change the Type of a Load Balancer](#change-the-type-of-a-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete Service](#delete-service)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Detach a Load Balancer from a Network](#detach-a-load-balancer-from-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Disable the public interface of a Load Balancer](#disable-the-public-interface-of-a-load-balancer)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Enable the public interface of a Load Balancer](#enable-the-public-interface-of-a-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Remove Target](#remove-target)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update Service](#update-service)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Load Balancer](#get-an-action-for-a-load-balancer)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Load Balancer Types](#load-balancer-types)
    - [List Load Balancer Types](#list-load-balancer-types)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Load Balancer Type](#get-a-load-balancer-type)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Networks](#networks)
    - [Subnets](#subnets)
    - [Network Zones](#network-zones)
    - [IP address management](#ip-address-management)
    - [Coupling Dedicated Servers](#coupling-dedicated-servers)
    - [Routes](#routes)
    - [List Networks](#list-networks)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Network](#create-a-network)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Network](#get-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Network](#update-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Network](#delete-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Network Actions](#network-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Network](#list-actions-for-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Add a route to a Network](#add-a-route-to-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Add a subnet to a Network](#add-a-subnet-to-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change IP range of a Network](#change-ip-range-of-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Network Protection](#change-network-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a route from a Network](#delete-a-route-from-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a subnet from a Network](#delete-a-subnet-from-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Network](#get-an-action-for-a-network)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Billing](#billing)
  - [Pricing](#pricing)
    - [Get all prices](#get-all-prices)
      - [HTTP Request](#http-request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Volumes](#volumes)
    - [List Volumes](#list-volumes)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Volume](#create-a-volume)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Volume](#get-a-volume)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Volume](#update-a-volume)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Volume](#delete-a-volume)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
  - [Volume Actions](#volume-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Volume](#list-actions-for-a-volume)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Attach Volume to a Server](#attach-volume-to-a-server)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change Volume Protection](#change-volume-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Detach Volume](#detach-volume)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Resize Volume](#resize-volume)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Volume](#get-an-action-for-a-volume)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [DNS](#dns)
  - [Zones](#zones)
    - [Zone Modes](#zone-modes)
    - [SOA Serial](#soa-serial)
    - [Zone file import](#zone-file-import)
    - [List Zones](#list-zones)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create a Zone](#create-a-zone)
      - [HTTP Request](#http-request)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get a Zone](#get-a-zone)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update a Zone](#update-a-zone)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete a Zone](#delete-a-zone)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Export a Zone file](#export-a-zone-file)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Zone Actions](#zone-actions)
    - [List Actions](#list-actions)
      - [HTTP Request](#http-request)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action](#get-an-action)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [List Actions for a Zone](#list-actions-for-a-zone)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an Action for a Zone](#get-an-action-for-a-zone)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change a Zone's Primary Nameservers](#change-a-zones-primary-nameservers)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change a Zone's Protection](#change-a-zones-protection)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change a Zone's Default TTL](#change-a-zones-default-ttl)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Import a Zone file](#import-a-zone-file)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Zone RRSets](#zone-rrsets)
    - [List RRSets](#list-rrsets)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Query Parameters](#query-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Create an RRSet](#create-an-rrset)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Get an RRSet](#get-an-rrset)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update an RRSet](#update-an-rrset)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Delete an RRSet](#delete-an-rrset)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Response](#response)
      - [Example request](#example-request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
  - [Zone RRSet Actions](#zone-rrset-actions)
    - [Change an RRSet's Protection](#change-an-rrsets-protection)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Change an RRSet's TTL](#change-an-rrsets-ttl)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Set Records of an RRSet](#set-records-of-an-rrset)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Add Records to an RRSet](#add-records-to-an-rrset)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Remove Records from an RRSet](#remove-records-from-an-rrset)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)
    - [Update Records of an RRSet](#update-records-of-an-rrset)
      - [Call specific error codes](#call-specific-error-codes)
      - [HTTP Request](#http-request)
      - [Path Parameters](#path-parameters)
      - [Request](#request)
      - [Response](#response)
      - [Example request](#example-request)
      - [Request](#request)
      - [Response headers](#response-headers)
      - [Response sample](#response-sample)

---

Hetzner Cloud API

api.hetzner.cloud

# Hetzner Cloud API

This is the official documentation for the Hetzner Cloud API.

## Introduction

The Hetzner Cloud API operates over HTTPS and uses JSON as its data format. The API is a RESTful API and utilizes HTTP methods and HTTP status codes to specify requests and responses.

As an alternative to working directly with our API you may also consider to use:

- Our CLI program hcloud
- Our library for Go
- Our library for Python

You can find even more libraries, tools and integrations on our Awesome List on GitHub.

### Open source credits

If you are developing an open-source project that supports or intends to add support for Hetzner APIs, you may be eligible for a free one-time credit of up to € 50 / $ 50 on your account. Please contact us via the support page on your Hetzner Console and let us know the following:

- The name of the project you are working on
- A short description of the project
- Link to the project website or repo where the project is hosted
- Affiliation with / role in the project (e.g. project maintainer)
- Link to some other open-source work you have already done (if you have done so)

**Note:** We only consider rewards for projects that provide Hetzner-specific functionality or integrations. For example, our Object Storage exposes a standard S3 API without any Hetzner-specific extensions. Projects that focus solely on generic S3 capabilities (e.g., general S3 clients or SDKs) are not Hetzner-specific and are therefore not eligible for Hetzner Rewards.

## Getting Started

To get started using the API you first need an API token. Sign in into the Hetzner Console choose a Project, go to `Security` → `API Tokens`, and generate a new token. Make sure to copy the token because it won’t be shown to you again. A token is bound to a Project, to interact with the API of another Project you have to create a new token inside the Project. Let’s say your new token is `LRK9DAWQ1ZAEFSrCNEEzLCUwhYX1U3g7wMg4dTlkkDC96fyDuyJ39nVbVjCKSDfj`.

You’re now ready to do your first request against the API. To get a list of all Servers in your Project, issue the example request on the right side using curl.

Make sure to replace the token in the example command with the token you have just created. Since your Project probably does not contain any Servers yet, the example response will look like the response on the right side. We will almost always provide a resource root like `servers` inside the example response. A response can also contain a `meta` object with information like Pagination.

#### Example Request

```text
curl -H "Authorization: Bearer LRK9DAWQ1ZAEFSrCNEEzLCUwhYX1U3g7wMg4dTlkkDC96fyDuyJ39nVbVjCKSDfj" \
  https://api.hetzner.cloud/v1/servers
```

#### Example Response

```text
{
  "servers": [],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 0
    }
  }
}
```

## Authentication

All requests to the Hetzner Cloud API must be authenticated via a API token. Include your secret API token in every request you send to the API with the `Authorization` HTTP header.

To create a new API token for your Project, switch into the Hetzner Console choose a Project, go to `Security` → `API Tokens`, and generate a new token.

#### Example Authorization header

```text
Authorization: Bearer LRK9DAWQ1ZAEFSrCNEEzLCUwhYX1U3g7wMg4dTlkkDC96fyDuyJ39nVbVjCKSDfj
```

## Errors

Errors are indicated by HTTP status codes. Further, the response of the request which generated the error contains an error code, an error message, and, optionally, error details. The schema of the error details object depends on the error code.

The error response contains the following keys:

| Keys | Meaning |
| --- | --- |
| `code` | Short string indicating the type of error (machine-parsable) |
| `message` | Textual description on what has gone wrong |
| `details` | An object providing for details on the error (schema depends on code) |

### Error Codes

| Code | Description |
| --- | --- |
| `forbidden` | Insufficient permissions for this request |
| `unauthorized` | Request was made with an invalid or unknown token |
| `invalid_input` | Error while parsing or processing the input |
| `json_error` | Invalid JSON input in your request |
| `locked` | The item you are trying to access is locked (there is already an Action running) |
| `not_found` | Entity not found |
| `rate_limit_exceeded` | Error when sending too many requests |
| `resource_limit_exceeded` | Error when exceeding the maximum quantity of a resource for an account |
| `resource_unavailable` | The requested resource is currently unavailable (e.g. not available for order) |
| `server_error` | Error within the API backend |
| `service_error` | Error within a service |
| `uniqueness_error` | One or more of the objects fields must be unique |
| `protected` | The Action you are trying to start is protected for this resource |
| `maintenance` | Cannot perform operation due to maintenance |
| `conflict` | The resource has changed during the request, please retry |
| `unsupported_error` | The corresponding resource does not support the Action |
| `token_readonly` | The token is only allowed to perform GET requests |
| `unavailable` | A service or product is currently not available |
| `deprecated_api_endpoint` | The request can not be answered because the API functionality was removed |
| `timeout` | The request could not be answered in time, please retry |
| `method_not_allowed` | The request method is not allowed |

#### Example response

```text
{
  "error": {
    "code": "invalid_input",
    "message": "invalid input in field 'broken_field': is too long",
    "details": {
      "fields": [
        {
          "name": "broken_field",
          "messages": ["is too long"]
        }
      ]
    }
  }
}
```

#### invalid\_input

```text
{
  "error": {
    "code": "invalid_input",
    "message": "invalid input in field 'broken_field': is too long",
    "details": {
      "fields": [
        {
          "name": "broken_field",
          "messages": ["is too long"]
        }
      ]
    }
  }
}
```

#### uniqueness\_error

```text
{
  "error": {
    "code": "uniqueness_error",
    "message": "SSH key with the same fingerprint already exists",
    "details": {
      "fields": [
        {
          "name": "public_key"
        }
      ]
    }
  }
}
```

#### resource\_limit\_exceeded

```text
{
  "error": {
    "code": "resource_limit_exceeded",
    "message": "project limit exceeded",
    "details": {
      "limits": [
        {
          "name": "project_limit"
        }
      ]
    }
  }
}
```

#### deprecated\_api\_endpoint

```text
{
  "error": {
    "code": "deprecated_api_endpoint",
    "message": "API functionality was removed",
    "details": {
      "announcement": "https://docs.hetzner.cloud/changelog#2023-07-20-foo-endpoint-is-deprecated"
    }
  }
}
```

## Labels

Labels are `key/value` pairs that can be attached to all resources.

Valid label keys have two segments: an optional prefix and name, separated by a slash (`/`). The name segment is required and must be a string of 63 characters or less, beginning and ending with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between. The prefix is optional. If specified, the prefix must be a DNS subdomain: a series of DNS labels separated by dots (`.`), not longer than 253 characters in total, followed by a slash (`/`).

Valid label values must be a string of 63 characters or less and must be empty or begin and end with an alphanumeric character (`[a-z0-9A-Z]`) with dashes (`-`), underscores (`_`), dots (`.`), and alphanumerics between.

The `hetzner.cloud/` prefix is reserved and cannot be used.

#### Example Labels

```text
{
  "labels": {
    "environment": "development",
    "service": "backend",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

## Label Selector

For resources with labels, you can filter resources by their labels using the label selector query language.

| Expression | Meaning |
| --- | --- |
| `k==v` / `k=v` | Value of key `k` does equal value `v` |
| `k!=v` | Value of key `k` does not equal value `v` |
| `k` | Key `k` is present |
| `!k` | Key `k` is not present |
| `k in (v1,v2,v3)` | Value of key `k` is `v1`, `v2`, or `v3` |
| `k notin (v1,v2,v3)` | Value of key `k` is neither `v1`, nor `v2`, nor `v3` |
| `k1==v,!k2` | Value of key `k1` is `v` and key `k2` is not present |

### Examples

- Returns all resources that have a `env=production` label and that don't have a `type=database` label:

  `env=production,type!=database`
- Returns all resources that have a `env=testing` or `env=staging` label:

  `env in (testing,staging)`
- Returns all resources that don't have a `type` label:

  `!type`

## Pagination

Responses which return multiple items support pagination. If they do support pagination, it can be controlled with following query string parameters:

- A `page` parameter specifies the page to fetch. The number of the first page is 1.
- A `per_page` parameter specifies the number of items returned per page. The default value is 25, the maximum value is 50 except otherwise specified in the documentation.

Responses contain a `Link` header with pagination information.

Additionally, if the response body is JSON and the root object is an object, that object has a `pagination` object inside the `meta` object with pagination information:

The keys `previous_page`, `next_page`, `last_page`, and `total_entries` may be `null` when on the first page, last page, or when the total number of entries is unknown.

Line breaks have been added for display purposes only and responses may only contain some of the above `rel` values.

#### Example Pagination

```text
{
    "servers": [...],
    "meta": {
        "pagination": {
            "page": 2,
            "per_page": 25,
            "previous_page": 1,
            "next_page": 3,
            "last_page": 4,
            "total_entries": 100
        }
    }
}
```

#### Example Pagination Link header

```text
Link: <https://api.hetzner.cloud/v1/actions?page=2&per_page=5>; rel="prev",
      <https://api.hetzner.cloud/v1/actions?page=4&per_page=5>; rel="next",
      <https://api.hetzner.cloud/v1/actions?page=6&per_page=5>; rel="last"
```

## Rate Limiting

All requests, whether they are authenticated or not, are subject to rate limiting. If you have reached your limit, your requests will be handled with a `429 Too Many Requests` error. Burst requests are allowed. Responses contain several headers which provide information about your current rate limit status.

- The `RateLimit-Limit` header contains the total number of requests you can perform per hour.
- The `RateLimit-Remaining` header contains the number of requests remaining in the current rate limit time frame.
- The `RateLimit-Reset` header contains a UNIX timestamp of the point in time when your rate limit will have recovered, and you will have the full number of requests available again.

The default limit is 3600 requests per hour and per Project. The number of remaining requests increases gradually. For example, when your limit is 3600 requests per hour, the number of remaining requests will increase by 1 every second.

## Server Metadata

Your Server can discover metadata about itself by doing a HTTP request to specific URLs. The following data is available:

| Data | Format | Contents |
| --- | --- | --- |
| hostname | text | Name of the Server as set in the api |
| instance-id | number | ID of the server |
| public-ipv4 | text | Primary public IPv4 address |
| private-networks | yaml | Details about the private networks the Server is attached to |
| availability-zone | text | Name of the availability zone that Server runs in |
| region | text | Network zone, e.g. eu-central |

#### Example: Summary

```text
$ curl http://169.254.169.254/hetzner/v1/metadata
```

####

```text
availability-zone: hel1-dc2
hostname: my-server
instance-id: 42
public-ipv4: 1.2.3.4
region: eu-central
```

#### Example: Hostname

```text
$ curl http://169.254.169.254/hetzner/v1/metadata/hostname
my-server
```

#### Example: Instance ID

```text
$ curl http://169.254.169.254/hetzner/v1/metadata/instance-id
42
```

#### Example: Public IPv4

```text
$ curl http://169.254.169.254/hetzner/v1/metadata/public-ipv4
1.2.3.4
```

#### Example: Private Networks

```text
$ curl http://169.254.169.254/hetzner/v1/metadata/private-networks
```

####

```text
- ip: 10.0.0.2
  alias_ips: [10.0.0.3, 10.0.0.4]
  interface_num: 1
  mac_address: 86:00:00:2a:7d:e0
  network_id: 1234
  network_name: nw-test1
  network: 10.0.0.0/8
  subnet: 10.0.0.0/24
  gateway: 10.0.0.1
- ip: 192.168.0.2
  alias_ips: []
  interface_num: 2
  mac_address: 86:00:00:2a:7d:e1
  network_id: 4321
  network_name: nw-test2
  network: 192.168.0.0/16
  subnet: 192.168.0.0/24
  gateway: 192.168.0.1
```

#### Example: Availability Zone

```text
$ curl http://169.254.169.254/hetzner/v1/metadata/availability-zone
hel1-dc2
```

#### Example: Region

```text
$ curl http://169.254.169.254/hetzner/v1/metadata/region
eu-central
```

## Sorting

Some responses which return multiple items support sorting. If they do support sorting the documentation states which fields can be used for sorting. You specify sorting with the `sort` query string parameter. You can sort by multiple fields. You can set the sort direction by appending `:asc` or `:desc` to the field name. By default, ascending sorting is used.

#### Example: Sorting

```text
https://api.hetzner.cloud/v1/actions?sort=status:asc
https://api.hetzner.cloud/v1/actions?sort=status:desc
https://api.hetzner.cloud/v1/actions?sort=status:asc&sort=command:desc
```

## Deprecation Notices

You can find all announced deprecations in our Changelog.

## Actions

Actions show the results and progress of asynchronous requests to the API.

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

#### Example request

cURLGo

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/actions?id=$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ]
}
```

### Get an Action

Returns a specific Action object.

#### HTTP Request

`GET /actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## Security

## Certificates

TLS/SSL Certificates prove the identity of a Server and are used to encrypt client traffic.

### List Certificates

Returns all Certificate objects.

#### HTTP Request

`GET /certificates`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- typearray of strings

  Allowed: `uploaded` `managed`

  Filter resources by type. Can be used multiple times. The response will only
  contain the resources with the specified type.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- certificatesarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "certificates": [
    {
      "id": 897,
      "name": "my website cert",
      "labels": {
        "key": "value"
      },
      "type": "uploaded",
      "certificate": "-----BEGIN CERTIFICATE-----\n...",
      "created": "2019-01-08T12:10:00+00:00",
      "not_valid_before": "2019-01-08T10:00:00+00:00",
      "not_valid_after": "2019-07-08T09:59:59+00:00",
      "domain_names": [
        "example.com",
        "webmail.example.com",
        "www.example.com"
      ],
      "fingerprint": "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f",
      "status": null,
      "used_by": [
        {
          "id": 4711,
          "type": "load_balancer"
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

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

#### Example request

cURL (uploaded)cURL (managed)Go (managed)Go (uploaded)Python (managed)Python (uploaded)CLI (managed)CLI (uploaded)

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my website cert","type":"uploaded","certificate":"-----BEGIN CERTIFICATE-----\n...","private_key":"-----BEGIN PRIVATE KEY-----\n..."}' \
	"https://api.hetzner.cloud/v1/certificates"
```

#### Request

uploadedmanaged

```text
{
  "name": "my website cert",
  "type": "uploaded",
  "certificate": "-----BEGIN CERTIFICATE-----\n...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n..."
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

uploadedmanaged

```text
{
  "certificate": {
    "id": 897,
    "name": "my website cert",
    "labels": {
      "key": "value"
    },
    "type": "uploaded",
    "certificate": "-----BEGIN CERTIFICATE-----\n...",
    "created": "2019-01-08T12:10:00+00:00",
    "not_valid_before": "2019-01-08T10:00:00+00:00",
    "not_valid_after": "2019-07-08T09:59:59+00:00",
    "domain_names": [
      "example.com",
      "webmail.example.com",
      "www.example.com"
    ],
    "fingerprint": "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f",
    "status": null,
    "used_by": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ]
  },
  "action": null
}
```

### Get a Certificate

Gets a specific Certificate object.

#### HTTP Request

`GET /certificates/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.

#### Response

- certificateobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "certificate": {
    "id": 897,
    "name": "my website cert",
    "labels": {
      "key": "value"
    },
    "type": "uploaded",
    "certificate": "-----BEGIN CERTIFICATE-----\n...",
    "created": "2019-01-08T12:10:00+00:00",
    "not_valid_before": "2019-01-08T10:00:00+00:00",
    "not_valid_after": "2019-07-08T09:59:59+00:00",
    "domain_names": [
      "example.com",
      "webmail.example.com",
      "www.example.com"
    ],
    "fingerprint": "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f",
    "status": null,
    "used_by": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ]
  }
}
```

### Update a Certificate

Updates the Certificate properties.

Note: if the Certificate object changes during the request, the response will be a “conflict” error.

#### HTTP Request

`PUT /certificates/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.

#### Request

- namestring

  New Certificate name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- certificateobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my website cert","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/certificates/$ID"
```

#### Request

```text
{
  "name": "my website cert",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "certificate": {
    "id": 897,
    "name": "my website cert",
    "labels": {
      "key": "value"
    },
    "type": "uploaded",
    "certificate": "-----BEGIN CERTIFICATE-----\n...",
    "created": "2019-01-08T12:10:00+00:00",
    "not_valid_before": "2019-01-08T10:00:00+00:00",
    "not_valid_after": "2019-07-08T09:59:59+00:00",
    "domain_names": [
      "example.com",
      "webmail.example.com",
      "www.example.com"
    ],
    "fingerprint": "03:c7:55:9b:2a:d1:04:17:09:f6:d0:7f:18:34:63:d4:3e:5f",
    "status": null,
    "used_by": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ]
  }
}
```

### Delete a Certificate

Deletes a Certificate.

#### HTTP Request

`DELETE /certificates/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates/$ID"
```

#### Response headers

```text
Status: 204
```

## Certificate Actions

### List Actions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.

#### HTTP Request

`GET /certificates/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a specific Action object.

#### HTTP Request

`GET /certificates/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Certificate

Returns all Action objects for a Certificate. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

Only type `managed` Certificates can have Actions. For type `uploaded` Certificates the `actions` key will always contain an empty array.

#### HTTP Request

`GET /certificates/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 14,
      "command": "issue_certificate",
      "status": "success",
      "progress": 100,
      "started": "2021-01-30T23:55:00+00:00",
      "finished": "2021-01-30T23:57:00+00:00",
      "resources": [
        {
          "id": 896,
          "type": "certificate"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Retry Issuance or Renewal

Retry a failed Certificate issuance or renewal.

Only applicable if the type of the Certificate is `managed` and the issuance or renewal status is `failed`.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `caa_record_does_not_allow_ca` | CAA record does not allow certificate authority |
| `ca_dns_validation_failed` | Certificate Authority: DNS validation failed |
| `ca_too_many_authorizations_failed_recently` | Certificate Authority: Too many authorizations failed recently |
| `ca_too_many_certificates_issued_for_registered_domain` | Certificate Authority: Too many certificates issued for registered domain |
| `ca_too_many_duplicate_certificates` | Certificate Authority: Too many duplicate certificates |
| `could_not_verify_domain_delegated_to_zone` | Could not verify domain delegated to zone |
| `dns_zone_not_found` | DNS zone not found |
| `dns_zone_is_secondary_zone` | DNS zone is a secondary zone |

#### HTTP Request

`POST /certificates/{id}/actions/retry`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates/$ID/actions/retry"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 14,
    "command": "issue_certificate",
    "status": "success",
    "progress": 100,
    "started": "2021-01-30T23:55:00+00:00",
    "finished": "2021-01-30T23:57:00+00:00",
    "resources": [
      {
        "id": 896,
        "type": "certificate"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get an Action for a Certificate

Returns a specific Action for a Certificate. Only type `managed` Certificates have Actions.

#### HTTP Request

`GET /certificates/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Certificate.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/certificates/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 14,
    "command": "issue_certificate",
    "status": "success",
    "progress": 100,
    "started": "2021-01-30T23:55:00+00:00",
    "finished": "2021-01-30T23:57:00+00:00",
    "resources": [
      {
        "id": 896,
        "type": "certificate"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## SSH Keys

SSH keys are public keys you provide to the cloud system. They can be injected into Servers at creation time. We highly recommend that you use keys instead of passwords to manage your Servers.

### List SSH keys

Returns all SSH key objects.

#### HTTP Request

`GET /ssh_keys`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- fingerprintstring

  Can be used to filter SSH keys by their fingerprint. The response will only contain the SSH key matching the specified fingerprint.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- ssh\_keysarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/ssh_keys"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "ssh_keys": [
    {
      "id": 42,
      "name": "my-resource",
      "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
      "public_key": "ssh-rsa AAAjjk76kgf...Xt",
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "created": "2016-01-30T23:55:00+00:00"
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"My ssh key","public_key":"ssh-rsa AAAjjk76kgf...Xt","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/ssh_keys"
```

#### Request

```text
{
  "name": "My ssh key",
  "public_key": "ssh-rsa AAAjjk76kgf...Xt",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "ssh_key": {
    "id": 42,
    "name": "my-resource",
    "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
    "public_key": "ssh-rsa AAAjjk76kgf...Xt",
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00"
  }
}
```

### Get a SSH key

Returns a specific SSH key object.

#### HTTP Request

`GET /ssh_keys/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the SSH Key.

#### Response

- ssh\_keyobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/ssh_keys/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "ssh_key": {
    "id": 42,
    "name": "my-resource",
    "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
    "public_key": "ssh-rsa AAAjjk76kgf...Xt",
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00"
  }
}
```

### Update an SSH key

Updates an SSH key. You can update an SSH key name and an SSH key labels.

#### HTTP Request

`PUT /ssh_keys/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the SSH Key.

#### Request

- namestring

  New name Name to set.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- ssh\_keyobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"My ssh key","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/ssh_keys/$ID"
```

#### Request

```text
{
  "name": "My ssh key",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "ssh_key": {
    "id": 2323,
    "name": "My ssh key",
    "fingerprint": "b7:2f:30:a0:2f:6c:58:6c:21:04:58:61:ba:06:3b:2f",
    "public_key": "ssh-rsa AAAjjk76kgf...Xt",
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00"
  }
}
```

### Delete an SSH key

Deletes an SSH key. It cannot be used anymore.

#### HTTP Request

`DELETE /ssh_keys/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the SSH Key.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/ssh_keys/$ID"
```

#### Response headers

```text
Status: 204
```

## Locations

Datacenters are organized by Locations. Datacenters in the same Location are connected with very low latency links.

### List Locations

Returns all Locations.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /locations`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- locationsarray of objects  required

  List of Locations.
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/locations"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "locations": [
    {
      "id": 42,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get a Location

Returns a Location.

#### HTTP Request

`GET /locations/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Location.

#### Response

- locationobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/locations/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "location": {
    "id": 42,
    "name": "fsn1",
    "description": "Falkenstein DC Park 1",
    "country": "DE",
    "city": "Falkenstein",
    "latitude": 50.47612,
    "longitude": 12.370071,
    "network_zone": "eu-central"
  }
}
```

## Data Centers

Each Datacenter represents a *virtual* Datacenter which is made up of possible many physical Datacenters where Servers are hosted.

See the Hetzner Locations Docs for more details about Datacenters.

### List Data Centers

Returns all Data Centers.

#### HTTP Request

`GET /datacenters`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- datacentersarray of objects  required

  List of Data Centers.
- recommendationinteger (int64) required

  Recommended Data Center for creating new resources.
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/datacenters"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "datacenters": [
    {
      "id": 42,
      "name": "fsn1-dc8",
      "description": "Falkenstein DC Park 8",
      "location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "server_types": {
        "supported": [
          1,
          2,
          3
        ],
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ]
      }
    }
  ],
  "recommendation": 1,
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get a Data Center

Returns a single Data Center.

#### HTTP Request

`GET /datacenters/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Data Center.

#### Response

- datacenterobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/datacenters/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "datacenter": {
    "id": 42,
    "name": "fsn1-dc8",
    "description": "Falkenstein DC Park 8",
    "location": {
      "id": 42,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "server_types": {
      "supported": [
        1,
        2,
        3
      ],
      "available": [
        1,
        2,
        3
      ],
      "available_for_migration": [
        1,
        2,
        3
      ]
    }
  }
}
```

## Firewalls

Firewalls can limit the network access to or from your resources.

- When applying a firewall with no `in` rule all inbound traffic will be dropped. The default for `in` is `DROP`.
- When applying a firewall with no `out` rule all outbound traffic will be accepted. The default for `out` is `ACCEPT`.

### List Firewalls

Returns all Firewalls.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /firewalls`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- firewallsarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/firewalls"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "firewalls": [
    {
      "id": 42,
      "name": "new-name",
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "created": "2016-01-30T23:55:00+00:00",
      "rules": [
        {
          "description": null,
          "direction": "in",
          "source_ips": [
            "192.0.2.2/32",
            "192.0.2.0/24",
            "2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"
          ],
          "destination_ips": [],
          "protocol": "tcp",
          "port": "80"
        }
      ],
      "applied_to": [
        {
          "type": "server",
          "server": {
            "id": 42
          },
          "label_selector": {
            "selector": "env=prod"
          },
          "applied_to_resources": [
            {
              "type": "server",
              "server": {
                "id": 42
              }
            }
          ]
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Create a Firewall

Create a Firewall.

#### Operation specific errors

| Status Code | Error Code | Description |
| --- | --- | --- |
| `422` | `server_already_added` | The Server was applied more than once. |
| `422` | `incompatible_network_type` | The resources network type is not supported by Firewalls. |
| `422` | `firewall_resource_not_found` | The resource the Firewall should be attached to was not found. |

#### HTTP Request

`POST /firewalls`

#### Request

- namestring  required

  Name of the Firewall.

  Limited to a maximum of 128 characters.

  Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- rulesarray of objects

  Array of rules.

  Rules are limited to 50 entries per Firewall and 500 effective rules.
- apply\_toarray of objects

  Resources to apply the Firewall to.

  Resources added directly are taking precedence over those added via a Label Selector.

#### Response

- firewallobject
- actionsarray of objects

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"Corporate Intranet Protection","labels":{"key":"value"},"rules":[{"description":"Allow port 80","direction":"in","source_ips":["192.0.2.2/32","192.0.2.0/24","2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"],"protocol":"tcp","port":"80"}],"apply_to":[{"type":"server","server":{"id":42}}]}' \
	"https://api.hetzner.cloud/v1/firewalls"
```

#### Request

```text
{
  "name": "Corporate Intranet Protection",
  "labels": {
    "key": "value"
  },
  "rules": [
    {
      "description": "Allow port 80",
      "direction": "in",
      "source_ips": [
        "192.0.2.2/32",
        "192.0.2.0/24",
        "2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"
      ],
      "protocol": "tcp",
      "port": "80"
    }
  ],
  "apply_to": [
    {
      "type": "server",
      "server": {
        "id": 42
      }
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "firewall": {
    "id": 42,
    "name": "new-name",
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "rules": [
      {
        "description": null,
        "direction": "in",
        "source_ips": [
          "192.0.2.2/32",
          "192.0.2.0/24",
          "2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ],
        "destination_ips": [],
        "protocol": "tcp",
        "port": "80"
      }
    ],
    "applied_to": [
      {
        "type": "server",
        "server": {
          "id": 42
        },
        "label_selector": {
          "selector": "env=prod"
        },
        "applied_to_resources": [
          {
            "type": "server",
            "server": {
              "id": 42
            }
          }
        ]
      }
    ]
  },
  "actions": [
    {
      "id": 13,
      "command": "set_firewall_rules",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    },
    {
      "id": 14,
      "command": "apply_firewall",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ]
}
```

### Get a Firewall

Returns a single Firewall.

#### HTTP Request

`GET /firewalls/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Response

- firewallobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/firewalls/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "firewall": {
    "id": 42,
    "name": "new-name",
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "rules": [
      {
        "description": null,
        "direction": "in",
        "source_ips": [
          "192.0.2.2/32",
          "192.0.2.0/24",
          "2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ],
        "destination_ips": [],
        "protocol": "tcp",
        "port": "80"
      }
    ],
    "applied_to": [
      {
        "type": "server",
        "server": {
          "id": 42
        },
        "label_selector": {
          "selector": "env=prod"
        },
        "applied_to_resources": [
          {
            "type": "server",
            "server": {
              "id": 42
            }
          }
        ]
      }
    ]
  }
}
```

### Update a Firewall

Update a Firewall.

In case of a parallel running change on the Firewall a `conflict` error will be returned.

#### HTTP Request

`PUT /firewalls/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- namestring

  Name of the Firewall.

  Limited to a maximum of 128 characters.

  Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- firewallobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"new-name","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/firewalls/$ID"
```

#### Request

```text
{
  "name": "new-name",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "firewall": {
    "id": 42,
    "name": "new-name",
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "rules": [
      {
        "description": null,
        "direction": "in",
        "source_ips": [
          "192.0.2.2/32",
          "192.0.2.0/24",
          "2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"
        ],
        "destination_ips": [],
        "protocol": "tcp",
        "port": "80"
      }
    ],
    "applied_to": [
      {
        "type": "server",
        "server": {
          "id": 42
        },
        "label_selector": {
          "selector": "env=prod"
        },
        "applied_to_resources": [
          {
            "type": "server",
            "server": {
              "id": 42
            }
          }
        ]
      }
    ]
  }
}
```

### Delete a Firewall

Deletes the Firewall.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `resource_in_use` | Firewall still applied to a resource |

#### HTTP Request

`DELETE /firewalls/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/firewalls/$ID"
```

#### Response headers

```text
Status: 204
```

## Firewall Actions

### List Actions

Returns all Actions for Firewalls.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /firewalls/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/firewalls/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns the specific Action.

#### HTTP Request

`GET /firewalls/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/firewalls/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Firewall

Returns all Actions for the Firewall.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /firewalls/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/firewalls/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "set_firewall_rules",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Apply to Resources

Applies a Firewall to multiple resources.

Supported resources:

- Servers (with a public network interface)
- Label Selectors

A Server can be applied to a maximum of 5 Firewalls. This limit
applies to Servers applied via a matching Label Selector as well.

Updates to resources matching or no longer matching a Label Selector can take up to a few seconds
to be processed.

A Firewall is applied to a resource once the related Action with command `apply_firewall` successfully finished.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `firewall_already_applied` | Firewall is already applied to resource |
| `incompatible_network_type` | The network type of the resource is not supported by Firewalls |
| `firewall_resource_not_found` | The resource the Firewall should be applied to was not found |
| `private_net_only_server` | The Server the Firewall should be applied to has no public interface |

#### HTTP Request

`POST /firewalls/{id}/actions/apply_to_resources`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- apply\_toarray of objects  required

  Resources to apply the Firewall to.

  Extends existing resources.

#### Response

- actionsarray of objects  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"apply_to":[{"type":"server","server":{"id":42}}]}' \
	"https://api.hetzner.cloud/v1/firewalls/$ID/actions/apply_to_resources"
```

#### Request

```text
{
  "apply_to": [
    {
      "type": "server",
      "server": {
        "id": 42
      }
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 14,
      "command": "apply_firewall",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ]
}
```

### Remove from Resources

Removes a Firewall from multiple resources.

Supported resources:

- Servers (with a public network interface)

A Firewall is removed from a resource once the related Action with command `remove_firewall` successfully finished.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `firewall_resource_not_found` | The resource the Firewall should be removed from was not found |
| `firewall_managed_by_label_selector` | Firewall is applied via a Label Selector and cannot be removed manually |

#### HTTP Request

`POST /firewalls/{id}/actions/remove_from_resources`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- remove\_fromarray of objects  required

  Resources to remove the Firewall from.

#### Response

- actionsarray of objects  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"remove_from":[{"type":"server","server":{"id":42}}]}' \
	"https://api.hetzner.cloud/v1/firewalls/$ID/actions/remove_from_resources"
```

#### Request

```text
{
  "remove_from": [
    {
      "type": "server",
      "server": {
        "id": 42
      }
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 14,
      "command": "remove_firewall",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ]
}
```

### Set Rules

Set the rules of a Firewall.

Overwrites the existing rules with the given ones. Pass an empty array to remove all rules.

Rules are limited to 50 entries per Firewall and 500 effective rules.

#### HTTP Request

`POST /firewalls/{id}/actions/set_rules`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.

#### Request

- rulesarray of objects  required

  Array of rules.

  Rules are limited to 50 entries per Firewall and 500 effective rules.

  Existing rules will be replaced.

#### Response

- actionsarray of objects  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"rules":[{"description":"Allow port 80","direction":"in","source_ips":["192.0.2.2/32","192.0.2.0/24","2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"],"protocol":"tcp","port":"80"}]}' \
	"https://api.hetzner.cloud/v1/firewalls/$ID/actions/set_rules"
```

#### Request

```text
{
  "rules": [
    {
      "description": "Allow port 80",
      "direction": "in",
      "source_ips": [
        "192.0.2.2/32",
        "192.0.2.0/24",
        "2001:0db8:9a3b:ee58:5ca:990c:8bc9:c03b/128"
      ],
      "protocol": "tcp",
      "port": "80"
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "set_firewall_rules",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    },
    {
      "id": 14,
      "command": "apply_firewall",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 38,
          "type": "firewall"
        },
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ]
}
```

### Get an Action for a Firewall

Returns a specific Action for a Firewall.

#### HTTP Request

`GET /firewalls/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Firewall.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/firewalls/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "set_firewall_rules",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 38,
        "type": "firewall"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## Floating IPs

Floating IPs help you to create highly available setups. You can assign a Floating IP to any Server. The Server can then use this IP. You can reassign it to a different Server at any time, or you can choose to unassign the IP from Servers all together.

Floating IPs can be used globally. This means you can assign a Floating IP to a Server in one Location and later reassign it to a Server in a different Location. For optimal routing and latency Floating IPs should be used in the Location they were created in.

For Floating IPs to work with your Server, you must configure them inside your operation system.

Floating IPs of type `ipv4` use a single IPv4 address as their `ip` property. Floating IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Floating IPs are billed on a monthly basis.

### List Floating IPs

List multiple Floating IPs.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /floating_ips`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- floating\_ipsarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "floating_ips": [
    {
      "id": 42,
      "name": "my-resource",
      "description": "This describes my resource",
      "ip": "2001:db8::/64",
      "type": "ipv6",
      "server": 42,
      "dns_ptr": [
        {
          "ip": "2001:db8::1",
          "dns_ptr": "server.example.com"
        }
      ],
      "home_location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "blocked": false,
      "protection": {
        "delete": false
      },
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "created": "2016-01-30T23:55:00+00:00"
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Create a Floating IP

Create a Floating IP.

Provide the `server` attribute to assign the Floating IP to that server or provide a `home_location` to locate the Floating IP at. Note that the Floating IP can be assigned to a Server in any Location later on. For optimal routing it is advised to use the Floating IP in the same Location it was created in.

#### HTTP Request

`POST /floating_ips`

#### Request

The `type` argument is required while `home_location` and `server` are mutually exclusive.

- typestring  required

  Allowed: `ipv4` `ipv6`

  The Floating IP type.
- serverinteger (int64)  – nullable

  Server the Floating IP is assigned to.

  `null` if not assigned.
- home\_locationstring

  Home Location for the Floating IP.

  Either the ID or the name of the Location.

  Only optional if no Server is provided. Routing is optimized for this Locations.
- descriptionstring   – nullable

  Description of the Resource.
- namestring

  Name of the Resource. Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".

#### Response

- floating\_ipobject  required
- actionobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"type":"ipv6","server":42,"home_location":"fsn1","description":"This describes my resource","name":"my-resource","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/floating_ips"
```

#### Request

```text
{
  "type": "ipv6",
  "server": 42,
  "home_location": "fsn1",
  "description": "This describes my resource",
  "name": "my-resource",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "floating_ip": {
    "id": 4711,
    "name": "Web Frontend",
    "description": "Web Frontend",
    "ip": "2001:db8::/64",
    "type": "ipv6",
    "server": 42,
    "dns_ptr": [
      {
        "ip": "2001:db8::1",
        "dns_ptr": "server.example.com"
      }
    ],
    "home_location": {
      "id": 1,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "blocked": false,
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00"
  },
  "action": {
    "id": 13,
    "command": "create_floating_ip",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get a Floating IP

Returns a single Floating IP.

#### HTTP Request

`GET /floating_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Response

- floating\_ipobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "floating_ip": {
    "id": 42,
    "name": "my-resource",
    "description": "This describes my resource",
    "ip": "2001:db8::/64",
    "type": "ipv6",
    "server": 42,
    "dns_ptr": [
      {
        "ip": "2001:db8::1",
        "dns_ptr": "server.example.com"
      }
    ],
    "home_location": {
      "id": 42,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "blocked": false,
    "protection": {
      "delete": false
    },
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00"
  }
}
```

### Update a Floating IP

Update a Floating IP.

#### HTTP Request

`PUT /floating_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Request

- descriptionstring   – nullable

  Description of the Resource.
- namestring

  Name of the Resource. Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- floating\_ipobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"description":"This describes my resource","name":"my-resource","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/floating_ips/$ID"
```

#### Request

```text
{
  "description": "This describes my resource",
  "name": "my-resource",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "floating_ip": {
    "id": 4711,
    "name": "Web Frontend",
    "description": "Web Frontend",
    "ip": "2001:db8::/64",
    "type": "ipv6",
    "server": 42,
    "dns_ptr": [
      {
        "ip": "2001:db8::1",
        "dns_ptr": "server.example.com"
      }
    ],
    "home_location": {
      "id": 1,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "blocked": false,
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00"
  }
}
```

### Delete a Floating IP

Deletes a Floating IP.

If the IP is assigned to a resource it will be unassigned.

#### HTTP Request

`DELETE /floating_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips/$ID"
```

#### Response headers

```text
Status: 204
```

## Floating IP Actions

### List Actions

Lists multiple Actions.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /floating_ips/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a single Action.

#### HTTP Request

`GET /floating_ips/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Floating IP

Lists Actions for a Floating IP.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /floating_ips/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "assign_floating_ip",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 4711,
          "type": "server"
        },
        {
          "id": 4712,
          "type": "floating_ip"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Assign a Floating IP to a Server

Assigns a Floating IP to a Server.

#### HTTP Request

`POST /floating_ips/{id}/actions/assign`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Request

- serverinteger (int64)  – nullablerequired

  Server the Floating IP is assigned to.

  `null` if not assigned.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"server":42}' \
	"https://api.hetzner.cloud/v1/floating_ips/$ID/actions/assign"
```

#### Request

```text
{
  "server": 42
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "assign_floating_ip",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change reverse DNS records for a Floating IP

Change the reverse DNS records for this Floating IP.

Allows to modify the PTR records set for the IP address.

#### HTTP Request

`POST /floating_ips/{id}/actions/change_dns_ptr`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Request

The `ip` attributes specifies for which IP address the record is set. For IPv4 addresses this must be the exact address of the Floating IP. For IPv6 addresses this must be a single address within the `/64` subnet of the Floating IP.

The `dns_ptr` attribute specifies the hostname used for the IP address. Must be a fully qualified domain name (FQDN) without trailing dot.

For IPv6 Floating IPs up to 100 entries can be created.

- ipstring  required

  Single IPv4 or IPv6 address to create pointer for.
- dns\_ptrstring  required

  Domain Name to point to.

  PTR record content used for reverse DNS.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ip":"2001:db8::1","dns_ptr":"server.example.com"}' \
	"https://api.hetzner.cloud/v1/floating_ips/$ID/actions/change_dns_ptr"
```

#### Request

```text
{
  "ip": "2001:db8::1",
  "dns_ptr": "server.example.com"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_dns_ptr",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change Floating IP Protection

Changes the protection settings configured for the Floating IP.

#### HTTP Request

`POST /floating_ips/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Request

- deleteboolean  required

  Prevent the Resource from being deleted.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":false}' \
	"https://api.hetzner.cloud/v1/floating_ips/$ID/actions/change_protection"
```

#### Request

```text
{
  "delete": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Unassign a Floating IP

Unassigns a Floating IP.

Results in the IP being unreachable. Can be assigned to another resource again.

#### HTTP Request

`POST /floating_ips/{id}/actions/unassign`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips/$ID/actions/unassign"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "unassign_floating_ip",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get an Action for a Floating IP

Returns a specific Action for a Floating IP.

#### HTTP Request

`GET /floating_ips/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Floating IP.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/floating_ips/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "assign_floating_ip",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "floating_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## Servers

Servers are virtual machines that can be provisioned.

### List Servers

Returns all existing Server objects.

#### HTTP Request

`GET /servers`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `initializing` `starting` `stopping` `off` `deleting` `migrating` `rebuilding` `unknown`

  Filter resources by status. Can be used multiple times. The response will only
  contain the resources with the specified status.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- serversarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "servers": [
    {
      "id": 42,
      "name": "my-resource",
      "status": "running",
      "created": "2016-01-30T23:55:00+00:00",
      "public_net": {
        "ipv4": {
          "id": 42,
          "ip": "1.2.3.4",
          "blocked": false,
          "dns_ptr": "server01.example.com"
        },
        "ipv6": {
          "id": 42,
          "ip": "2001:db8::/64",
          "blocked": false,
          "dns_ptr": [
            {
              "ip": "2001:db8::1",
              "dns_ptr": "server.example.com"
            }
          ]
        },
        "floating_ips": [
          478
        ],
        "firewalls": [
          {
            "id": 42,
            "status": "applied"
          }
        ]
      },
      "private_net": [
        {
          "network": 4711,
          "ip": "10.0.0.2",
          "alias_ips": [
            "10.0.0.3",
            "10.0.0.4"
          ],
          "mac_address": "86:00:ff:2a:7d:e1"
        }
      ],
      "server_type": {
        "id": 1,
        "name": "cpx22",
        "description": "CPX22",
        "cores": 2,
        "memory": 4,
        "disk": 80,
        "deprecated": false,
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "price_monthly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "included_traffic": 654321,
            "price_per_tb_traffic": {
              "net": "1.0000",
              "gross": "1.1900"
            }
          }
        ],
        "storage_type": "local",
        "cpu_type": "shared",
        "category": "Shared vCPU",
        "architecture": "x86",
        "deprecation": {
          "unavailable_after": "2023-09-01T00:00:00+00:00",
          "announced": "2023-06-01T00:00:00+00:00"
        },
        "locations": [
          {
            "id": 42,
            "name": "fsn1",
            "deprecation": {
              "unavailable_after": "2023-09-01T00:00:00+00:00",
              "announced": "2023-06-01T00:00:00+00:00"
            }
          }
        ]
      },
      "datacenter": {
        "id": 42,
        "name": "fsn1-dc8",
        "description": "Falkenstein DC Park 8",
        "location": {
          "id": 42,
          "name": "fsn1",
          "description": "Falkenstein DC Park 1",
          "country": "DE",
          "city": "Falkenstein",
          "latitude": 50.47612,
          "longitude": 12.370071,
          "network_zone": "eu-central"
        },
        "server_types": {
          "supported": [
            1,
            2,
            3
          ],
          "available": [
            1,
            2,
            3
          ],
          "available_for_migration": [
            1,
            2,
            3
          ]
        }
      },
      "image": {
        "id": 42,
        "type": "snapshot",
        "status": "available",
        "name": "ubuntu-24.04",
        "description": "Ubuntu 24.04 Standard 64 bit",
        "image_size": 2.3,
        "disk_size": 10,
        "created": "2016-01-30T23:55:00+00:00",
        "created_from": {
          "id": 1,
          "name": "Server"
        },
        "bound_to": null,
        "os_flavor": "ubuntu",
        "os_version": "24.04",
        "rapid_deploy": false,
        "protection": {
          "delete": false
        },
        "deprecated": "2018-02-28T00:00:00+00:00",
        "deleted": null,
        "labels": {
          "environment": "prod",
          "example.com/my": "label",
          "just-a-key": ""
        },
        "architecture": "x86"
      },
      "iso": {
        "id": 42,
        "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
        "description": "FreeBSD 11.0 x64",
        "type": "public",
        "deprecation": {
          "unavailable_after": "2023-09-01T00:00:00+00:00",
          "announced": "2023-06-01T00:00:00+00:00"
        },
        "architecture": "x86"
      },
      "rescue_enabled": false,
      "locked": false,
      "backup_window": "22-02",
      "outgoing_traffic": 123456,
      "ingoing_traffic": 123456,
      "included_traffic": 654321,
      "protection": {
        "delete": false,
        "rebuild": false
      },
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "volumes": [
        0
      ],
      "load_balancers": [
        0
      ],
      "primary_disk_size": 50,
      "placement_group": {
        "id": 42,
        "name": "my-resource",
        "labels": {
          "environment": "prod",
          "example.com/my": "label",
          "just-a-key": ""
        },
        "type": "spread",
        "created": "2016-01-30T23:55:00+00:00",
        "servers": [
          42
        ]
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my-server","location":"nbg1","datacenter":"nbg1-dc3","server_type":"cpx22","start_after_create":true,"image":"ubuntu-24.04","placement_group":1,"ssh_keys":["my-ssh-key"],"volumes":[123],"networks":[456],"firewalls":[{"firewall":38}],"user_data":"#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n","labels":{"environment":"prod","example.com/my":"label","just-a-key":""},"automount":false,"public_net":{"enable_ipv4":false,"enable_ipv6":false,"ipv4":null,"ipv6":null}}' \
	"https://api.hetzner.cloud/v1/servers"
```

#### Request

```text
{
  "name": "my-server",
  "location": "nbg1",
  "datacenter": "nbg1-dc3",
  "server_type": "cpx22",
  "start_after_create": true,
  "image": "ubuntu-24.04",
  "placement_group": 1,
  "ssh_keys": [
    "my-ssh-key"
  ],
  "volumes": [
    123
  ],
  "networks": [
    456
  ],
  "firewalls": [
    {
      "firewall": 38
    }
  ],
  "user_data": "#cloud-config\nruncmd:\n- [touch, /root/cloud-init-worked]\n",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  },
  "automount": false,
  "public_net": {
    "enable_ipv4": false,
    "enable_ipv6": false,
    "ipv4": null,
    "ipv6": null
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "server": {
    "id": 42,
    "name": "my-server",
    "status": "initializing",
    "created": "2016-01-30T23:50:00+00:00",
    "public_net": {
      "ipv4": {
        "ip": "1.2.3.4",
        "blocked": false,
        "dns_ptr": "server01.example.com"
      },
      "ipv6": {
        "ip": "2001:db8::/64",
        "blocked": false,
        "dns_ptr": [
          {
            "ip": "2001:db8::1",
            "dns_ptr": "server.example.com"
          }
        ]
      },
      "floating_ips": [
        478
      ],
      "firewalls": [
        {
          "id": 38,
          "status": "applied"
        }
      ]
    },
    "private_net": [
      {
        "network": 4711,
        "ip": "10.0.0.2",
        "alias_ips": [],
        "mac_address": "86:00:ff:2a:7d:e1"
      }
    ],
    "server_type": {
      "id": 1,
      "name": "cpx22",
      "description": "CPX22",
      "cores": 2,
      "memory": 4,
      "disk": 80,
      "deprecated": true,
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          },
          "price_monthly": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          },
          "included_traffic": 21990232555520,
          "price_per_tb_traffic": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          }
        }
      ],
      "storage_type": "local",
      "cpu_type": "shared",
      "architecture": "x86",
      "locations": [
        {
          "id": 1,
          "name": "fsn1",
          "deprecation": null
        },
        {
          "id": 2,
          "name": "nbg1",
          "deprecation": {
            "announced": "2018-02-28T00:00:00Z",
            "unavailable_after": "2018-05-31T00:00:00Z"
          }
        }
      ]
    },
    "datacenter": {
      "id": 1,
      "name": "fsn1-dc8",
      "description": "Falkenstein 1 DC 8",
      "location": {
        "id": 1,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "server_types": {
        "supported": [
          1,
          2,
          3
        ],
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ]
      }
    },
    "image": {
      "id": 4711,
      "type": "snapshot",
      "status": "available",
      "name": "ubuntu-24.04",
      "description": "Ubuntu 24.04 Standard 64 bit",
      "image_size": 2.3,
      "disk_size": 10,
      "created": "2016-01-30T23:50:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "bound_to": null,
      "os_flavor": "ubuntu",
      "os_version": "24.04",
      "rapid_deploy": false,
      "protection": {
        "delete": false
      },
      "deprecated": "2018-02-28T00:00:00+00:00",
      "deleted": null,
      "labels": {
        "key": "value"
      },
      "architecture": "x86"
    },
    "iso": {
      "id": 4711,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "description": "FreeBSD 11.0 x64",
      "type": "public",
      "deprecation": {
        "announced": "2018-02-28T00:00:00+00:00",
        "unavailable_after": "2018-05-31T00:00:00+00:00"
      },
      "architecture": "x86"
    },
    "rescue_enabled": false,
    "locked": false,
    "backup_window": "22-02",
    "outgoing_traffic": 123456,
    "ingoing_traffic": 123456,
    "included_traffic": 654321,
    "protection": {
      "delete": false,
      "rebuild": false
    },
    "labels": {
      "key": "value"
    },
    "volumes": [],
    "load_balancers": [],
    "primary_disk_size": 50
  },
  "action": {
    "id": 1,
    "command": "create_server",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  },
  "next_actions": [
    {
      "id": 13,
      "command": "start_server",
      "status": "running",
      "progress": 0,
      "started": "2016-01-30T23:50:00+00:00",
      "finished": null,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "root_password": "YItygq1v3GYjjMomLaKc"
}
```

### Get a Server

Returns a specific Server object. The Server must exist inside the Project.

#### HTTP Request

`GET /servers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- serverobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "server": {
    "id": 42,
    "name": "my-resource",
    "status": "running",
    "created": "2016-01-30T23:55:00+00:00",
    "public_net": {
      "ipv4": {
        "id": 42,
        "ip": "1.2.3.4",
        "blocked": false,
        "dns_ptr": "server01.example.com"
      },
      "ipv6": {
        "id": 42,
        "ip": "2001:db8::/64",
        "blocked": false,
        "dns_ptr": [
          {
            "ip": "2001:db8::1",
            "dns_ptr": "server.example.com"
          }
        ]
      },
      "floating_ips": [
        478
      ],
      "firewalls": [
        {
          "id": 42,
          "status": "applied"
        }
      ]
    },
    "private_net": [
      {
        "network": 4711,
        "ip": "10.0.0.2",
        "alias_ips": [
          "10.0.0.3",
          "10.0.0.4"
        ],
        "mac_address": "86:00:ff:2a:7d:e1"
      }
    ],
    "server_type": {
      "id": 1,
      "name": "cpx22",
      "description": "CPX22",
      "cores": 2,
      "memory": 4,
      "disk": 80,
      "deprecated": false,
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "price_monthly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "included_traffic": 654321,
          "price_per_tb_traffic": {
            "net": "1.0000",
            "gross": "1.1900"
          }
        }
      ],
      "storage_type": "local",
      "cpu_type": "shared",
      "category": "Shared vCPU",
      "architecture": "x86",
      "deprecation": {
        "unavailable_after": "2023-09-01T00:00:00+00:00",
        "announced": "2023-06-01T00:00:00+00:00"
      },
      "locations": [
        {
          "id": 42,
          "name": "fsn1",
          "deprecation": {
            "unavailable_after": "2023-09-01T00:00:00+00:00",
            "announced": "2023-06-01T00:00:00+00:00"
          }
        }
      ]
    },
    "datacenter": {
      "id": 42,
      "name": "fsn1-dc8",
      "description": "Falkenstein DC Park 8",
      "location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "server_types": {
        "supported": [
          1,
          2,
          3
        ],
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ]
      }
    },
    "image": {
      "id": 42,
      "type": "snapshot",
      "status": "available",
      "name": "ubuntu-24.04",
      "description": "Ubuntu 24.04 Standard 64 bit",
      "image_size": 2.3,
      "disk_size": 10,
      "created": "2016-01-30T23:55:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "bound_to": null,
      "os_flavor": "ubuntu",
      "os_version": "24.04",
      "rapid_deploy": false,
      "protection": {
        "delete": false
      },
      "deprecated": "2018-02-28T00:00:00+00:00",
      "deleted": null,
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "architecture": "x86"
    },
    "iso": {
      "id": 42,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "description": "FreeBSD 11.0 x64",
      "type": "public",
      "deprecation": {
        "unavailable_after": "2023-09-01T00:00:00+00:00",
        "announced": "2023-06-01T00:00:00+00:00"
      },
      "architecture": "x86"
    },
    "rescue_enabled": false,
    "locked": false,
    "backup_window": "22-02",
    "outgoing_traffic": 123456,
    "ingoing_traffic": 123456,
    "included_traffic": 654321,
    "protection": {
      "delete": false,
      "rebuild": false
    },
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "volumes": [
      0
    ],
    "load_balancers": [
      0
    ],
    "primary_disk_size": 50,
    "placement_group": {
      "id": 42,
      "name": "my-resource",
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "type": "spread",
      "created": "2016-01-30T23:55:00+00:00",
      "servers": [
        42
      ]
    }
  }
}
```

### Update a Server

Updates a Server. You can update a Server’s name and a Server’s labels.

Please note that Server names must be unique per Project and valid hostnames as per RFC 1123 (i.e. may only contain letters, digits, periods, and dashes).

#### HTTP Request

`PUT /servers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- namestring

  New name to set.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- serverobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my-server","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/servers/$ID"
```

#### Request

```text
{
  "name": "my-server",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "server": {
    "id": 42,
    "name": "my-resource",
    "status": "running",
    "created": "2016-01-30T23:55:00+00:00",
    "public_net": {
      "ipv4": {
        "id": 42,
        "ip": "1.2.3.4",
        "blocked": false,
        "dns_ptr": "server01.example.com"
      },
      "ipv6": {
        "id": 42,
        "ip": "2001:db8::/64",
        "blocked": false,
        "dns_ptr": [
          {
            "ip": "2001:db8::1",
            "dns_ptr": "server.example.com"
          }
        ]
      },
      "floating_ips": [
        478
      ],
      "firewalls": [
        {
          "id": 42,
          "status": "applied"
        }
      ]
    },
    "private_net": [
      {
        "network": 4711,
        "ip": "10.0.0.2",
        "alias_ips": [
          "10.0.0.3",
          "10.0.0.4"
        ],
        "mac_address": "86:00:ff:2a:7d:e1"
      }
    ],
    "server_type": {
      "id": 1,
      "name": "cpx22",
      "description": "CPX22",
      "cores": 2,
      "memory": 4,
      "disk": 80,
      "deprecated": false,
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "price_monthly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "included_traffic": 654321,
          "price_per_tb_traffic": {
            "net": "1.0000",
            "gross": "1.1900"
          }
        }
      ],
      "storage_type": "local",
      "cpu_type": "shared",
      "category": "Shared vCPU",
      "architecture": "x86",
      "deprecation": {
        "unavailable_after": "2023-09-01T00:00:00+00:00",
        "announced": "2023-06-01T00:00:00+00:00"
      },
      "locations": [
        {
          "id": 42,
          "name": "fsn1",
          "deprecation": {
            "unavailable_after": "2023-09-01T00:00:00+00:00",
            "announced": "2023-06-01T00:00:00+00:00"
          }
        }
      ]
    },
    "datacenter": {
      "id": 42,
      "name": "fsn1-dc8",
      "description": "Falkenstein DC Park 8",
      "location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "server_types": {
        "supported": [
          1,
          2,
          3
        ],
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ]
      }
    },
    "image": {
      "id": 42,
      "type": "snapshot",
      "status": "available",
      "name": "ubuntu-24.04",
      "description": "Ubuntu 24.04 Standard 64 bit",
      "image_size": 2.3,
      "disk_size": 10,
      "created": "2016-01-30T23:55:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "bound_to": null,
      "os_flavor": "ubuntu",
      "os_version": "24.04",
      "rapid_deploy": false,
      "protection": {
        "delete": false
      },
      "deprecated": "2018-02-28T00:00:00+00:00",
      "deleted": null,
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "architecture": "x86"
    },
    "iso": {
      "id": 42,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "description": "FreeBSD 11.0 x64",
      "type": "public",
      "deprecation": {
        "unavailable_after": "2023-09-01T00:00:00+00:00",
        "announced": "2023-06-01T00:00:00+00:00"
      },
      "architecture": "x86"
    },
    "rescue_enabled": false,
    "locked": false,
    "backup_window": "22-02",
    "outgoing_traffic": 123456,
    "ingoing_traffic": 123456,
    "included_traffic": 654321,
    "protection": {
      "delete": false,
      "rebuild": false
    },
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "volumes": [
      0
    ],
    "load_balancers": [
      0
    ],
    "primary_disk_size": 50,
    "placement_group": {
      "id": 42,
      "name": "my-resource",
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "type": "spread",
      "created": "2016-01-30T23:55:00+00:00",
      "servers": [
        42
      ]
    }
  }
}
```

### Delete a Server

Deletes a Server.

This immediately removes the Server from your account, and it is no longer
accessible. Any resources attached to the server (like Volumes, Primary IPs,
Floating IPs, Firewalls, Placement Groups) are detached while the server is deleted.

#### HTTP Request

`DELETE /servers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/metrics?type=$TYPE&start=$START&end=$END"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "metrics": {
    "start": "2017-01-01T00:00:00+00:00",
    "end": "2017-01-01T23:00:00+00:00",
    "step": 60,
    "time_series": {
      "name_of_timeseries": {
        "values": [
          [
            1435781470.622,
            "42"
          ],
          [
            1435781471.622,
            "43"
          ]
        ]
      }
    }
  }
}
```

## Images

Images are blueprints for your VM disks. They can be of different types:

### System Images

Distribution Images maintained by us, e.g. “Ubuntu 20.04”

### Snapshot Images

Maintained by you, for example “Ubuntu 20.04 with my own settings”. These are billed per GB per month.

### Backup Images

Daily Backups of your Server. Will automatically be created for Servers which have backups enabled (`POST /servers/{id}/actions/enable_backup`)

Bound to exactly one Server. If you delete the Server, you also delete all backups bound to it. You may convert backup Images to snapshot Images to keep them.

These are billed at 20% of your server price for 7 backup slots.

### App Images

Prebuild images with specific software configurations, e.g. “Wordpress”. All app images are created by us.

### List Images

Returns all Image objects. You can select specific Image types only and sort the results by using URI parameters.

#### HTTP Request

`GET /images`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- typearray of strings

  Allowed: `system` `app` `snapshot` `backup`

  Filter resources by type. Can be used multiple times. The response will only
  contain the resources with the specified type.
- statusarray of strings

  Allowed: `available` `creating` `unavailable`

  Filter resources by status. Can be used multiple times. The response will only
  contain the resources with the specified status.
- bound\_toarray of strings

  Can be used multiple times. Server ID linked to the Image. Only available for Images of type `backup`.
- include\_deprecatedboolean

  Can be used multiple times.
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- architecturestring

  Allowed: `x86` `arm`

  Filter resources by cpu architecture. The response will only contain the resources
  with the specified cpu architecture.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- imagesarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/images"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "images": [
    {
      "id": 42,
      "type": "snapshot",
      "status": "available",
      "name": "ubuntu-24.04",
      "description": "Ubuntu 24.04 Standard 64 bit",
      "image_size": 2.3,
      "disk_size": 10,
      "created": "2016-01-30T23:55:00+00:00",
      "created_from": {
        "id": 1,
        "name": "Server"
      },
      "bound_to": null,
      "os_flavor": "ubuntu",
      "os_version": "24.04",
      "rapid_deploy": false,
      "protection": {
        "delete": false
      },
      "deprecated": "2018-02-28T00:00:00+00:00",
      "deleted": null,
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "architecture": "x86"
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Image

Returns a specific Image object.

#### HTTP Request

`GET /images/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.

#### Response

- imageobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/images/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "image": {
    "id": 42,
    "type": "snapshot",
    "status": "available",
    "name": "ubuntu-24.04",
    "description": "Ubuntu 24.04 Standard 64 bit",
    "image_size": 2.3,
    "disk_size": 10,
    "created": "2016-01-30T23:55:00+00:00",
    "created_from": {
      "id": 1,
      "name": "Server"
    },
    "bound_to": null,
    "os_flavor": "ubuntu",
    "os_version": "24.04",
    "rapid_deploy": false,
    "protection": {
      "delete": false
    },
    "deprecated": "2018-02-28T00:00:00+00:00",
    "deleted": null,
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "architecture": "x86"
  }
}
```

### Update an Image

Updates the Image. You may change the description, convert a Backup Image to a Snapshot Image or change the Image labels. Only Images of type `snapshot` and `backup` can be updated.

#### HTTP Request

`PUT /images/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.

#### Request

- descriptionstring

  New description of Image.
- typestring

  Allowed: `snapshot`

  Destination Image type to convert to.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- imageobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"description":"My new Image description","type":"snapshot","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/images/$ID"
```

#### Request

```text
{
  "description": "My new Image description",
  "type": "snapshot",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "image": {
    "id": 4711,
    "type": "snapshot",
    "status": "available",
    "name": null,
    "description": "My new Image description",
    "image_size": 2.3,
    "disk_size": 10,
    "created": "2016-01-30T23:50:00+00:00",
    "created_from": {
      "id": 1,
      "name": "Server"
    },
    "bound_to": null,
    "os_flavor": "ubuntu",
    "os_version": "20.04",
    "rapid_deploy": false,
    "protection": {
      "delete": false
    },
    "deprecated": "2018-02-28T00:00:00+00:00",
    "deleted": null,
    "labels": {
      "key": "value"
    },
    "architecture": "x86"
  }
}
```

### Delete an Image

Deletes an Image. Only Images of type `snapshot` and `backup` can be deleted.

#### HTTP Request

`DELETE /images/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/images/$ID"
```

#### Response headers

```text
Status: 204
```

## Image Actions

### List Actions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.

#### HTTP Request

`GET /images/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/images/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a specific Action object.

#### HTTP Request

`GET /images/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/images/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for an Image

Returns all Action objects for an Image. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

#### HTTP Request

`GET /images/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/images/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "change_protection",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 4711,
          "type": "image"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Change Image Protection

Changes the protection configuration of the Image. Can only be used on snapshots.

#### HTTP Request

`POST /images/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.

#### Request

- deleteboolean

  If true, prevents the snapshot from being deleted.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":true}' \
	"https://api.hetzner.cloud/v1/images/$ID/actions/change_protection"
```

#### Request

```text
{
  "delete": true
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "image"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get an Action for an Image

Returns a specific Action for an Image.

#### HTTP Request

`GET /images/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Image.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/images/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "image"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## ISOs

ISOs are read-only Images of DVDs. While we recommend using our Image functionality to install your Servers we also provide some stock ISOs so you can install more exotic operating systems by yourself.

On request our support uploads a private ISO just for you. These are marked with type `private` and only visible in your Project.

To attach an ISO to your Server use `POST /servers/{id}/actions/attach_iso`.

### List ISOs

Returns all available ISO objects.

#### HTTP Request

`GET /isos`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- architecturestring

  Allowed: `x86` `arm`

  Filter resources by cpu architecture. The response will only contain the resources
  with the specified cpu architecture.
- include\_architecture\_wildcardboolean

  Include Images with wildcard architecture (architecture is null). Works only if architecture filter is specified.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- isosarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/isos"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "isos": [
    {
      "id": 42,
      "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
      "description": "FreeBSD 11.0 x64",
      "type": "public",
      "deprecation": {
        "unavailable_after": "2023-09-01T00:00:00+00:00",
        "announced": "2023-06-01T00:00:00+00:00"
      },
      "architecture": "x86"
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an ISO

Returns a specific ISO object.

#### HTTP Request

`GET /isos/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the ISO.

#### Response

- isoobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/isos/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "iso": {
    "id": 42,
    "name": "FreeBSD-11.0-RELEASE-amd64-dvd1",
    "description": "FreeBSD 11.0 x64",
    "type": "public",
    "deprecation": {
      "unavailable_after": "2023-09-01T00:00:00+00:00",
      "announced": "2023-06-01T00:00:00+00:00"
    },
    "architecture": "x86"
  }
}
```

## Placement Groups

Placement groups are used to influence the location of interdependent virtual servers in our data centers. The distribution of the different servers within a group is based on a pattern specified in the type. By enforcing certain rules on the placement of servers within our infrastructure, availability can be influenced in a way that fits your needs best.

In `spread` placement groups, all virtual servers will run on different physical servers. This decreases the probability that some servers might fail together.

### List Placement Groups

Returns all Placement Group objects.

#### HTTP Request

`GET /placement_groups`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- typearray of strings

  Allowed: `spread`

  Filter resources by type. Can be used multiple times. The response will only
  contain the resources with the specified type.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- placement\_groupsarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/placement_groups"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "placement_groups": [
    {
      "id": 897,
      "name": "my Placement Group",
      "labels": {
        "key": "value"
      },
      "type": "spread",
      "created": "2019-01-08T12:10:00+00:00",
      "servers": [
        4711,
        4712
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Create a PlacementGroup

Creates a new Placement Group.

#### HTTP Request

`POST /placement_groups`

#### Request

- namestring  required

  Name of the Placement Group.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- typestring  required

  Allowed: `spread`

  Define the Placement Group Type.

#### Response

- placement\_groupobject  required
- actionobject   – nullable

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my Placement Group","type":"spread"}' \
	"https://api.hetzner.cloud/v1/placement_groups"
```

#### Request

```text
{
  "name": "my Placement Group",
  "type": "spread"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "placement_group": {
    "id": 897,
    "name": "my Placement Group",
    "labels": {
      "key": "value"
    },
    "type": "spread",
    "created": "2019-01-08T12:10:00+00:00",
    "servers": []
  }
}
```

### Get a PlacementGroup

Gets a specific Placement Group object.

#### HTTP Request

`GET /placement_groups/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Placement Group.

#### Response

- placement\_groupobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/placement_groups/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "placement_group": {
    "id": 897,
    "name": "my Placement Group",
    "labels": {
      "key": "value"
    },
    "type": "spread",
    "created": "2019-01-08T12:10:00+00:00",
    "servers": [
      4711,
      4712
    ]
  }
}
```

### Update a PlacementGroup

Updates the Placement Group properties.

Note: if the Placement Group object changes during the request, the response will be a “conflict” error.

#### HTTP Request

`PUT /placement_groups/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Placement Group.

#### Request

- namestring

  New Placement Group name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- placement\_groupobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my Placement Group","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/placement_groups/$ID"
```

#### Request

```text
{
  "name": "my Placement Group",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "placement_group": {
    "id": 897,
    "name": "my Placement Group",
    "labels": {
      "key": "value"
    },
    "type": "spread",
    "created": "2019-01-08T12:10:00+00:00",
    "servers": [
      4711,
      4712
    ]
  }
}
```

### Delete a PlacementGroup

Deletes a Placement Group.

#### HTTP Request

`DELETE /placement_groups/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Placement Group.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/placement_groups/$ID"
```

#### Response headers

```text
Status: 204
```

## Primary IPs

Primary IPs help you to create more flexible networking setups. You can assign at most one Primary IP of type `ipv4` and one of type `ipv6` per Server. This Server then uses these IPs.

You can only unassign a Primary IP from a Server when it's powered off. This Primary IP can then be assigned to a different powered off Server, or you can keep it around for later use.

Primary IPs are bound to a specific Datacenter. You can not assign a Primary IP from one Datacenter to a Server in a different Datacenter. If you need this capability use Floating IPs instead.

If your Server's operating system supports cloud-init there is no further configuration needed to make Primary IPs work.

Primary IPs of type `ipv4` use a single IPv4 address as their `ip` property. Primary IPs of type `ipv6` use a /64 network such as `fc00::/64` as their `ip` property. Any IP address within that network can be used on your host.

Primary IPs are billed on an hourly basis.

### List Primary IPs

List multiple Primary IPs.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /primary_ips`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- ipstring

  Filter results by IP address.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".

#### Response

- primary\_ipsarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/primary_ips"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "primary_ips": [
    {
      "id": 42,
      "name": "my-resource",
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "created": "2016-01-30T23:55:00+00:00",
      "blocked": false,
      "datacenter": {
        "id": 42,
        "name": "fsn1-dc8",
        "description": "Falkenstein DC Park 8",
        "location": {
          "id": 42,
          "name": "fsn1",
          "description": "Falkenstein DC Park 1",
          "country": "DE",
          "city": "Falkenstein",
          "latitude": 50.47612,
          "longitude": 12.370071,
          "network_zone": "eu-central"
        },
        "server_types": {
          "supported": [
            1,
            2,
            3
          ],
          "available": [
            1,
            2,
            3
          ],
          "available_for_migration": [
            1,
            2,
            3
          ]
        }
      },
      "ip": "2001:db8::/64",
      "dns_ptr": [
        {
          "ip": "2001:db8::1",
          "dns_ptr": "server.example.com"
        }
      ],
      "protection": {
        "delete": false
      },
      "type": "ipv6",
      "auto_delete": true,
      "assignee_type": "server",
      "assignee_id": 17
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Create a Primary IP

Create a new Primary IP.

Can optionally be assigned to a resource by providing an `assignee_id` and `assignee_type`.

If not assigned to a resource the `datacenter` key needs to be provided. This can be either the ID or the name of the Data Center this Primary IP shall be created in.

A Primary IP can only be assigned to resource in the same Data Center later on.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `server_not_stopped` | The specified Server is running, but needs to be powered off |
| `server_has_ipv4` | The Server already has an ipv4 address |
| `server_has_ipv6` | The Server already has an ipv6 address |

#### HTTP Request

`POST /primary_ips`

#### Request

Request Body for creating a new Primary IP.

The `datacenter` and `assignee_id`/`assignee_type` attributes are mutually exclusive.

- namestring  required

  Name of the Resource. Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- typestring  required

  Allowed: `ipv4` `ipv6`

  Primary IP type.
- datacenterstring

  Data Center ID or name.

  The Primary IP will be bound to this Data Center. Omit if `assignee_id`/`assignee_type` is provided.
- assignee\_typestring  required

  Allowed: `server`

  Type of resource the Primary IP can get assigned to.

  Currently Primary IPs can only be assigned to Servers,
  therefore this field must be set to `server`.
- assignee\_idinteger (int64)  – nullable

  ID of resource to assign the Primary IP to.

  Omitted if the Primary IP should not get assigned.
- auto\_deleteboolean

  Default: `false`

  Auto deletion state.

  If enabled the Primary IP will be deleted once the assigned resource gets deleted.

#### Response

- primary\_ipobject  required
- actionobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my-resource","labels":{"environment":"prod","example.com/my":"label","just-a-key":""},"type":"ipv6","datacenter":"fsn1-dc8","assignee_type":"server","assignee_id":17,"auto_delete":false}' \
	"https://api.hetzner.cloud/v1/primary_ips"
```

#### Request

```text
{
  "name": "my-resource",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  },
  "type": "ipv6",
  "datacenter": "fsn1-dc8",
  "assignee_type": "server",
  "assignee_id": 17,
  "auto_delete": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "primary_ip": {
    "id": 42,
    "name": "my-ip",
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "blocked": false,
    "datacenter": {
      "id": 42,
      "name": "fsn1-dc8",
      "description": "Falkenstein DC Park 8",
      "location": {
        "id": 1,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "server_types": {
        "supported": [
          1,
          2,
          3
        ],
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ]
      }
    },
    "ip": "2001:db8::/64",
    "dns_ptr": [
      {
        "ip": "2001:db8::1",
        "dns_ptr": "server.example.com"
      }
    ],
    "protection": {
      "delete": false
    },
    "type": "ipv6",
    "auto_delete": true,
    "assignee_type": "server",
    "assignee_id": 17
  },
  "action": {
    "id": 13,
    "command": "create_primary_ip",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 17,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get a Primary IP

Returns a Primary IP.

#### HTTP Request

`GET /primary_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Response

- primary\_ipobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/primary_ips/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "primary_ip": {
    "id": 42,
    "name": "my-resource",
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "blocked": false,
    "datacenter": {
      "id": 42,
      "name": "fsn1-dc8",
      "description": "Falkenstein DC Park 8",
      "location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "server_types": {
        "supported": [
          1,
          2,
          3
        ],
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ]
      }
    },
    "ip": "2001:db8::/64",
    "dns_ptr": [
      {
        "ip": "2001:db8::1",
        "dns_ptr": "server.example.com"
      }
    ],
    "protection": {
      "delete": false
    },
    "type": "ipv6",
    "auto_delete": true,
    "assignee_type": "server",
    "assignee_id": 17
  }
}
```

### Update a Primary IP

Update a Primary IP.

If another change is concurrently performed on this Primary IP, a error response with code `conflict` will be returned.

#### HTTP Request

`PUT /primary_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Request

- namestring

  Name of the Resource. Must be unique per Project.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".
- auto\_deleteboolean

  Default: `false`

  Auto deletion state.

  If enabled the Primary IP will be deleted once the assigned resource gets deleted.

#### Response

- primary\_ipobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"my-resource","labels":{"environment":"prod","example.com/my":"label","just-a-key":""},"auto_delete":true}' \
	"https://api.hetzner.cloud/v1/primary_ips/$ID"
```

#### Request

```text
{
  "name": "my-resource",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  },
  "auto_delete": true
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "primary_ip": {
    "id": 42,
    "name": "my-resource",
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "blocked": false,
    "datacenter": {
      "id": 42,
      "name": "fsn1-dc8",
      "description": "Falkenstein DC Park 8",
      "location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "server_types": {
        "supported": [
          1,
          2,
          3
        ],
        "available": [
          1,
          2,
          3
        ],
        "available_for_migration": [
          1,
          2,
          3
        ]
      }
    },
    "ip": "2001:db8::/64",
    "dns_ptr": [
      {
        "ip": "2001:db8::1",
        "dns_ptr": "server.example.com"
      }
    ],
    "protection": {
      "delete": false
    },
    "type": "ipv6",
    "auto_delete": true,
    "assignee_type": "server",
    "assignee_id": 17
  }
}
```

### Delete a Primary IP

Deletes a Primary IP.

If assigned to a Server the Primary IP will be unassigned automatically. The Server must be powered off (status `off`) in order for this operation to succeed.

#### HTTP Request

`DELETE /primary_ips/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/primary_ips/$ID"
```

#### Response headers

```text
Status: 204
```

## Primary IP Actions

### List Actions

Lists multiple Actions.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /primary_ips/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/primary_ips/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a single Action.

#### HTTP Request

`GET /primary_ips/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/primary_ips/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Assign a Primary IP to a resource

Assign a Primary IP to a resource.

A Server can only have one Primary IP of type `ipv4` and one of type `ipv6` assigned. If you need more IPs use Floating IPs.

A Server must be powered off (status `off`) in order for this operation to succeed.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `server_not_stopped` | The Server is running, but needs to be powered off |
| `primary_ip_already_assigned` | Primary IP is already assigned to a different Server |
| `server_has_ipv4` | The Server already has an IPv4 address |
| `server_has_ipv6` | The Server already has an IPv6 address |

#### HTTP Request

`POST /primary_ips/{id}/actions/assign`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Request

- assignee\_typestring  required

  Allowed: `server`

  Type of resource assigning the Primary IP to.
- assignee\_idinteger (int64) required

  ID of a resource of type `assignee_type`.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"assignee_type":"server","assignee_id":4711}' \
	"https://api.hetzner.cloud/v1/primary_ips/$ID/actions/assign"
```

#### Request

```text
{
  "assignee_type": "server",
  "assignee_id": 4711
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "assign_primary_ip",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change reverse DNS records for a Primary IP

Change the reverse DNS records for this Primary IP.

Allows to modify the PTR records set for the IP address.

#### HTTP Request

`POST /primary_ips/{id}/actions/change_dns_ptr`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Request

The `ip` attributes specifies for which IP address the record is set. For IPv4 addresses this must be the exact address of the Primary IP. For IPv6 addresses this must be a single address within the `/64` subnet of the Primary IP.

The `dns_ptr` attribute specifies the hostname used for the IP address. Must be a fully qualified domain name (FQDN) without trailing dot.

For IPv6 Primary IPs up to 100 entries can be created.

- ipstring  required

  Single IPv4 or IPv6 address to create pointer for.
- dns\_ptrstring  required

  Domain Name to point to.

  PTR record content used for reverse DNS.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ip":"2001:db8::1","dns_ptr":"server.example.com"}' \
	"https://api.hetzner.cloud/v1/primary_ips/$ID/actions/change_dns_ptr"
```

#### Request

```text
{
  "ip": "2001:db8::1",
  "dns_ptr": "server.example.com"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_dns_ptr",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change Primary IP Protection

Changes the protection configuration of a Primary IP.

A Primary IPs deletion protection can only be enabled if its `auto_delete` property is set to `false`.

#### HTTP Request

`POST /primary_ips/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Request

- deleteboolean  required

  Prevent the Resource from being deleted.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":false}' \
	"https://api.hetzner.cloud/v1/primary_ips/$ID/actions/change_protection"
```

#### Request

```text
{
  "delete": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Unassign a Primary IP from a resource

Unassign a Primary IP from a resource.

A Server must be powered off (status `off`) in order for this operation to succeed.

A Server requires at least one network interface (public or private) to be powered on.

#### Error Codes specific to this Call

| Code | Description |
| --- | --- |
| `server_not_stopped` | The Server is running, but needs to be powered off |
| `server_is_load_balancer_target` | The Server IPv4 address is a loadbalancer target |

#### HTTP Request

`POST /primary_ips/{id}/actions/unassign`

#### Path Parameters

- idinteger (int64) required

  ID of the Primary IP.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/primary_ips/$ID/actions/unassign"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "unassign_primary_ip",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "primary_ip"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## Server Actions

### List Actions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.

#### HTTP Request

`GET /servers/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a specific Action object.

#### HTTP Request

`GET /servers/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Server

Returns all Action objects for a Server. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

#### HTTP Request

`GET /servers/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "start_server",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Add a Server to a Placement Group

Adds a Server to a Placement Group.

Server must be powered off for this command to succeed.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `server_not_stopped` | The action requires a stopped server |

#### HTTP Request

`POST /servers/{id}/actions/add_to_placement_group`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- placement\_groupinteger (int64) required

  ID of Placement Group the Server should be added to.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"placement_group":1}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/add_to_placement_group"
```

#### Request

```text
{
  "placement_group": 1
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "add_to_placement_group",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Attach an ISO to a Server

Attaches an ISO to a Server. The Server will immediately see it as a new disk. An already attached ISO will automatically be detached before the new ISO is attached.

Servers with attached ISOs have a modified boot order: They will try to boot from the ISO first before falling back to hard disk.

#### HTTP Request

`POST /servers/{id}/actions/attach_iso`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- isostring  required

  ID or name of ISO to attach to the Server as listed in GET `/isos`.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"iso":"FreeBSD-11.0-RELEASE-amd64-dvd1"}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/attach_iso"
```

#### Request

```text
{
  "iso": "FreeBSD-11.0-RELEASE-amd64-dvd1"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "attach_iso",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Attach a Server to a Network

Attaches a Server to a network. This will complement the fixed public Server interface by adding an additional ethernet interface to the Server which is connected to the specified network.

The Server will get an IP auto assigned from a subnet of type `server` in the same `network_zone`.

Using the `alias_ips` attribute you can also define one or more additional IPs to the Servers. Please note that you will have to configure these IPs by hand on your Server since only the primary IP will be given out by DHCP.

**Call specific error codes**

| Code | Description |
| --- | --- |
| `server_already_attached` | The server is already attached to the network |
| `ip_not_available` | The provided Network IP is not available |
| `no_subnet_available` | No Subnet or IP is available for the Server within the network |
| `networks_overlap` | The network IP range overlaps with one of the server networks |

#### HTTP Request

`POST /servers/{id}/actions/attach_to_network`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- networkinteger (int64) required

  ID of an existing network to attach the Server to.
- ipstring

  IP to request to be assigned to this Server; if you do not provide this then you will be auto assigned an IP address.
- alias\_ipsarray of strings

  Additional IPs to be assigned to this Server.
- ip\_rangestring

  IP range in CIDR block notation of the subnet to attach to.

  This allows for auto assigning an IP address for a specific subnet.
  Providing `ip` that is not part of `ip_range` will result in an error.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"network":4711,"ip":"10.0.1.1","alias_ips":["10.0.1.2"],"ip_range":"10.0.1.0/24"}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/attach_to_network"
```

#### Request

```text
{
  "network": 4711,
  "ip": "10.0.1.1",
  "alias_ips": [
    "10.0.1.2"
  ],
  "ip_range": "10.0.1.0/24"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "attach_to_network",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change alias IPs of a Network

Changes the alias IPs of an already attached Network. Note that the existing aliases for the specified Network will be replaced with these provided in the request body. So if you want to add an alias IP, you have to provide the existing ones from the Network plus the new alias IP in the request body.

#### HTTP Request

`POST /servers/{id}/actions/change_alias_ips`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- networkinteger (int64) required

  ID of an existing Network already attached to the Server.
- alias\_ipsarray of strings  required

  New alias IPs to set for this Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"network":4711,"alias_ips":["10.0.1.2"]}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/change_alias_ips"
```

#### Request

```text
{
  "network": 4711,
  "alias_ips": [
    "10.0.1.2"
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_alias_ips",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change reverse DNS entry for this Server

Changes the hostname that will appear when getting the hostname belonging to the primary IPs (IPv4 and IPv6) of this Server.

Floating IPs assigned to the Server are not affected by this.

#### HTTP Request

`POST /servers/{id}/actions/change_dns_ptr`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`, which must be a fully qualified domain name (FQDN) without trailing dot.

- ipstring  required

  Primary IP address for which the reverse DNS entry should be set.
- dns\_ptrstring   – nullablerequired

  Hostname to set as a reverse DNS PTR entry, reset to original value if `null`.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ip":"1.2.3.4","dns_ptr":"server01.example.com"}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/change_dns_ptr"
```

#### Request

```text
{
  "ip": "1.2.3.4",
  "dns_ptr": "server01.example.com"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_dns_ptr",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change Server Protection

Changes the protection configuration of the Server.

#### HTTP Request

`POST /servers/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- deleteboolean

  If true, prevents the Server from being deleted (currently delete and rebuild attribute needs to have the same value).
- rebuildboolean

  If true, prevents the Server from being rebuilt (currently delete and rebuild attribute needs to have the same value).

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":true,"rebuild":true}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/change_protection"
```

#### Request

```text
{
  "delete": true,
  "rebuild": true
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change the Type of a Server

Changes the type (Cores, RAM and disk sizes) of a Server.

Server must be powered off for this command to succeed.

This copies the content of its disk, and starts it again.

You can only migrate to Server types with the same `storage_type` and equal or bigger disks. Shrinking disks is not possible as it might destroy data.

If the disk gets upgraded, the Server type can not be downgraded any more. If you plan to downgrade the Server type, set `upgrade_disk` to `false`.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `invalid_server_type` | The server type does not fit for the given server or is deprecated |
| `server_not_stopped` | The action requires a stopped server |

#### HTTP Request

`POST /servers/{id}/actions/change_type`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- upgrade\_diskboolean  required

  If false, do not upgrade the disk (this allows downgrading the Server type later).
- server\_typestring  required

  ID or name of Server type the Server should migrate to.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"upgrade_disk":true,"server_type":"cpx22"}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/change_type"
```

#### Request

```text
{
  "upgrade_disk": true,
  "server_type": "cpx22"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_server_type",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Create Image from a Server

Creates an Image (snapshot) from a Server by copying the contents of its disks. This creates a snapshot of the current state of the disk and copies it into an Image. If the Server is currently running you must make sure that its disk content is consistent. Otherwise, the created Image may not be readable.

To make sure disk content is consistent, we recommend to shut down the Server prior to creating an Image.

You can either create a `backup` Image that is bound to the Server and therefore will be deleted when the Server is deleted, or you can create a `snapshot` Image which is completely independent of the Server it was created from and will survive Server deletion. Backup Images are only available when the backup option is enabled for the Server. Snapshot Images are billed on a per GB basis.

#### HTTP Request

`POST /servers/{id}/actions/create_image`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- descriptionstring

  Description of the Image, will be auto-generated if not set.
- typestring

  Allowed: `snapshot` `backup`Default: `snapshot`

  Type of Image to create.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".

#### Response

- imageobject
- actionobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"description":"my image","type":"snapshot","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/create_image"
```

#### Request

```text
{
  "description": "my image",
  "type": "snapshot",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "image": {
    "id": 4711,
    "type": "snapshot",
    "status": "creating",
    "name": null,
    "description": "my image",
    "image_size": 2.3,
    "disk_size": 10,
    "created": "2016-01-30T23:50:00+00:00",
    "created_from": {
      "id": 1,
      "name": "Server"
    },
    "bound_to": null,
    "os_flavor": "ubuntu",
    "os_version": "20.04",
    "rapid_deploy": false,
    "protection": {
      "delete": false
    },
    "deprecated": "2018-02-28T00:00:00+00:00",
    "deleted": null,
    "labels": {
      "key": "value"
    },
    "architecture": "x86"
  },
  "action": {
    "id": 13,
    "command": "create_image",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Detach a Server from a Network

Detaches a Server from a network. The interface for this network will vanish.

#### HTTP Request

`POST /servers/{id}/actions/detach_from_network`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- networkinteger (int64) required

  ID of an existing network to detach the Server from.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"network":4711}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/detach_from_network"
```

#### Request

```text
{
  "network": 4711
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "detach_from_network",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Detach an ISO from a Server

Detaches an ISO from a Server. In case no ISO Image is attached to the Server, the status of the returned Action is immediately set to `success`.

#### HTTP Request

`POST /servers/{id}/actions/detach_iso`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/detach_iso"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "detach_iso",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Disable Backups for a Server

Disables the automatic backup option and deletes all existing Backups for a Server. No more additional charges for backups will be made.

Caution: This immediately removes all existing backups for the Server!

#### HTTP Request

`POST /servers/{id}/actions/disable_backup`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/disable_backup"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "disable_backup",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Disable Rescue Mode for a Server

Disables the Hetzner Rescue System for a Server. This makes a Server start from its disks on next reboot.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Disabling rescue mode will not reboot your Server — you will have to do this yourself.

#### HTTP Request

`POST /servers/{id}/actions/disable_rescue`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/disable_rescue"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "disable_rescue",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Enable and Configure Backups for a Server

Enables and configures the automatic daily backup option for the Server. Enabling automatic backups will increase the price of the Server by 20%. In return, you will get seven slots where Images of type backup can be stored.

Backups are automatically created daily.

#### HTTP Request

`POST /servers/{id}/actions/enable_backup`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/enable_backup"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "enable_backup",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Enable Rescue Mode for a Server

Enable the Hetzner Rescue System for this Server. The next time a Server with enabled rescue mode boots it will start a special minimal Linux distribution designed for repair and reinstall.

In case a Server cannot boot on its own you can use this to access a Server’s disks.

Rescue Mode is automatically disabled when you first boot into it or if you do not use it for 60 minutes.

Enabling rescue mode will not reboot your Server — you will have to do this yourself.

#### HTTP Request

`POST /servers/{id}/actions/enable_rescue`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

- typestring

  Allowed: `linux64`Default: `linux64`

  Type of rescue system to boot.
- ssh\_keysarray of integers (int64)

  Array of SSH key IDs which should be injected into the rescue system.

#### Response

- root\_passwordstring

  Password that will be set for this Server once the Action succeeds.
- actionobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"type":"linux64","ssh_keys":[2323]}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/enable_rescue"
```

#### Request

```text
{
  "type": "linux64",
  "ssh_keys": [
    2323
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "root_password": "zCWbFhnu950dUTko5f40",
  "action": {
    "id": 13,
    "command": "enable_rescue",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Power off a Server

Cuts power to the Server. This forcefully stops it without giving the Server operating system time to gracefully stop. May lead to data loss, equivalent to pulling the power cord. Power off should only be used when shutdown does not work.

#### HTTP Request

`POST /servers/{id}/actions/poweroff`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/poweroff"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "stop_server",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Power on a Server

Starts a Server by turning its power on.

#### HTTP Request

`POST /servers/{id}/actions/poweron`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/poweron"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "start_server",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Soft-reboot a Server

Reboots a Server gracefully by sending an ACPI request. The Server operating system must support ACPI and react to the request, otherwise the Server will not reboot.

#### HTTP Request

`POST /servers/{id}/actions/reboot`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/reboot"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "reboot_server",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Rebuild a Server from an Image

Rebuilds a Server overwriting its disk with the content of an Image, thereby **destroying all data** on the target Server

The Image can either be one you have created earlier (`backup` or `snapshot` Image) or it can be a completely fresh `system` Image provided by us. You can get a list of all available Images with `GET /images`.

Your Server will automatically be powered off before the rebuild command executes.

#### HTTP Request

`POST /servers/{id}/actions/rebuild`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Request

To select which Image to rebuild from you can either pass an ID or a name as the `image` argument. Passing a name only works for `system` Images since the other Image types do not have a name set.

- imagestring  required

  ID or name of Image to rebuilt from.

#### Response

- root\_passwordstring   – nullable

  New root password when not using SSH keys.
- actionobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"image":"ubuntu-24.04"}' \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/rebuild"
```

#### Request

```text
{
  "image": "ubuntu-24.04"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "rebuild_server",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  },
  "root_password": null
}
```

### Remove from Placement Group

Removes a Server from a Placement Group.

#### HTTP Request

`POST /servers/{id}/actions/remove_from_placement_group`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/remove_from_placement_group"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "remove_from_placement_group",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Request Console for a Server

Requests credentials for remote access via VNC over websocket to keyboard, monitor, and mouse for a Server. The provided URL is valid for 1 minute, after this period a new url needs to be created to connect to the Server. How long the connection is open after the initial connect is not subject to this timeout.

#### HTTP Request

`POST /servers/{id}/actions/request_console`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- wss\_urlstring  required

  URL of websocket proxy to use; this includes a token which is valid for a limited time only.
- passwordstring  required

  VNC password to use for this connection (this password only works in combination with a wss\_url with valid token).
- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/request_console"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "wss_url": "wss://console.hetzner.cloud/?server_id=1&token=3db32d15-af2f-459c-8bf8-dee1fd05f49c",
  "password": "9MQaTg2VAGI0FIpc10k3UpRXcHj2wQ6x",
  "action": {
    "id": 13,
    "command": "request_console",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Reset a Server

Cuts power to a Server and starts it again. This forcefully stops it without giving the Server operating system time to gracefully stop. This may lead to data loss, it’s equivalent to pulling the power cord and plugging it in again. Reset should only be used when reboot does not work.

#### HTTP Request

`POST /servers/{id}/actions/reset`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/reset"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "reset_server",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Reset root Password of a Server

Resets the root password. Only works for Linux systems that are running the qemu guest agent. Server must be powered on (status `running`) in order for this operation to succeed.

This will generate a new password for this Server and return it.

If this does not succeed you can use the rescue system to netboot the Server and manually change your Server password by hand.

#### HTTP Request

`POST /servers/{id}/actions/reset_password`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- root\_passwordstring

  Password that will be set for this Server once the Action succeeds.
- actionobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/reset_password"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "root_password": "zCWbFhnu950dUTko5f40",
  "action": {
    "id": 13,
    "command": "reset_password",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Shutdown a Server

Shuts down a Server gracefully by sending an ACPI shutdown request. The Server operating system must support ACPI
and react to the request, otherwise the Server will not shut down. Please note that the `action` status in this case
only reflects whether the action was sent to the server. It does not mean that the server actually shut down
successfully. If you need to ensure that the server is off, use the `poweroff` action.

#### HTTP Request

`POST /servers/{id}/actions/shutdown`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/shutdown"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "shutdown_server",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get an Action for a Server

Returns a specific Action object for a Server.

#### HTTP Request

`GET /servers/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/servers/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "start_server",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## Server Types

Server types define kinds of Servers offered. Each type has an hourly and a monthly cost. You will pay whichever cost is lower for your usage of this specific Server. Costs may differ between Locations.

All prices are displayed in the currency of the project owner's account.

### List Server Types

Gets all Server type objects.

#### HTTP Request

`GET /server_types`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- server\_typesarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/server_types"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "server_types": [
    {
      "id": 1,
      "name": "cpx22",
      "description": "CPX22",
      "cores": 2,
      "memory": 4,
      "disk": 80,
      "deprecated": false,
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "price_monthly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "included_traffic": 654321,
          "price_per_tb_traffic": {
            "net": "1.0000",
            "gross": "1.1900"
          }
        }
      ],
      "storage_type": "local",
      "cpu_type": "shared",
      "category": "Shared vCPU",
      "architecture": "x86",
      "deprecation": {
        "unavailable_after": "2023-09-01T00:00:00+00:00",
        "announced": "2023-06-01T00:00:00+00:00"
      },
      "locations": [
        {
          "id": 42,
          "name": "fsn1",
          "deprecation": {
            "unavailable_after": "2023-09-01T00:00:00+00:00",
            "announced": "2023-06-01T00:00:00+00:00"
          }
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get a Server Type

Gets a specific Server type object.

#### HTTP Request

`GET /server_types/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Server Type.

#### Response

- server\_typeobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/server_types/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "server_type": {
    "id": 1,
    "name": "cpx22",
    "description": "CPX22",
    "cores": 2,
    "memory": 4,
    "disk": 80,
    "deprecated": false,
    "prices": [
      {
        "location": "fsn1",
        "price_hourly": {
          "net": "1.0000",
          "gross": "1.1900"
        },
        "price_monthly": {
          "net": "1.0000",
          "gross": "1.1900"
        },
        "included_traffic": 654321,
        "price_per_tb_traffic": {
          "net": "1.0000",
          "gross": "1.1900"
        }
      }
    ],
    "storage_type": "local",
    "cpu_type": "shared",
    "category": "Shared vCPU",
    "architecture": "x86",
    "deprecation": {
      "unavailable_after": "2023-09-01T00:00:00+00:00",
      "announced": "2023-06-01T00:00:00+00:00"
    },
    "locations": [
      {
        "id": 42,
        "name": "fsn1",
        "deprecation": {
          "unavailable_after": "2023-09-01T00:00:00+00:00",
          "announced": "2023-06-01T00:00:00+00:00"
        }
      }
    ]
  }
}
```

## Load Balancers

### List Load Balancers

Gets all existing Load Balancers that you have available.

#### HTTP Request

`GET /load_balancers`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- load\_balancersarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "load_balancers": [
    {
      "id": 42,
      "name": "my-resource",
      "public_net": {
        "enabled": false,
        "ipv4": {
          "ip": "1.2.3.4",
          "dns_ptr": "lb1.example.com"
        },
        "ipv6": {
          "ip": "2001:db8::1",
          "dns_ptr": "lb1.example.com"
        }
      },
      "private_net": [
        {
          "network": 4711,
          "ip": "10.0.0.2"
        }
      ],
      "location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "load_balancer_type": {
        "id": 1,
        "name": "lb11",
        "description": "LB11",
        "max_connections": 20000,
        "max_services": 5,
        "max_targets": 25,
        "max_assigned_certificates": 10,
        "deprecated": "2016-01-30T23:50:00+00:00",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "price_monthly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "included_traffic": 654321,
            "price_per_tb_traffic": {
              "net": "1.0000",
              "gross": "1.1900"
            }
          }
        ]
      },
      "protection": {
        "delete": false
      },
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "created": "2016-01-30T23:55:00+00:00",
      "services": [
        {
          "protocol": "https",
          "listen_port": 443,
          "destination_port": 80,
          "proxyprotocol": false,
          "health_check": {
            "protocol": "http",
            "port": 4711,
            "interval": 15,
            "timeout": 10,
            "retries": 3,
            "http": {
              "domain": "example.com",
              "path": "/",
              "response": "{\"status\": \"ok\"}",
              "status_codes": [
                "2??",
                "3??"
              ],
              "tls": false
            }
          },
          "http": {
            "cookie_name": "HCLBSTICKY",
            "cookie_lifetime": 300,
            "certificates": [
              897
            ],
            "redirect_http": true,
            "sticky_sessions": true
          }
        }
      ],
      "targets": [
        {
          "type": "server",
          "server": {
            "id": 80
          },
          "label_selector": {
            "selector": "env=prod"
          },
          "ip": {
            "ip": "203.0.113.1"
          },
          "health_status": [
            {
              "listen_port": 443,
              "status": "healthy"
            }
          ],
          "use_private_ip": false,
          "targets": [
            {
              "type": "server",
              "server": {
                "id": 80
              },
              "health_status": [
                {
                  "listen_port": 443,
                  "status": "healthy"
                }
              ],
              "use_private_ip": false
            }
          ]
        }
      ],
      "algorithm": {
        "type": "round_robin"
      },
      "outgoing_traffic": null,
      "ingoing_traffic": null,
      "included_traffic": 10000
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Create a Load Balancer

Creates a Load Balancer.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `cloud_resource_ip_not_allowed` | The IP you are trying to add as a target belongs to a Hetzner Cloud resource |
| `ip_not_owned` | The IP is not owned by the owner of the project of the Load Balancer |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network |
| `robot_unavailable` | Robot was not available. The caller may retry the operation after a short delay. |
| `server_not_attached_to_network` | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `source_port_already_used` | The source port you are trying to add is already in use |
| `missing_ipv4` | The server that you are trying to add as a public target does not have a public IPv4 address |
| `target_already_defined` | The Load Balancer target you are trying to define is already defined |

#### HTTP Request

`POST /load_balancers`

#### Request

- namestring  required

  Name of the Load Balancer.
- load\_balancer\_typestring  required

  ID or name of the Load Balancer type this Load Balancer should be created with.
- algorithmobject

  Algorithm of the Load Balancer.
- servicesarray of objects

  Array of services.
- targetsarray of objects

  Array of targets.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- public\_interfaceboolean

  Enable or disable the public interface of the Load Balancer.
- networkinteger (int64)

  ID of the network the Load Balancer should be attached to on creation.
- network\_zonestring

  Name of network zone.
- locationstring

  ID or name of Location to create Load Balancer in.

#### Response

- load\_balancerobject  required
- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"Web Frontend","load_balancer_type":"lb11","algorithm":{"type":"round_robin"},"services":[{"protocol":"https","listen_port":443,"destination_port":80,"proxyprotocol":false,"health_check":{"protocol":"http","port":4711,"interval":15,"timeout":10,"retries":3,"http":{"domain":"example.com","path":"/","response":"{\"status\": \"ok\"}","status_codes":["2??","3??"],"tls":false}},"http":{"cookie_name":"HCLBSTICKY","cookie_lifetime":300,"certificates":[897],"redirect_http":true,"sticky_sessions":true}}],"targets":[{"type":"server","server":{"id":80},"use_private_ip":true,"label_selector":{"selector":"env=prod"},"ip":{"ip":"203.0.113.1"}}],"labels":{"environment":"prod","example.com/my":"label","just-a-key":""},"public_interface":true,"network":123,"network_zone":"eu-central","location":"fsn1"}' \
	"https://api.hetzner.cloud/v1/load_balancers"
```

#### Request

```text
{
  "name": "Web Frontend",
  "load_balancer_type": "lb11",
  "algorithm": {
    "type": "round_robin"
  },
  "services": [
    {
      "protocol": "https",
      "listen_port": 443,
      "destination_port": 80,
      "proxyprotocol": false,
      "health_check": {
        "protocol": "http",
        "port": 4711,
        "interval": 15,
        "timeout": 10,
        "retries": 3,
        "http": {
          "domain": "example.com",
          "path": "/",
          "response": "{\"status\": \"ok\"}",
          "status_codes": [
            "2??",
            "3??"
          ],
          "tls": false
        }
      },
      "http": {
        "cookie_name": "HCLBSTICKY",
        "cookie_lifetime": 300,
        "certificates": [
          897
        ],
        "redirect_http": true,
        "sticky_sessions": true
      }
    }
  ],
  "targets": [
    {
      "type": "server",
      "server": {
        "id": 80
      },
      "use_private_ip": true,
      "label_selector": {
        "selector": "env=prod"
      },
      "ip": {
        "ip": "203.0.113.1"
      }
    }
  ],
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  },
  "public_interface": true,
  "network": 123,
  "network_zone": "eu-central",
  "location": "fsn1"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "load_balancer": {
    "id": 4711,
    "name": "Web Frontend",
    "public_net": {
      "enabled": false,
      "ipv4": {
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "ip": "2001:db8::1"
      }
    },
    "private_net": [
      {
        "network": 4711,
        "ip": "10.0.0.2"
      }
    ],
    "location": {
      "id": 1,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "load_balancer_type": {
      "id": 1,
      "name": "lb11",
      "description": "LB11",
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "max_assigned_certificates": 10,
      "deprecated": "2016-01-30T23:50:00+00:00",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          },
          "price_monthly": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          },
          "included_traffic": 654321,
          "price_per_tb_traffic": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          }
        }
      ]
    },
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "services": [
      {
        "protocol": "http",
        "listen_port": 443,
        "destination_port": 80,
        "proxyprotocol": false,
        "health_check": {
          "protocol": "http",
          "port": 4711,
          "interval": 15,
          "timeout": 10,
          "retries": 3,
          "http": {
            "domain": "example.com",
            "path": "/",
            "response": "{\"status\": \"ok\"}",
            "status_codes": [
              "2??,3??"
            ],
            "tls": false
          }
        },
        "http": {
          "cookie_name": "HCLBSTICKY",
          "cookie_lifetime": 300,
          "certificates": [
            897
          ],
          "redirect_http": true,
          "sticky_sessions": true
        }
      }
    ],
    "targets": [
      {
        "type": "server",
        "server": {
          "id": 80
        },
        "health_status": [
          {
            "listen_port": 443,
            "status": "healthy"
          }
        ],
        "use_private_ip": true,
        "targets": [
          {
            "type": "server",
            "server": {
              "id": 80
            },
            "health_status": [
              {
                "listen_port": 443,
                "status": "healthy"
              }
            ],
            "use_private_ip": true
          }
        ]
      }
    ],
    "algorithm": {
      "type": "round_robin"
    },
    "outgoing_traffic": 123456,
    "ingoing_traffic": 123456,
    "included_traffic": 654321
  },
  "action": {
    "id": 13,
    "command": "create_load_balancer",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get a Load Balancer

Gets a specific Load Balancer object.

#### HTTP Request

`GET /load_balancers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Response

- load\_balancerobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "load_balancer": {
    "id": 42,
    "name": "my-resource",
    "public_net": {
      "enabled": false,
      "ipv4": {
        "ip": "1.2.3.4",
        "dns_ptr": "lb1.example.com"
      },
      "ipv6": {
        "ip": "2001:db8::1",
        "dns_ptr": "lb1.example.com"
      }
    },
    "private_net": [
      {
        "network": 4711,
        "ip": "10.0.0.2"
      }
    ],
    "location": {
      "id": 42,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "load_balancer_type": {
      "id": 1,
      "name": "lb11",
      "description": "LB11",
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "max_assigned_certificates": 10,
      "deprecated": "2016-01-30T23:50:00+00:00",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "price_monthly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "included_traffic": 654321,
          "price_per_tb_traffic": {
            "net": "1.0000",
            "gross": "1.1900"
          }
        }
      ]
    },
    "protection": {
      "delete": false
    },
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "services": [
      {
        "protocol": "https",
        "listen_port": 443,
        "destination_port": 80,
        "proxyprotocol": false,
        "health_check": {
          "protocol": "http",
          "port": 4711,
          "interval": 15,
          "timeout": 10,
          "retries": 3,
          "http": {
            "domain": "example.com",
            "path": "/",
            "response": "{\"status\": \"ok\"}",
            "status_codes": [
              "2??",
              "3??"
            ],
            "tls": false
          }
        },
        "http": {
          "cookie_name": "HCLBSTICKY",
          "cookie_lifetime": 300,
          "certificates": [
            897
          ],
          "redirect_http": true,
          "sticky_sessions": true
        }
      }
    ],
    "targets": [
      {
        "type": "server",
        "server": {
          "id": 80
        },
        "label_selector": {
          "selector": "env=prod"
        },
        "ip": {
          "ip": "203.0.113.1"
        },
        "health_status": [
          {
            "listen_port": 443,
            "status": "healthy"
          }
        ],
        "use_private_ip": false,
        "targets": [
          {
            "type": "server",
            "server": {
              "id": 80
            },
            "health_status": [
              {
                "listen_port": 443,
                "status": "healthy"
              }
            ],
            "use_private_ip": false
          }
        ]
      }
    ],
    "algorithm": {
      "type": "round_robin"
    },
    "outgoing_traffic": null,
    "ingoing_traffic": null,
    "included_traffic": 10000
  }
}
```

### Update a Load Balancer

Updates a Load Balancer. You can update a Load Balancer’s name and a Load Balancer’s labels.

Note: if the Load Balancer object changes during the request, the response will be a “conflict” error.

#### HTTP Request

`PUT /load_balancers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- namestring

  New Load Balancer name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- load\_balancerobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"new-name","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID"
```

#### Request

```text
{
  "name": "new-name",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "load_balancer": {
    "id": 4711,
    "name": "new-name",
    "public_net": {
      "enabled": false,
      "ipv4": {
        "ip": "1.2.3.4"
      },
      "ipv6": {
        "ip": "2001:db8::1"
      }
    },
    "private_net": [
      {
        "network": 4711,
        "ip": "10.0.0.2"
      }
    ],
    "location": {
      "id": 1,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "load_balancer_type": {
      "id": 1,
      "name": "lb11",
      "description": "LB11",
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "max_assigned_certificates": 10,
      "deprecated": "2016-01-30T23:50:00+00:00",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          },
          "price_monthly": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          },
          "included_traffic": 654321,
          "price_per_tb_traffic": {
            "net": "1.0000000000",
            "gross": "1.1900000000000000"
          }
        }
      ]
    },
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "services": [
      {
        "protocol": "http",
        "listen_port": 443,
        "destination_port": 80,
        "proxyprotocol": false,
        "health_check": {
          "protocol": "http",
          "port": 4711,
          "interval": 15,
          "timeout": 10,
          "retries": 3,
          "http": {
            "domain": "example.com",
            "path": "/",
            "response": "{\"status\": \"ok\"}",
            "status_codes": [
              "2??,3??"
            ],
            "tls": false
          }
        },
        "http": {
          "cookie_name": "HCLBSTICKY",
          "cookie_lifetime": 300,
          "certificates": [
            897
          ],
          "redirect_http": true,
          "sticky_sessions": true
        }
      }
    ],
    "targets": [
      {
        "type": "server",
        "server": {
          "id": 80
        },
        "health_status": [
          {
            "listen_port": 443,
            "status": "healthy"
          }
        ],
        "use_private_ip": true,
        "label_selector": {
          "selector": "env=prod"
        },
        "ip": {
          "ip": "203.0.113.1"
        },
        "targets": [
          {
            "type": "server",
            "server": {
              "id": 80
            },
            "health_status": [
              {
                "listen_port": 443,
                "status": "healthy"
              }
            ],
            "use_private_ip": true
          }
        ]
      }
    ],
    "algorithm": {
      "type": "round_robin"
    },
    "outgoing_traffic": 123456,
    "ingoing_traffic": 123456,
    "included_traffic": 654321
  }
}
```

### Delete a Load Balancer

Deletes a Load Balancer.

#### HTTP Request

`DELETE /load_balancers/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/$ID"
```

#### Response headers

```text
Status: 204
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/metrics?type=$TYPE&start=$START&end=$END"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "metrics": {
    "start": "2017-01-01T00:00:00+00:00",
    "end": "2017-01-01T23:00:00+00:00",
    "step": 60,
    "time_series": {
      "name_of_timeseries": {
        "values": [
          [
            1435781470.622,
            "42"
          ],
          [
            1435781471.622,
            "43"
          ]
        ]
      }
    }
  }
}
```

## Load Balancer Actions

### List Actions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.

#### HTTP Request

`GET /load_balancers/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a specific Action object.

#### HTTP Request

`GET /load_balancers/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Load Balancer

Returns all Action objects for a Load Balancer. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.

#### HTTP Request

`GET /load_balancers/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "add_service",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 4711,
          "type": "load_balancer"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Add Service

Adds a service to a Load Balancer.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `source_port_already_used` | The source port you are trying to add is already in use |

#### HTTP Request

`POST /load_balancers/{id}/actions/add_service`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- protocolstring  required

  Allowed: `tcp` `http` `https`

  Protocol of the Load Balancer.
- listen\_portinteger  required

  Port the Load Balancer listens on.
- destination\_portinteger  required

  Port the Load Balancer will balance to.
- proxyprotocolboolean  required

  Is Proxyprotocol enabled or not.
- health\_checkobject  required

  Service health check.
- httpobject

  Configuration option for protocols http and https.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"protocol":"https","listen_port":443,"destination_port":80,"proxyprotocol":false,"health_check":{"protocol":"http","port":4711,"interval":15,"timeout":10,"retries":3,"http":{"domain":"example.com","path":"/","response":"{\"status\": \"ok\"}","status_codes":["2??","3??"],"tls":false}},"http":{"cookie_name":"HCLBSTICKY","cookie_lifetime":300,"certificates":[897],"redirect_http":true,"sticky_sessions":true}}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/add_service"
```

#### Request

```text
{
  "protocol": "https",
  "listen_port": 443,
  "destination_port": 80,
  "proxyprotocol": false,
  "health_check": {
    "protocol": "http",
    "port": 4711,
    "interval": 15,
    "timeout": 10,
    "retries": 3,
    "http": {
      "domain": "example.com",
      "path": "/",
      "response": "{\"status\": \"ok\"}",
      "status_codes": [
        "2??",
        "3??"
      ],
      "tls": false
    }
  },
  "http": {
    "cookie_name": "HCLBSTICKY",
    "cookie_lifetime": 300,
    "certificates": [
      897
    ],
    "redirect_http": true,
    "sticky_sessions": true
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "add_service",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Add Target

Adds a target to a Load Balancer.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `cloud_resource_ip_not_allowed` | The IP you are trying to add as a target belongs to a Hetzner Cloud resource |
| `ip_not_owned` | The IP you are trying to add as a target is not owned by the Project owner |
| `load_balancer_public_interface_disabled` | The Load Balancer's public network interface is disabled |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network |
| `robot_unavailable` | Robot was not available. The caller may retry the operation after a short delay. |
| `server_not_attached_to_network` | The server you are trying to add as a target is not attached to the same network as the Load Balancer |
| `missing_ipv4` | The server that you are trying to add as a public target does not have a public IPv4 address |
| `target_already_defined` | The Load Balancer target you are trying to define is already defined |

#### HTTP Request

`POST /load_balancers/{id}/actions/add_target`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- typestring  required

  Allowed: `server` `label_selector` `ip`

  Type of the resource.
- serverobject

  Configuration for type Server, only valid and required if type is `server`.
- use\_private\_ipboolean

  Default: `false`

  Use the private network IP instead of the public IP of the Server, requires the Server and Load Balancer to be in the same network. Only valid for target types `server` and `label_selector`.
- label\_selectorobject

  Configuration for label selector targets, only valid and required if type is `label_selector`.
- ipobject

  Configuration for an IP target. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only valid and required if type is `ip`.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"type":"server","server":{"id":80},"use_private_ip":true,"label_selector":{"selector":"env=prod"},"ip":{"ip":"203.0.113.1"}}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/add_target"
```

#### Request

```text
{
  "type": "server",
  "server": {
    "id": 80
  },
  "use_private_ip": true,
  "label_selector": {
    "selector": "env=prod"
  },
  "ip": {
    "ip": "203.0.113.1"
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "add_target",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Attach a Load Balancer to a Network

Attach a Load Balancer to a Network.

**Call specific error codes**

| Code | Description |
| --- | --- |
| `load_balancer_already_attached` | The Load Balancer is already attached to a network |
| `ip_not_available` | The provided Network IP is not available |
| `no_subnet_available` | No Subnet or IP is available for the Load Balancer within the network |

#### HTTP Request

`POST /load_balancers/{id}/actions/attach_to_network`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- networkinteger (int64) required

  ID of an existing network to attach the Load Balancer to.
- ipstring

  IP to request to be assigned to this Load Balancer; if you do not provide this then you will be auto assigned an IP address.
- ip\_rangestring

  IP range in CIDR block notation of the subnet to attach to.

  This allows for auto assigning an IP address for a specific subnet.
  Providing `ip` that is not part of `ip_range` will result in an error.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"network":4711,"ip":"10.0.1.1","ip_range":"10.0.1.0/24"}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/attach_to_network"
```

#### Request

```text
{
  "network": 4711,
  "ip": "10.0.1.1",
  "ip_range": "10.0.1.0/24"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "attach_to_network",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change Algorithm

Change the algorithm that determines to which target new requests are sent.

#### HTTP Request

`POST /load_balancers/{id}/actions/change_algorithm`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- typestring  required

  Allowed: `round_robin` `least_connections`

  Algorithm of the Load Balancer.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"type":"round_robin"}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/change_algorithm"
```

#### Request

```text
{
  "type": "round_robin"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_algorithm",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change reverse DNS entry for this Load Balancer

Changes the hostname that will appear when getting the hostname belonging to the public IPs (IPv4 and IPv6) of this Load Balancer.

Floating IPs assigned to the Server are not affected by this.

#### HTTP Request

`POST /load_balancers/{id}/actions/change_dns_ptr`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

Select the IP address for which to change the DNS entry by passing `ip`. It can be either IPv4 or IPv6. The target hostname is set by passing `dns_ptr`, which must be a fully qualified domain name (FQDN) without trailing dot.

- ipstring  required

  Public IP address for which the reverse DNS entry should be set.
- dns\_ptrstring   – nullablerequired

  Hostname to set as a reverse DNS PTR entry.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ip":"1.2.3.4","dns_ptr":"lb1.example.com"}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/change_dns_ptr"
```

#### Request

```text
{
  "ip": "1.2.3.4",
  "dns_ptr": "lb1.example.com"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_dns_ptr",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change Load Balancer Protection

Changes the protection configuration of a Load Balancer.

#### HTTP Request

`POST /load_balancers/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- deleteboolean

  If true, prevents the Load Balancer from being deleted.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":true}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/change_protection"
```

#### Request

```text
{
  "delete": true
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change the Type of a Load Balancer

Changes the type (Max Services, Max Targets and Max Connections) of a Load Balancer.

**Call specific error codes**

| Code | Description |
| --- | --- |
| `invalid_load_balancer_type` | The Load Balancer type does not fit for the given Load Balancer |

#### HTTP Request

`POST /load_balancers/{id}/actions/change_type`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- load\_balancer\_typestring  required

  ID or name of Load Balancer type the Load Balancer should migrate to.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"load_balancer_type":"lb21"}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/change_type"
```

#### Request

```text
{
  "load_balancer_type": "lb21"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_load_balancer_type",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Delete Service

Delete a service of a Load Balancer.

#### HTTP Request

`POST /load_balancers/{id}/actions/delete_service`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- listen\_portinteger  required

  The listen port of the service you want to delete.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"listen_port":443}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/delete_service"
```

#### Request

```text
{
  "listen_port": 443
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "delete_service",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Detach a Load Balancer from a Network

Detaches a Load Balancer from a network.

#### HTTP Request

`POST /load_balancers/{id}/actions/detach_from_network`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- networkinteger (int64) required

  ID of an existing network to detach the Load Balancer from.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"network":4711}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/detach_from_network"
```

#### Request

```text
{
  "network": 4711
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "detach_from_network",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Disable the public interface of a Load Balancer

Disable the public interface of a Load Balancer. The Load Balancer will be not accessible from the internet via its public IPs.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `load_balancer_not_attached_to_network` | The Load Balancer is not attached to a network |
| `targets_without_use_private_ip` | The Load Balancer has targets that use the public IP instead of the private IP |

#### HTTP Request

`POST /load_balancers/{id}/actions/disable_public_interface`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/disable_public_interface"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "disable_public_interface",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Enable the public interface of a Load Balancer

Enable the public interface of a Load Balancer. The Load Balancer will be accessible from the internet via its public IPs.

#### HTTP Request

`POST /load_balancers/{id}/actions/enable_public_interface`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/enable_public_interface"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "enable_public_interface",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Remove Target

Removes a target from a Load Balancer.

#### HTTP Request

`POST /load_balancers/{id}/actions/remove_target`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- typestring  required

  Allowed: `server` `label_selector` `ip`

  Type of the resource.
- serverobject

  Configuration for type Server, required if type is `server`.
- label\_selectorobject

  Configuration for label selector targets, required if type is `label_selector`.
- ipobject

  IP target where the traffic should be routed to. It is only possible to use the (Public or vSwitch) IPs of Hetzner Online Root Servers belonging to the project owner. IPs belonging to other users are blocked. Additionally IPs belonging to services provided by Hetzner Cloud (Servers, Load Balancers, ...) are blocked as well. Only present for target type `ip`.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"type":"server","server":{"id":80},"label_selector":{"selector":"env=prod"},"ip":{"ip":"203.0.113.1"}}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/remove_target"
```

#### Request

```text
{
  "type": "server",
  "server": {
    "id": 80
  },
  "label_selector": {
    "selector": "env=prod"
  },
  "ip": {
    "ip": "203.0.113.1"
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "remove_target",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Update Service

Updates a Load Balancer Service.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `source_port_already_used` | The source port you are trying to add is already in use |

#### HTTP Request

`POST /load_balancers/{id}/actions/update_service`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.

#### Request

- protocolstring

  Allowed: `tcp` `http` `https`

  Protocol of the Load Balancer.
- listen\_portinteger  required

  Port the Load Balancer listens on.
- destination\_portinteger

  Port the Load Balancer will balance to.
- proxyprotocolboolean

  Is Proxyprotocol enabled or not.
- health\_checkobject

  Service health check.
- httpobject

  Configuration option for protocols http and https.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"protocol":"https","listen_port":443,"destination_port":80,"proxyprotocol":false,"health_check":{"protocol":"http","port":4711,"interval":15,"timeout":10,"retries":3,"http":{"domain":"example.com","path":"/","response":"{\"status\": \"ok\"}","status_codes":["2??","3??"],"tls":false}},"http":{"cookie_name":"HCLBSTICKY","cookie_lifetime":300,"certificates":[897],"redirect_http":true,"sticky_sessions":true}}' \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/update_service"
```

#### Request

```text
{
  "protocol": "https",
  "listen_port": 443,
  "destination_port": 80,
  "proxyprotocol": false,
  "health_check": {
    "protocol": "http",
    "port": 4711,
    "interval": 15,
    "timeout": 10,
    "retries": 3,
    "http": {
      "domain": "example.com",
      "path": "/",
      "response": "{\"status\": \"ok\"}",
      "status_codes": [
        "2??",
        "3??"
      ],
      "tls": false
    }
  },
  "http": {
    "cookie_name": "HCLBSTICKY",
    "cookie_lifetime": 300,
    "certificates": [
      897
    ],
    "redirect_http": true,
    "sticky_sessions": true
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "update_service",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get an Action for a Load Balancer

Returns a specific Action for a Load Balancer.

#### HTTP Request

`GET /load_balancers/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancers/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "load_balancer"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## Load Balancer Types

Load Balancer types define kinds of Load Balancers offered. Each type has an hourly and a monthly cost. You will pay whichever amount is lower for your usage of this specific Load Balancer. Costs may differ between Locations.

All prices are displayed in the currency of the project owner's account.

### List Load Balancer Types

Gets all Load Balancer type objects.

#### HTTP Request

`GET /load_balancer_types`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- load\_balancer\_typesarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancer_types"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "load_balancer_types": [
    {
      "id": 1,
      "name": "lb11",
      "description": "LB11",
      "max_connections": 20000,
      "max_services": 5,
      "max_targets": 25,
      "max_assigned_certificates": 10,
      "deprecated": "2016-01-30T23:50:00+00:00",
      "prices": [
        {
          "location": "fsn1",
          "price_hourly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "price_monthly": {
            "net": "1.0000",
            "gross": "1.1900"
          },
          "included_traffic": 654321,
          "price_per_tb_traffic": {
            "net": "1.0000",
            "gross": "1.1900"
          }
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get a Load Balancer Type

Gets a specific Load Balancer type object.

#### HTTP Request

`GET /load_balancer_types/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Load Balancer Type.

#### Response

- load\_balancer\_typeobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/load_balancer_types/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "load_balancer_type": {
    "id": 1,
    "name": "lb11",
    "description": "LB11",
    "max_connections": 20000,
    "max_services": 5,
    "max_targets": 25,
    "max_assigned_certificates": 10,
    "deprecated": "2016-01-30T23:50:00+00:00",
    "prices": [
      {
        "location": "fsn1",
        "price_hourly": {
          "net": "1.0000",
          "gross": "1.1900"
        },
        "price_monthly": {
          "net": "1.0000",
          "gross": "1.1900"
        },
        "included_traffic": 654321,
        "price_per_tb_traffic": {
          "net": "1.0000",
          "gross": "1.1900"
        }
      }
    ]
  }
}
```

## Networks

Networks is a private networks feature. These Networks are optional and they coexist with the public network that every Server has by default.

They allow Servers to talk to each other over a dedicated network interface using private IP addresses not available publicly.

The IP addresses are allocated and managed via the API, they must conform to RFC1918 standard. IPs and network interfaces defined under Networks do not provide public internet connectivity, you will need to use the already existing public network interface for that.

Each network has a user selected `ip_range` which defines all available IP addresses which can be used for Subnets within the Network.

To assign individual IPs to Servers you will need to create Network Subnets, described below.

Currently Networks support IPv4 only.

### Subnets

Subnets divide the `ip_range` from the parent Network object into multiple Subnetworks that you can use for different specific purposes.

For each subnet you need to specify its own `ip_range` which must be contained within the parent Network’s `ip_range`. Additionally each subnet must belong to one of the available Network Zones described below. Subnets can not have overlapping IP ranges.

Currently there are three types of subnet:

- type `cloud` is used to connect cloud Resources into your Network.
- type `server` was used to connect only cloud Servers into your Network. This type is deprecated and is replaced by type cloud.
- type `vswitch` allows you to connect Dedicated Server vSwitch - and all Dedicated Servers attached to it - into your Network

Subnets of type `vswitch` must set a `vswitch_id` which is the ID of the existing vSwitch in Hetzner Robot that should be coupled.

### Network Zones

Network Zones are groups of Locations which have special high-speed network connections between them. The Location object contains the `network_zone` property each Location belongs to. Currently these network zones exist:

| Network Zone | Contains Locations |
| --- | --- |
| eu-central | nbg1, fsn1, hel1 |
| us-east | ash |
| us-west | hil |
| ap-southeast | sin |

### IP address management

When a cloud Server is attached to a network without the user specifying an IP it automatically gets an IP address assigned from a subnet of type `server` in the same network zone. If you specify the optional `ip` parameter when attaching then we will try to assign that IP. Keep in mind that the Server’s location must be covered by the Subnet’s Network Zone if you specify an IP, or that at least one Subnet with the zone covering Server’s location must exist.

A cloud Server can also have more than one IP address in a Network by specifying aliases. For details see the attach to network action.

The following IP addresses are reserved in networks and can not be used:

- the first IP of the network `ip_range` as it will be used as a default gateway for the private Network interface.
- `172.31.1.1` as it is being used as default gateway for our public Network interfaces.

### Coupling Dedicated Servers

By using subnets of type `vswitch` you can couple the Cloud Networks with an existing Dedicated Server vSwitch and enable dedicated and cloud servers to
talk to each other over the Network.
In order for this to work the dedicated servers may only use IPs from the subnet and must have a special network configuration. Please refer to FAQ. vSwitch Layer 2 features are not supported.

### Routes

Networks also support the notion of routes which are automatically applied to private traffic. A route makes sure that all packets for a given `destination` IP prefix will be sent to the address specified in its `gateway`.

### List Networks

List multiple Networks.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /networks`

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- networksarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/networks"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "networks": [
    {
      "id": 4711,
      "name": "mynet",
      "ip_range": "10.0.0.0/16",
      "subnets": [
        {
          "type": "cloud",
          "ip_range": "10.0.1.0/24",
          "network_zone": "eu-central",
          "gateway": "10.0.0.1",
          "vswitch_id": 1000
        }
      ],
      "routes": [
        {
          "destination": "10.100.1.0/24",
          "gateway": "10.0.1.1"
        }
      ],
      "servers": [
        42
      ],
      "load_balancers": [
        42
      ],
      "protection": {
        "delete": false
      },
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "created": "2016-01-30T23:55:00+00:00",
      "expose_routes_to_vswitch": false
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Create a Network

Creates a Network.

The provided `ip_range` can only be extended later on, but not reduced.

Subnets can be added now or later on using the add subnet action. If you do not specify an `ip_range` for the subnet the first available /24 range will be used.

Routes can be added now or later by using the add route action.

#### HTTP Request

`POST /networks`

#### Request

- namestring  required

  Name of the Network.
- ip\_rangestring  required

  IP range of the Network.

  Uses CIDR notation.

  Must span all included subnets. Must be one of the private IPv4 ranges of RFC1918.

  Minimum network size is /24. We highly recommend that you pick a larger Network with a /16 netmask.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- subnetsarray of objects

  Array of subnets to allocate.
- routesarray of objects

  Array of routes set in this Network.
- expose\_routes\_to\_vswitchboolean

  Toggle to expose routes to the Networks vSwitch.

  Indicates if the routes from this Network should be exposed to the vSwitch in this Network. Only takes effect if a vSwitch is setup in this Network.

#### Response

- networkobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"mynet","ip_range":"10.0.0.0/16","labels":{"environment":"prod","example.com/my":"label","just-a-key":""},"subnets":[{"type":"cloud","ip_range":"10.0.1.0/24","network_zone":"eu-central","vswitch_id":1000}],"routes":[{"destination":"10.100.1.0/24","gateway":"10.0.1.1"}],"expose_routes_to_vswitch":false}' \
	"https://api.hetzner.cloud/v1/networks"
```

#### Request

```text
{
  "name": "mynet",
  "ip_range": "10.0.0.0/16",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  },
  "subnets": [
    {
      "type": "cloud",
      "ip_range": "10.0.1.0/24",
      "network_zone": "eu-central",
      "vswitch_id": 1000
    }
  ],
  "routes": [
    {
      "destination": "10.100.1.0/24",
      "gateway": "10.0.1.1"
    }
  ],
  "expose_routes_to_vswitch": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "network": {
    "id": 4711,
    "name": "mynet",
    "ip_range": "10.0.0.0/16",
    "subnets": [
      {
        "type": "cloud",
        "ip_range": "10.0.1.0/24",
        "network_zone": "eu-central",
        "gateway": "10.0.0.1",
        "vswitch_id": 1000
      }
    ],
    "routes": [
      {
        "destination": "10.100.1.0/24",
        "gateway": "10.0.1.1"
      }
    ],
    "servers": [
      42
    ],
    "load_balancers": [
      42
    ],
    "protection": {
      "delete": false
    },
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "expose_routes_to_vswitch": false
  }
}
```

### Get a Network

Get a specific Network.

#### HTTP Request

`GET /networks/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Response

- networkobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/networks/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "network": {
    "id": 4711,
    "name": "mynet",
    "ip_range": "10.0.0.0/16",
    "subnets": [
      {
        "type": "cloud",
        "ip_range": "10.0.1.0/24",
        "network_zone": "eu-central",
        "gateway": "10.0.0.1",
        "vswitch_id": 1000
      }
    ],
    "routes": [
      {
        "destination": "10.100.1.0/24",
        "gateway": "10.0.1.1"
      }
    ],
    "servers": [
      42
    ],
    "load_balancers": [
      42
    ],
    "protection": {
      "delete": false
    },
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "created": "2016-01-30T23:55:00+00:00",
    "expose_routes_to_vswitch": false
  }
}
```

### Update a Network

Update a Network.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`PUT /networks/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- namestring

  New Network name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".
- expose\_routes\_to\_vswitchboolean

  Toggle to expose routes to the Networks vSwitch.

  Indicates if the routes from this Network should be exposed to the vSwitch in this Network. Only takes effect if a vSwitch is setup in this Network.

#### Response

- networkobject

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"new-name","labels":{"environment":"prod","example.com/my":"label","just-a-key":""},"expose_routes_to_vswitch":false}' \
	"https://api.hetzner.cloud/v1/networks/$ID"
```

#### Request

```text
{
  "name": "new-name",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  },
  "expose_routes_to_vswitch": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "network": {
    "id": 4711,
    "name": "new-name",
    "ip_range": "10.0.0.0/16",
    "subnets": [
      {
        "type": "cloud",
        "ip_range": "10.0.1.0/24",
        "network_zone": "eu-central",
        "gateway": "10.0.0.1"
      }
    ],
    "routes": [
      {
        "destination": "10.100.1.0/24",
        "gateway": "10.0.1.1"
      }
    ],
    "servers": [
      42
    ],
    "load_balancers": [
      42
    ],
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "expose_routes_to_vswitch": true
  }
}
```

### Delete a Network

Deletes a Network.

Attached resources will be detached automatically.

#### HTTP Request

`DELETE /networks/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/networks/$ID"
```

#### Response headers

```text
Status: 204
```

## Network Actions

### List Actions

Lists multiple Actions.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /networks/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/networks/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a single Action.

#### HTTP Request

`GET /networks/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/networks/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Network

Lists Actions for a Network.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /networks/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/networks/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "add_subnet",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Add a route to a Network

Adds a route entry to a Network.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/add_route`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- destinationstring  required

  Destination network or host of the route.

  Packages addressed for IPs matching the destination IP prefix will be send to the specified gateway.

  Must be one of

  - private IPv4 ranges of RFC1918
  - or `0.0.0.0/0`.

  Must not overlap with

  - an existing ip\_range in any subnets
  - or with any destinations in other routes
  - or with `172.31.1.1`.

  `172.31.1.1` is being used as a gateway for the public network interface of Servers.
- gatewaystring  required

  Gateway of the route.

  Packages addressed for the specified destination will be send to this IP address.

  Cannot be

  - the first IP of the networks ip\_range,
  - an IP behind a vSwitch or
  - `172.31.1.1`.

  `172.31.1.1` is being used as a gateway for the public network interface of Servers.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"destination":"10.100.1.0/24","gateway":"10.0.1.1"}' \
	"https://api.hetzner.cloud/v1/networks/$ID/actions/add_route"
```

#### Request

```text
{
  "destination": "10.100.1.0/24",
  "gateway": "10.0.1.1"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "add_route",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Add a subnet to a Network

Adds a new subnet to the Network.

If the subnet `ip_range` is not provided, the first available `/24` IP range will be used.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/add_subnet`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- typestring  required

  Allowed: `cloud` `server` `vswitch`

  Type of subnet.

  - `cloud` - Used to connect cloud Servers and Load Balancers.
  - `server` - Same as the `cloud` type. **Deprecated**, use the `cloud` type instead.
  - `vswitch` - Used to connect cloud Servers and Load Balancers with dedicated Servers.
- ip\_rangestring

  IP range of the subnet.

  Uses CIDR notation.

  Must be a subnet of the parent Networks `ip_range`.

  Must not overlap with any other subnets or with any destinations in routes.

  Minimum network size is /30. We highly recommend that you pick a larger subnet with a /24 netmask.
- network\_zonestring  required

  Name of the Network Zone.

  The Location contains the `network_zone` it belongs to.
- vswitch\_idinteger (int64)

  ID of the robot vSwitch.

  Must be supplied if the subnet is of type `vswitch`.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"type":"cloud","ip_range":"10.0.1.0/24","network_zone":"eu-central","vswitch_id":1000}' \
	"https://api.hetzner.cloud/v1/networks/$ID/actions/add_subnet"
```

#### Request

```text
{
  "type": "cloud",
  "ip_range": "10.0.1.0/24",
  "network_zone": "eu-central",
  "vswitch_id": 1000
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "add_subnet",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change IP range of a Network

Changes the IP range of a Network.

The following restrictions apply to changing the IP range:

- IP ranges can only be extended and never shrunk.
- IPs can only be added to the end of the existing range, therefore only the netmask is allowed to be changed.

To update the routes on the connected Servers, they need to be rebooted or the routes to be updated manually.

For example if the Network has a range of `10.0.0.0/16` to extend it the new range has to start with the IP `10.0.0.0` as well. The netmask `/16` can be changed to a smaller one then `16` therefore increasing the IP range. A valid entry would be `10.0.0.0/15`, `10.0.0.0/14` or `10.0.0.0/13` and so on.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/change_ip_range`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- ip\_rangestring  required

  IP range of the Network.

  Uses CIDR notation.

  Must span all included subnets. Must be one of the private IPv4 ranges of RFC1918.

  Minimum network size is /24. We highly recommend that you pick a larger Network with a /16 netmask.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ip_range":"10.0.0.0/16"}' \
	"https://api.hetzner.cloud/v1/networks/$ID/actions/change_ip_range"
```

#### Request

```text
{
  "ip_range": "10.0.0.0/16"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_ip_range",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change Network Protection

Changes the protection settings of a Network.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- deleteboolean

  Delete protection setting.

  If true, prevents the Network from being deleted.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":true}' \
	"https://api.hetzner.cloud/v1/networks/$ID/actions/change_protection"
```

#### Request

```text
{
  "delete": true
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Delete a route from a Network

Delete a route entry from a Network.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/delete_route`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- destinationstring  required

  Destination network or host of the route.

  Packages addressed for IPs matching the destination IP prefix will be send to the specified gateway.

  Must be one of

  - private IPv4 ranges of RFC1918
  - or `0.0.0.0/0`.

  Must not overlap with

  - an existing ip\_range in any subnets
  - or with any destinations in other routes
  - or with `172.31.1.1`.

  `172.31.1.1` is being used as a gateway for the public network interface of Servers.
- gatewaystring  required

  Gateway of the route.

  Packages addressed for the specified destination will be send to this IP address.

  Cannot be

  - the first IP of the networks ip\_range,
  - an IP behind a vSwitch or
  - `172.31.1.1`.

  `172.31.1.1` is being used as a gateway for the public network interface of Servers.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"destination":"10.100.1.0/24","gateway":"10.0.1.1"}' \
	"https://api.hetzner.cloud/v1/networks/$ID/actions/delete_route"
```

#### Request

```text
{
  "destination": "10.100.1.0/24",
  "gateway": "10.0.1.1"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "delete_route",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Delete a subnet from a Network

Deletes a single subnet entry from a Network.

Subnets containing attached resources can not be deleted, they must be detached beforehand.

If a change is currently being performed on this Network, a error response with code `conflict` will be returned.

#### HTTP Request

`POST /networks/{id}/actions/delete_subnet`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.

#### Request

- ip\_rangestring  required

  IP range in CIDR block notation of the subnet to delete.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ip_range":"10.0.1.0/24"}' \
	"https://api.hetzner.cloud/v1/networks/$ID/actions/delete_subnet"
```

#### Request

```text
{
  "ip_range": "10.0.1.0/24"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "delete_subnet",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get an Action for a Network

Returns a specific Action for a Network.

#### HTTP Request

`GET /networks/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Network.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/networks/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "add_subnet",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 4711,
        "type": "network"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## Billing

## Pricing

Returns prices for resources.

### Get all prices

Returns prices for all resources available on the platform. VAT and currency of the Project owner are used for calculations.

Both net and gross prices are included in the response.

#### HTTP Request

`GET /pricing`

#### Response

- pricingobject  required

#### Example request

cURLGo

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/pricing"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "pricing": {
    "currency": "EUR",
    "vat_rate": "19.00",
    "primary_ips": [
      {
        "type": "ipv4",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "price_monthly": {
              "net": "1.0000",
              "gross": "1.1900"
            }
          }
        ]
      }
    ],
    "floating_ips": [
      {
        "type": "ipv4",
        "prices": [
          {
            "location": "fsn1",
            "price_monthly": {
              "net": "1.0000",
              "gross": "1.1900"
            }
          }
        ]
      }
    ],
    "image": {
      "price_per_gb_month": {
        "net": "1.0000",
        "gross": "1.1900"
      }
    },
    "volume": {
      "price_per_gb_month": {
        "net": "1.0000",
        "gross": "1.1900"
      }
    },
    "server_backup": {
      "percentage": "20.00"
    },
    "server_types": [
      {
        "id": 104,
        "name": "cpx22",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "price_monthly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "included_traffic": 654321,
            "price_per_tb_traffic": {
              "net": "1.0000",
              "gross": "1.1900"
            }
          }
        ]
      }
    ],
    "load_balancer_types": [
      {
        "id": 1,
        "name": "lb11",
        "prices": [
          {
            "location": "fsn1",
            "price_hourly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "price_monthly": {
              "net": "1.0000",
              "gross": "1.1900"
            },
            "included_traffic": 654321,
            "price_per_tb_traffic": {
              "net": "1.0000",
              "gross": "1.1900"
            }
          }
        ]
      }
    ],
    "floating_ip": {
      "price_monthly": {
        "net": "1.0000",
        "gross": "1.1900"
      }
    }
  }
}
```

## Volumes

A Volume is a highly-available, scalable, and SSD-based block storage for Servers.

Pricing for Volumes depends on the Volume size and Location, not the actual used storage.

Please see Hetzner Docs for more details about Volumes.

### List Volumes

Gets all existing Volumes that you have available.

#### HTTP Request

`GET /volumes`

#### Query Parameters

- statusarray of strings

  Allowed: `available` `creating`

  Filter resources by status. Can be used multiple times. The response will only
  contain the resources with the specified status.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- volumesarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "volumes": [
    {
      "id": 42,
      "created": "2016-01-30T23:55:00+00:00",
      "name": "my-resource",
      "server": 12,
      "location": {
        "id": 42,
        "name": "fsn1",
        "description": "Falkenstein DC Park 1",
        "country": "DE",
        "city": "Falkenstein",
        "latitude": 50.47612,
        "longitude": 12.370071,
        "network_zone": "eu-central"
      },
      "size": 42,
      "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
      "protection": {
        "delete": false
      },
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "status": "available",
      "format": "xfs"
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Create a Volume

Creates a new Volume attached to a Server. If you want to create a Volume that is not attached to a Server, you need to provide the `location` key instead of `server`. This can be either the ID or the name of the Location this Volume will be created in. Note that a Volume can be attached to a Server only in the same Location as the Volume itself.

Specifying the Server during Volume creation will automatically attach the Volume to that Server after it has been initialized. In that case, the `next_actions` key in the response is an array which contains a single `attach_volume` action.

The minimum Volume size is 10GB and the maximum size is 10TB (10240GB).

A volume’s name can consist of alphanumeric characters, dashes, underscores, and dots, but has to start and end with an alphanumeric character. The total length is limited to 64 characters. Volume names must be unique per Project.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `no_space_left_in_location` | There is no volume space left in the given location |

#### HTTP Request

`POST /volumes`

#### Request

- sizeinteger  required

  Size of the Volume in GB.
- namestring  required

  Name of the volume.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- automountboolean

  Auto-mount Volume after attach. `server` must be provided.
- formatstring

  Format Volume after creation. One of: `xfs`, `ext4`.
- locationstring

  Location to create the Volume in (can be omitted if Server is specified).
- serverinteger (int64)

  Server to which to attach the Volume once it's created (Volume will be created in the same Location as the server).

#### Response

- volumeobject  required
- actionobject  required
- next\_actionsarray of objects  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"size":42,"name":"test-database","labels":{"key":"value"},"location":"nbg1","automount":false,"format":"xfs"}' \
	"https://api.hetzner.cloud/v1/volumes"
```

#### Request

```text
{
  "size": 42,
  "name": "test-database",
  "labels": {
    "key": "value"
  },
  "location": "nbg1",
  "automount": false,
  "format": "xfs"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "volume": {
    "id": 4711,
    "created": "2016-01-30T23:50:11+00:00",
    "name": "database-storage",
    "server": 12,
    "location": {
      "id": 1,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "size": 42,
    "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "status": "available",
    "format": "xfs"
  },
  "action": {
    "id": 13,
    "command": "create_volume",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  },
  "next_actions": [
    {
      "id": 13,
      "command": "attach_volume",
      "status": "running",
      "progress": 0,
      "started": "2016-01-30T23:50:00+00:00",
      "finished": null,
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 554,
          "type": "volume"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ]
}
```

### Get a Volume

Gets a specific Volume object.

#### HTTP Request

`GET /volumes/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Response

- volumeobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "volume": {
    "id": 42,
    "created": "2016-01-30T23:55:00+00:00",
    "name": "my-resource",
    "server": 12,
    "location": {
      "id": 42,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "size": 42,
    "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
    "protection": {
      "delete": false
    },
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "status": "available",
    "format": "xfs"
  }
}
```

### Update a Volume

Updates the Volume properties.

#### HTTP Request

`PUT /volumes/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Request

- namestring

  New Volume name.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- volumeobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"database-storage","labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/volumes/$ID"
```

#### Request

```text
{
  "name": "database-storage",
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "volume": {
    "id": 4711,
    "created": "2016-01-30T23:50:11+00:00",
    "name": "database-storage",
    "server": 12,
    "location": {
      "id": 1,
      "name": "fsn1",
      "description": "Falkenstein DC Park 1",
      "country": "DE",
      "city": "Falkenstein",
      "latitude": 50.47612,
      "longitude": 12.370071,
      "network_zone": "eu-central"
    },
    "size": 42,
    "linux_device": "/dev/disk/by-id/scsi-0HC_Volume_4711",
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "status": "available",
    "format": "xfs"
  }
}
```

### Delete a Volume

Deletes a volume. All Volume data is irreversibly destroyed. The Volume must not be attached to a Server and it must not have delete protection enabled.

#### HTTP Request

`DELETE /volumes/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes/$ID"
```

#### Response headers

```text
Status: 204
```

## Volume Actions

### List Actions

Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` and `id` parameter.

#### HTTP Request

`GET /volumes/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a specific Action object.

#### HTTP Request

`GET /volumes/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Volume

Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.

#### HTTP Request

`GET /volumes/{id}/actions`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes/$ID/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 13,
      "command": "attach_volume",
      "status": "success",
      "progress": 100,
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:56:00+00:00",
      "resources": [
        {
          "id": 42,
          "type": "server"
        },
        {
          "id": 13,
          "type": "volume"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "per_page": 25,
      "previous_page": null,
      "next_page": null,
      "last_page": 1,
      "total_entries": 21
    }
  }
}
```

### Attach Volume to a Server

Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.

#### HTTP Request

`POST /volumes/{id}/actions/attach`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Request

- serverinteger (int64) required

  ID of the Server the Volume will be attached to.
- automountboolean

  Auto-mount the Volume after attaching it.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"server":43,"automount":false}' \
	"https://api.hetzner.cloud/v1/volumes/$ID/actions/attach"
```

#### Request

```text
{
  "server": 43,
  "automount": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "attach_volume",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 43,
        "type": "server"
      },
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Change Volume Protection

Changes the protection configuration of a Volume.

#### HTTP Request

`POST /volumes/{id}/actions/change_protection`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Request

- deleteboolean

  If true, prevents the Volume from being deleted.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":true}' \
	"https://api.hetzner.cloud/v1/volumes/$ID/actions/change_protection"
```

#### Request

```text
{
  "delete": true
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "change_protection",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      },
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Detach Volume

Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.

#### HTTP Request

`POST /volumes/{id}/actions/detach`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes/$ID/actions/detach"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "detach_volume",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Resize Volume

Changes the size of a Volume. Note that downsizing a Volume is not possible.

#### HTTP Request

`POST /volumes/{id}/actions/resize`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.

#### Request

- sizenumber  required

  New Volume size in GB (must be greater than current size).

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"size":50}' \
	"https://api.hetzner.cloud/v1/volumes/$ID/actions/resize"
```

#### Request

```text
{
  "size": 50
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "resize_volume",
    "status": "running",
    "progress": 0,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 554,
        "type": "volume"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### Get an Action for a Volume

Returns a specific Action for a Volume.

#### HTTP Request

`GET /volumes/{id}/actions/{action_id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Volume.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/volumes/$ID/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 13,
    "command": "attach_volume",
    "status": "success",
    "progress": 100,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:56:00+00:00",
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

## DNS

## Zones

A Zone represents a Domain Name System (DNS) zone managed by Hetzner authoritative nameservers.
Please see Hetzner Docs for the difference between zones and domains.

This API supports all zone names with well-known public suffixes (e.g. `.de`, `.com`, `.co.uk`).
Subdomains are not supported.

### Zone Modes

This API supports two types of zone modes.

- In *primary* mode, resource record sets (RRSets) and resource records (RRs) are managed via the Cloud API or Hetzner Console.
- In *secondary* mode, Hetzner's nameservers query RRSets and RRs from given primary nameservers via AXFR.

The zone mode cannot be changed, the zone must be deleted and re-created with a new mode.

### SOA Serial

For zones in primary mode, Hetzner automatically increases the `SOA` record serial number.
As convention, a `YYYYMMDDnn` format with incrementing `nn` is used.

### Zone file import

This API supports importing a zone file in BIND (RFC 1034/1035) format.

Importing a zone file is only applicable for Zones in primary mode.

During an import:

- An `$ORIGIN` directive may be present, it must match the Zone's name with an ending dot
- A `$TTL` directive may be present, it is used as new default Zone Time To Live (TTL)
- Only `IN` (internet) class records are allowed
- The assigned authoritative Hetzner nameservers must be present as `NS` records
- A `SOA` record must be present
- Comments for individual records are imported, comments on their own lines are discarded

Zone file example:

```text
$ORIGIN	example.com.
$TTL	3600

@	IN	SOA	hydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600

@	IN	10800	NS	hydrogen.ns.hetzner.com. ; Some comment.
@	IN	10800	NS	oxygen.ns.hetzner.com.
@	IN	10800	NS	helium.ns.hetzner.de.
```

### List Zones

Returns all Zones.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /zones`

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- modestring

  Allowed: `primary` `secondary`

  Filter resources by their mode. The response will only contain the resources
  matching exactly the specified mode.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- zonesarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "zones": [
    {
      "id": 42,
      "name": "example.com",
      "created": "2016-01-30T23:55:00+00:00",
      "mode": "primary",
      "primary_nameservers": [
        {
          "address": "198.51.100.1",
          "port": 53
        },
        {
          "address": "203.0.113.1",
          "port": 53
        }
      ],
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "protection": {
        "delete": false
      },
      "ttl": 10800,
      "status": "ok",
      "record_count": 0,
      "authoritative_nameservers": {
        "assigned": [
          "hydrogen.ns.hetzner.com.",
          "oxygen.ns.hetzner.com.",
          "helium.ns.hetzner.de."
        ],
        "delegated": [
          "hydrogen.ns.hetzner.com.",
          "oxygen.ns.hetzner.com.",
          "helium.ns.hetzner.de."
        ],
        "delegation_last_check": "2016-01-30T23:55:00+00:00",
        "delegation_status": "valid"
      },
      "registrar": "hetzner"
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Create a Zone

Creates a Zone.

A default `SOA` and three `NS` resource records with the assigned Hetzner
nameservers are created automatically.

#### HTTP Request

`POST /zones`

#### Request

- namestring  required

  Name of the Zone.

  All names with well-known public suffixes (e.g. `.de`,
  `.com`, `.co.uk`) are supported. Subdomains are not supported.

  The name must be in lower case and must not end with a dot.
  Internationalized domain
  names must be
  transcribed to Punycode representation with
  ACE prefix, e.g. `xn--mnchen-3ya.de` (`münchen.de`).
- modestring  required

  Allowed: `primary` `secondary`

  Mode of the Zone.

  For more information, see Zone Modes.
- ttlinteger

  Default: `3600`

  Default Time To Live (TTL) of the Zone.

  Must be in between 60s and 2147483647s.

  This TTL is used for RRSets that do not explicitly define a TTL.
- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.
  For more information, see "Labels".
- primary\_nameserversarray of objects

  Primary nameservers of the Zone.

  Only applicable for Zones in secondary mode.
  Ignored for Zones in primary mode.
- rrsetsarray of objects

  RRSets to be added to the Zone.

  Only applicable for Zones in primary mode.
  Ignored for Zones in secondary mode.
- zonefilestring

  Zone file to import.

  Only applicable for Zones in primary mode.
  Ignored for Zones in secondary mode.

  If provided, `rrsets` must be empty.

  See Zone file import for more details.

#### Response

- zoneobject  required
- actionobject  required

#### Example request

cURL (primary)cURL (primary from zone file)cURL (secondary)Go (primary from zone file)Go (primary)Go (secondary)Python (primary from zone file)Python (primary)Python (secondary)CLI (primary from zone file)CLI (primary)CLI (secondary)

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"example.com","mode":"primary","ttl":10800,"labels":{"key":"value"},"rrsets":[{"name":"www","type":"A","records":[{"value":"198.51.100.1","comment":"My web server at Hetzner Cloud."}]}]}' \
	"https://api.hetzner.cloud/v1/zones"
```

#### Request

primaryprimary from zone filesecondary

```text
{
  "name": "example.com",
  "mode": "primary",
  "ttl": 10800,
  "labels": {
    "key": "value"
  },
  "rrsets": [
    {
      "name": "www",
      "type": "A",
      "records": [
        {
          "value": "198.51.100.1",
          "comment": "My web server at Hetzner Cloud."
        }
      ]
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "zone": {
    "id": 42,
    "name": "example.com",
    "mode": "primary",
    "status": "ok",
    "ttl": 3600,
    "record_count": 4,
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "registrar": "hetzner",
    "authoritative_nameservers": {
      "assigned": [
        "hydrogen.ns.hetzner.com.",
        "oxygen.ns.hetzner.com.",
        "helium.ns.hetzner.de."
      ],
      "delegated": [
        "hydrogen.ns.hetzner.com.",
        "oxygen.ns.hetzner.com.",
        "helium.ns.hetzner.de."
      ],
      "delegation_last_check": "2016-01-30T23:50:00+00:00",
      "delegation_status": "valid"
    }
  },
  "action": {
    "id": 1,
    "command": "create_zone",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Get a Zone

Returns a single Zone.

#### HTTP Request

`GET /zones/{id_or_name}`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Response

- zoneobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "zone": {
    "id": 42,
    "name": "example.com",
    "created": "2016-01-30T23:55:00+00:00",
    "mode": "primary",
    "primary_nameservers": [
      {
        "address": "198.51.100.1",
        "port": 53
      },
      {
        "address": "203.0.113.1",
        "port": 53
      }
    ],
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "protection": {
      "delete": false
    },
    "ttl": 10800,
    "status": "ok",
    "record_count": 0,
    "authoritative_nameservers": {
      "assigned": [
        "hydrogen.ns.hetzner.com.",
        "oxygen.ns.hetzner.com.",
        "helium.ns.hetzner.de."
      ],
      "delegated": [
        "hydrogen.ns.hetzner.com.",
        "oxygen.ns.hetzner.com.",
        "helium.ns.hetzner.de."
      ],
      "delegation_last_check": "2016-01-30T23:55:00+00:00",
      "delegation_status": "valid"
    },
    "registrar": "hetzner"
  }
}
```

### Update a Zone

Updates a Zone.

To modify resource record sets (RRSets), use the RRSet Actions
endpoints.

#### HTTP Request

`PUT /zones/{id_or_name}`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- zoneobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME"
```

#### Request

```text
{
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "zone": {
    "id": 42,
    "name": "example.com",
    "mode": "primary",
    "status": "ok",
    "ttl": 3600,
    "record_count": 4,
    "protection": {
      "delete": false
    },
    "labels": {
      "key": "value"
    },
    "created": "2016-01-30T23:50:00+00:00",
    "registrar": "hetzner",
    "authoritative_nameservers": {
      "assigned": [
        "hydrogen.ns.hetzner.com.",
        "oxygen.ns.hetzner.com.",
        "helium.ns.hetzner.de."
      ],
      "delegated": [
        "hydrogen.ns.hetzner.com.",
        "oxygen.ns.hetzner.com.",
        "helium.ns.hetzner.de."
      ],
      "delegation_last_check": "2016-01-30T23:50:00+00:00",
      "delegation_status": "valid"
    }
  }
}
```

### Delete a Zone

Deletes a Zone.

#### HTTP Request

`DELETE /zones/{id_or_name}`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "delete_zone",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:50:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Export a Zone file

Returns a generated Zone file in BIND (RFC 1034/1035) format.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`GET /zones/{id_or_name}/zonefile`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Response

- zonefilestring  required

  Generated zone file.

  Example:

  ```text
  $ORIGIN	example.com.
  $TTL	3600

  @	IN	SOA	hydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600

  @	IN	10800	NS	hydrogen.ns.hetzner.com. ; Some comment.
  @	IN	10800	NS	oxygen.ns.hetzner.com.
  @	IN	10800	NS	helium.ns.hetzner.de.
  ```

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/zonefile"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "zonefile": "$ORIGIN\texample.com.\n$TTL\t3600\n\n@\tIN\tSOA\thydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600\n\n@\tIN\t10800\tNS\thydrogen.ns.hetzner.com. ; Some comment.\n@\tIN\t10800\tNS\toxygen.ns.hetzner.com.\n@\tIN\t10800\tNS\thelium.ns.hetzner.de.\n"
}
```

## Zone Actions

### List Actions

Returns all Zone Actions.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /zones/actions`

#### Query Parameters

- idarray of integers (int64)

  Filter the actions by ID. Can be used multiple times. The response will only contain
  actions matching the specified IDs.
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action

Returns a specific Action.

#### HTTP Request

`GET /zones/actions/{id}`

#### Path Parameters

- idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

cURLGoPython

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/actions/$ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 42,
    "command": "start_resource",
    "status": "running",
    "started": "2016-01-30T23:55:00+00:00",
    "finished": "2016-01-30T23:55:00+00:00",
    "progress": 100,
    "resources": [
      {
        "id": 42,
        "type": "server"
      }
    ],
    "error": {
      "code": "action_failed",
      "message": "Action failed"
    }
  }
}
```

### List Actions for a Zone

Returns all Actions for a Zone.

Use the provided URI parameters to modify the result.

#### HTTP Request

`GET /zones/{id_or_name}/actions`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Query Parameters

- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `command` `command:asc` `command:desc` `status` `status:asc` `status:desc` `started` `started:asc` `started:desc` `finished` `finished:asc` `finished:desc`

  Sort actions by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- statusarray of strings

  Allowed: `running` `success` `error`

  Filter the actions by status. Can be used multiple times. The response will only
  contain actions matching the specified statuses.
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- actionsarray of objects  required
- metaobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/actions"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "actions": [
    {
      "id": 42,
      "command": "start_resource",
      "status": "running",
      "started": "2016-01-30T23:55:00+00:00",
      "finished": "2016-01-30T23:55:00+00:00",
      "progress": 100,
      "resources": [
        {
          "id": 42,
          "type": "server"
        }
      ],
      "error": {
        "code": "action_failed",
        "message": "Action failed"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

### Get an Action for a Zone

Returns a specific Action for a Zone.

#### HTTP Request

`GET /zones/{id_or_name}/actions/{action_id}`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.
- action\_idinteger (int64) required

  ID of the Action.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/actions/$ACTION_ID"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "import_zonefile",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Change a Zone's Primary Nameservers

Overwrites the primary nameservers of a Zone.

Only applicable for Zones in secondary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in secondary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/actions/change_primary_nameservers`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- primary\_nameserversarray of objects  required

  Primary nameservers of the Zone.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"primary_nameservers":[{"address":"198.51.100.1","port":53},{"address":"203.0.113.1","port":53}]}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/actions/change_primary_nameservers"
```

#### Request

```text
{
  "primary_nameservers": [
    {
      "address": "198.51.100.1",
      "port": 53
    },
    {
      "address": "203.0.113.1",
      "port": 53
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "change_primary_nameservers",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Change a Zone's Protection

Changes the protection configuration of a Zone.

#### HTTP Request

`POST /zones/{id_or_name}/actions/change_protection`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- deleteboolean

  Prevents the Zone from being deleted.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"delete":false}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/actions/change_protection"
```

#### Request

```text
{
  "delete": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "change_protection",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Change a Zone's Default TTL

Changes the default Time To Live (TTL) of a Zone.

This TTL is used for RRSets that do not explicitly define a TTL.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/actions/change_ttl`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- ttlinteger  required

  Default: `3600`

  Default Time To Live (TTL) of the Zone.

  Must be in between 60s and 2147483647s.

  This TTL is used for RRSets that do not explicitly define a TTL.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ttl":10800}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/actions/change_ttl"
```

#### Request

```text
{
  "ttl": 10800
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "change_ttl",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 1,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Import a Zone file

Imports a zone file, replacing all resource record sets (RRSets).

The import will fail if existing RRSet are `change` protected.

See Zone file import for more details.
Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/actions/import_zonefile`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Request

- zonefilestring  required

  Zone file to import.

  See Zone file import for more details.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"zonefile":"$ORIGIN\texample.com.\n$TTL\t3600\n\n@\tIN\tSOA\thydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600\n\n@\tIN\t10800\tNS\thydrogen.ns.hetzner.com. ; Some comment.\n@\tIN\t10800\tNS\toxygen.ns.hetzner.com.\n@\tIN\t10800\tNS\thelium.ns.hetzner.de.\n"}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/actions/import_zonefile"
```

#### Request

```text
{
  "zonefile": "$ORIGIN\texample.com.\n$TTL\t3600\n\n@\tIN\tSOA\thydrogen.ns.hetzner.com. dns.hetzner.com. 2024010100 86400 10800 3600000 3600\n\n@\tIN\t10800\tNS\thydrogen.ns.hetzner.com. ; Some comment.\n@\tIN\t10800\tNS\toxygen.ns.hetzner.com.\n@\tIN\t10800\tNS\thelium.ns.hetzner.de.\n"
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "import_zonefile",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

## Zone RRSets

This API operates on resource record sets (RRSets) instead of individual resource records (RRs).
An RRSet is identified by a name and type. For example, the two RRs

- (name: `@`, type: `MX`, value: `10 smtp.example.com.`) and
- (name: `@`, type: `MX`, value: `20 smtp-backup.example.com.`)

are part of the RRSet identified by (name: `@`, type: `MX`).

Please see Hetzner Docs for more information on types.

### List RRSets

Returns all RRSets in the Zone.

Use the provided URI parameters to modify the result.

The maximum value for `per_page` on this endpoint is `100` instead of `50`.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`GET /zones/{id_or_name}/rrsets`

#### Path Parameters

- id\_or\_namestring  required

  ID or Name of the Zone.

#### Query Parameters

- namestring

  Filter resources by their name. The response will only contain the resources
  matching exactly the specified name.
- typearray of strings

  Allowed: `A` `AAAA` `CAA` `CNAME` `DS` `HINFO` `HTTPS` `MX` `NS` `PTR` `RP` `SOA` `SRV` `SVCB` `TLSA` `TXT`

  Filter resources by their type. Can be used multiple times. The response will only
  contain resources matching the specified types.
- label\_selectorstring

  Filter resources by labels. The response will only contain resources matching the
  label selector. For more information, see "Label Selector".
- sortarray of strings

  Allowed: `id` `id:asc` `id:desc` `name` `name:asc` `name:desc` `created` `created:asc` `created:desc`

  Sort resources by field and direction. Can be used multiple times. For more
  information, see "Sorting".
- pageinteger (int64)

  Default: `1`

  Page number to return. For more information, see "Pagination".
- per\_pageinteger (int64)

  Default: `25`

  Maximum number of entries returned per page. For more information, see "Pagination".

#### Response

- rrsetsarray of objects  required
- metaobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "rrsets": [
    {
      "id": "string",
      "name": "www",
      "type": "A",
      "ttl": 3600,
      "labels": {
        "environment": "prod",
        "example.com/my": "label",
        "just-a-key": ""
      },
      "protection": {
        "change": false
      },
      "records": [
        {
          "value": "198.51.100.1",
          "comment": "My web server at Hetzner Cloud."
        }
      ],
      "zone": 42
    }
  ],
  "meta": {
    "pagination": {
      "page": 3,
      "per_page": 25,
      "previous_page": 2,
      "next_page": 4,
      "last_page": 4,
      "total_entries": 100
    }
  }
}
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"name":"www","type":"A","ttl":3600,"records":[{"value":"198.51.100.1","comment":"My web server at Hetzner Cloud."}],"labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets"
```

#### Request

```text
{
  "name": "www",
  "type": "A",
  "ttl": 3600,
  "records": [
    {
      "value": "198.51.100.1",
      "comment": "My web server at Hetzner Cloud."
    }
  ],
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "rrset": {
    "id": "www/A",
    "name": "www",
    "type": "A",
    "ttl": 3600,
    "labels": {
      "key": "value"
    },
    "protection": {
      "change": false
    },
    "records": [
      {
        "value": "198.51.100.1",
        "comment": "My web server at Hetzner Cloud."
      }
    ],
    "zone": 42
  },
  "action": {
    "id": 1,
    "command": "create_rrset",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Get an RRSet

Returns a single RRSet from the Zone.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`GET /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}`

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

- rrsetobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE"
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "rrset": {
    "id": "string",
    "name": "www",
    "type": "A",
    "ttl": 3600,
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "protection": {
      "change": false
    },
    "records": [
      {
        "value": "198.51.100.1",
        "comment": "My web server at Hetzner Cloud."
      }
    ],
    "zone": 42
  }
}
```

### Update an RRSet

Updates an RRSet in the Zone.

Only applicable for Zones in primary mode.

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`PUT /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}`

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

- labelsobject

  User-defined labels (`key/value` pairs) for the Resource.

  Note that the set of Labels provided in the request will overwrite the
  existing one.

  For more information, see "Labels".

#### Response

- rrsetobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X PUT \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"labels":{"environment":"prod","example.com/my":"label","just-a-key":""}}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE"
```

#### Request

```text
{
  "labels": {
    "environment": "prod",
    "example.com/my": "label",
    "just-a-key": ""
  }
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "rrset": {
    "id": "www/A",
    "name": "www",
    "type": "A",
    "ttl": null,
    "records": [
      {
        "value": "198.51.100.1",
        "comment": "My web server at Hetzner Cloud."
      }
    ],
    "labels": {
      "environment": "prod",
      "example.com/my": "label",
      "just-a-key": ""
    },
    "protection": {
      "change": false
    },
    "zone": 42
  }
}
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-X DELETE \
	-H "Authorization: Bearer $API_TOKEN" \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE"
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "delete_rrset",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

## Zone RRSet Actions

### Change an RRSet's Protection

Changes the protection of an RRSet in the Zone.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/change_protection`

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

- changeboolean  required

  Prevent the Resource from being changed.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"change":false}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE/actions/change_protection"
```

#### Request

```text
{
  "change": false
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "change_rrset_protection",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Change an RRSet's TTL

Changes the Time To Live (TTL) of an RRSet in the Zone.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/change_ttl`

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

- ttlinteger   – nullablerequired

  Time To Live (TTL) of the RRSet.

  Must be in between 60s and 2147483647s.

  If not set, the Zone's Default TTL is used.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ttl":3600}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE/actions/change_ttl"
```

#### Request

```text
{
  "ttl": 3600
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "change_rrset_ttl",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"records":[{"value":"198.51.100.1","comment":"My web server at Hetzner Cloud."}]}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE/actions/set_records"
```

#### Request

```text
{
  "records": [
    {
      "value": "198.51.100.1",
      "comment": "My web server at Hetzner Cloud."
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "set_rrset_records",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Add Records to an RRSet

Adds resource records (RRs) to an RRSet in the Zone.

For convenience, the RRSet will be automatically created if it doesn't exist. Otherwise, the new
records are appended to the existing RRSet.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/add_records`

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

- ttlinteger   – nullable

  Time To Live (TTL) of the RRSet.

  If not set, the Zone's Default TTL is used.
  If set, and the RRSet being updated already has a TTL, the values must be the same.
- recordsarray of objects  required

  Records to add to the RRSet.

  Must not be empty and must only contain distinct record values.

#### Response

- actionobject  required

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"ttl":3600,"records":[{"value":"198.51.100.1","comment":"My web server at Hetzner Cloud."}]}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE/actions/add_records"
```

#### Request

```text
{
  "ttl": 3600,
  "records": [
    {
      "value": "198.51.100.1",
      "comment": "My web server at Hetzner Cloud."
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "add_rrset_records",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

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

#### Example request

cURLGoPythonCLI

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"records":[{"value":"198.51.100.1","comment":"My web server at Hetzner Cloud."}]}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE/actions/remove_records"
```

#### Request

```text
{
  "records": [
    {
      "value": "198.51.100.1",
      "comment": "My web server at Hetzner Cloud."
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 201
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "remove_rrset_records",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```

### Update Records of an RRSet

Updates resource records' (RRs) comments of an existing RRSet in the Zone.

Only applicable for Zones in primary mode.

#### Call specific error codes

| Code | Description |
| --- | --- |
| `incorrect_zone_mode` | The zone is not in primary mode. |

#### HTTP Request

`POST /zones/{id_or_name}/rrsets/{rr_name}/{rr_type}/actions/update_records`

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

  Records to update in the RRSet.

  Must not be empty and must only contain distinct record values.

#### Response

- actionobject  required

#### Example request

```text
curl \
	-X POST \
	-H "Authorization: Bearer $API_TOKEN" \
	-H "Content-Type: application/json" \
	-d '{"records":[{"value":"198.51.100.1","comment":"My web server at Hetzner Cloud."}]}' \
	"https://api.hetzner.cloud/v1/zones/$ID_OR_NAME/rrsets/$RR_NAME/$RR_TYPE/actions/update_records"
```

#### Request

```text
{
  "records": [
    {
      "value": "198.51.100.1",
      "comment": "My web server at Hetzner Cloud."
    }
  ]
}
```

#### Response headers

```text
Content-Type: application/json
Status: 200
```

#### Response sample

```text
{
  "action": {
    "id": 1,
    "command": "update_rrset_records",
    "status": "running",
    "progress": 50,
    "started": "2016-01-30T23:55:00+00:00",
    "finished": null,
    "resources": [
      {
        "id": 42,
        "type": "zone"
      }
    ],
    "error": null
  }
}
```
