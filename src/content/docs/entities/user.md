---
title: User
description: A user that can interact with nin0chat
---

A user is an entitity that can interact with nin0chat. A user can be controlled by a human or programmatically by a bot.

| Field      | Type                     | Description                                       |
| ---------- | ------------------------ | ------------------------------------------------- |
| id         | snowflake                | The id that corresponds to this user              |
| username   | string                   | The username for this user                        |
| email? ^1^ | string                   | The email belonging to this user                  |
| activated  | boolean                  | Whether or not this users email has been verified |
| role       | bitfield ([role](#role)) | The bitfield flags representing the users roles   |

^1^ Only present when fetching the logged in user

###### Example

```json
{
    "id": "3305938962411520",
    "username": "Example",
    "email": "user@example.com",
    "activated": true,
    "role": 0
}
```

## Role

A role is a collection of permissions and restrictions that can be applied to a user.

:::note
Apart from the `Guest` and `User` roles, none are mutually exclusive.
:::

| Name   | Flag   | Description                                                     |
| ------ | ------ | --------------------------------------------------------------- |
| Guest  | 1 << 0 | Anonymous user with certain restrictions                        |
| User   | 1 << 1 | Normal user                                                     |
| Bot    | 1 << 2 | Automated account                                               |
| System | 1 << 3 | Account operated by the server                                  |
| Mod    | 1 << 4 | User with additional capabilites used to moderate chat messages |
| Admin  | 1 << 5 | User with full permissions and no restrictions                  |
