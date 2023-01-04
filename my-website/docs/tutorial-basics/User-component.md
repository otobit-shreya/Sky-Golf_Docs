---
sidebar_position: 2
---

# User Component

The User Component allows you to create a list of users, create different roles for the users and allows you to

# 1.) GET All Users

**Description** : Displays all the users

**Params** : 1.) page 2.) per_page

**URL**:

```
http://192.168.1.221:4000/user
```

**Output**:

```
          {
            "id": 7,
            "name": "admin",
            "phoneNumber": "9876543211",
            "email": null,
            "isLocked": false,
            "lastLogin": null,
            "lastActivity": null,
            "gender": "male",
            "birthdate": "2022-10-01",
            "pin": null,
            "createdAt": "2022-11-16T07:09:42.726Z"
        },
```

# 2.) GET User By Phone Number

**Description** : Get User by its phone number

**Params** : 1.) phoneNumber=1111111112

**URL**:

```
http://192.168.1.221:4000/user/search
```

**Output**:

```
  {
    "success": true,
    "data": {
        "id": 13,
        "name": "admin",
        "phoneNumber": "1111111112",
        "email": null,
        "isLocked": false,
        "lastLogin": null,
        "lastActivity": null,
        "gender": "male",
        "birthdate": "2000-11-01",
        "pin": null,
        "createdAt": "2022-12-09T13:35:20.754Z",
        "role": {
            "id": 2,
            "name": "customer",
            "createdAt": "2022-11-10T04:13:39.372Z"
        }
    }
}
```

# 3.) GET Role

**Description** : Gets user by its role

**Params/body** : -

**URL**:

```
http://192.168.1.221:4000/user/role
```

**Output**:

```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "admin",
            "createdAt": "2022-11-10T04:13:39.315Z"
        },
        {
            "id": 2,
            "name": "customer",
            "createdAt": "2022-11-10T04:13:39.372Z"
        },
    ]
}
```

# 4.) GET User By id

**Description** : Get user by id

**Params/body** : -

**URL**:

```
http://192.168.1.221:4000/user/id
```

**Output**:

```
{
    "success": true,
    "data": {
        "id": 5,
        "name": "TEST USER 44",
        "phoneNumber": "9876543210",
        "email": null,
        "isLocked": false,
        "lastLogin": null,
        "lastActivity": null,
        "gender": "male",
        "birthdate": "2022-10-01",
        "pin": "$2a$12$Z3PnzATA7R4Ow8h2iaKRA.pqWtSLbRgI3A0fzVZGB1OMcj6Tv/bAa",
        "createdAt": "2022-11-12T12:18:51.757Z",
        "role": {
            "id": 2,
            "name": "customer",
            "createdAt": "2022-11-10T04:13:39.372Z"
        }
    }
}
```

# 5.) POST User

**Description** : Creates a user

**body** :
 ```
{
    "name": "admin",
    "phoneNumber": "9090909090",
    "secret": "TG@@OTOBIT132",
    "role": "admin", 
    "pin": "101010",
    "birthdate":"2022-10-01",
    "gender":"male"
}
```

**URL**:

```
http://192.168.1.221:4000/user
```


**Output**:

```
{
    "success": true,
    "data": {
        "name": "test001",
        "phoneNumber": "9090909091",
        "gender": "male",
        "birthdate": "2022-10-01",
        "pin": "$2a$12$B9N1/EGmUIG4xgwUvpHNsOSzkpw8S6bgsAuB6NBmtaqfX1ZjXkhy.",
        "role": {
            "id": 1,
            "name": "admin",
            "createdAt": "2022-11-10T04:13:39.315Z"
        },
        "email": null,
        "lastLogin": null,
        "lastActivity": null,
        "id": 66,
        "isLocked": false,
        "createdAt": "2023-01-03T12:10:20.225Z"
    }
}
```

# 6.) GET By filtered

**Description** : Get the users by filtering through phone numbers.

**Params** : phoneNumber=9090909090

**URL**:

```
http://192.168.1.221:4000/user/filtered
```

**Output**:

```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "admin",
            "phoneNumber": "9090909090",
            "email": null,
            "isLocked": false,
            "lastLogin": "2023-01-03T11:43:58.738Z",
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
    ]
}
```




