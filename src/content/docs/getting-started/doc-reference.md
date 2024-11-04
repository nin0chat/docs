---
title: Documentation Reference
description: Reference pertaining to the nin0chat docs
---

We have our own way of describing aspects of the API, here are some you may see throughout the docs.

## Nullability in Resource Fields
Resource fields that may contain a null value have types that are prefixed with a question mark. Resource fields that are optional have names that are suffixed with a question mark.

:::note
Some fields that are only `null` or missing in very specific scenarios will be marked with a footnote rather than the above rules.
See the table below for an example.
:::

| Field                        | Type    |
| ---------------------------- | ------- |
| optional_field? ^1^          | string  |
| nullable_field               | string? |
| optional_and_nullable_field? | string? |

^1^ May be `null` if accessed after the invention of time travel

## Badges
Some requests will have badges that concisely define common behaviors.

###### Unauthenticated
Denotes that the endpoint does not require authorization.

###### User Only
Only works for normal user accounts and will not work with bot accounts.

###### Bot Only
Only works for bot accounts and is not available for normal users.

###### Internal
Only designed to be used by official clients. Should not be implemented in any bot or third-party client.

###### Deprecated
Denotes that a route is deprecated. This means that although its still functional, it will be removed sometime in the future.