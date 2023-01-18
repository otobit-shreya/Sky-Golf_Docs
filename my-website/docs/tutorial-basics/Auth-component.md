---
sidebar_position: 2
---

# Auth component

This component gives the description related to the authentication.

# 1.) GET refresh token

**description**: This component helps you get the refresh token.

**Params**: -

**URL**:
```
http://192.168.1.221:4000/auth/refresh-token
```

**Output**:
```
{
    "success": true,
    "data": {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczNDIyNjE3LCJleHAiOjE2NzQyODY2MTd9.jFLXq7-rnVJEf0W-ScDCqGtxdGk3zv-0cYldL2ogA6k",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjczNDIyNjE3LCJleHAiOjE2NzYwMTQ2MTd9.M2aja3sCNGEjzz_TJV5TmKTOktxMxO4t_bsPhIg9plA",
        "user": {
            "id": 1,
            "name": "admin",
            "phoneNumber": "9090909090",
            "email": null,
            "isLocked": false,
            "lastLogin": "2023-01-09T09:28:16.026Z",
            "lastActivity": null,
            "gender": "male",
            "birthdate": "2022-10-01",
            "pin": "$2a$12$5zABRRF1c2QRCOakyQzQlOBMCbUvQj2PEZtfMJi98nYl6Zw3WHUZO",
            "createdAt": "2022-11-10T04:13:42.300Z",
            "role": {
                "id": 1,
                "name": "admin",
                "createdAt": "2022-11-10T04:13:39.315Z"
            }
        }
    }
}
```

# 2.) POST Login

**description**: This API allows to create a login

**Body**:
```
{
    "phoneNumber": "9090909090",
    "pin": "101010"
}
```

**URL**:
```
http://192.168.1.221:4000/auth/login
```