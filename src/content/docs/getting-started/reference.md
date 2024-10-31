---
title: API Reference
description: What you need to know before using the API
---

The nin0chat API comprises both an HTTP/REST API and a WebSocket API. All request and response bodies are in JSON format, unless specified otherwise.

##### Base URL
The base URL to use for all requests is
```
https://chatapi.nin0.dev/api
```

## Authentication
Authenticating with our API requires an authentication token.
This can be obtained either by logging in as a user or by creating a bot.

###### Example Authorization Header
```
Authorization: 3305938962411520.312657.ljvNB3xhXhFObwZQqyHxJ90XV6gcRP7VrO8VXiVpSdtI6cbpvPG4NJCNcECgA3AuPTr14CTPfGbAVpD
```

## Errors
The API will send any errors with a non-success [status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and the following body.

| Field   | Type   | Description                                 |
| ------- | ------ | ------------------------------------------- |
| code    | int    | The API-specific [error code](#error-codes) |
| message | string | A human-readable error message              |

##### Error Codes
| Code | Name            | Description                                                                 |
| ---- | --------------- | --------------------------------------------------------------------------- |
| 0    | ValidationError | Could not validate the request body                                         |
| 1    | AuthError       | Could not log in or authorize a request                                     |
| 2    | MessageError    |                                                                             |
| 3    | DataError       |                                                                             |
| 4    | ConflictError   |                                                                             |
| 5    | PermissionError | The client performing the request does not have the appropriate permissions |
| 6    | NotFoundError   | The requested resource could not be found                                   |

###### Example
```json
{
  "code": 1,
  "message: "Invalid username or password"
}
```

## Snowflake Format

nin0chat utilizes Twitter's [snowflake](https://github.com/twitter/snowflake/tree/snowflake-2010) format for uniquely identifiable descriptors (IDs). These IDs are guaranteed to be unique. Because Snowflake IDs are up to 64 bits in size (e.g. a uint64), they are always returned as strings in the REST API to prevent integer overflows in some languages.

###### Snowflake ID Broken Down in Binary

```
111111111111111111111111111111111111111111 11111 11111 111111111111
64                                         22    17    12          0
```

###### Snowflake ID Format Structure (Left to Right)

| Field               | Bits     | Number of bits | Description                                                                | Retrieval                           |
| ------------------- | -------- | -------------- | -------------------------------------------------------------------------- | ----------------------------------- |
| Timestamp           | 63 to 22 | 42 bits        | Milliseconds since the nin0chat epoch, or `1729373102932`.                 | `(snowflake >> 22) + 1729373102932` |
| Internal worker ID  | 21 to 17 | 5 bits         |                                                                            | `(snowflake & 0x3E0000) >> 17`      |
| Internal process ID | 16 to 12 | 5 bits         |                                                                            | `(snowflake & 0x1F000) >> 12`       |
| Increment           | 11 to 0  | 12 bits        | For every ID that is generated on that process, this number is incremented | `snowflake & 0xFFF`                 |