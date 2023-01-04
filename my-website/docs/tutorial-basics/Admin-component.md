---
sidebar_position: 2
---

# Admin Component

The admin component allows to register the staff, creates internal user.

# 1.) POST Staff

**Description** : Allows to register the staff.

**Body** :
```
{
"phoneNumber": "9393939397",
"name": "Staff 2",
"pin": "101010",
"role": "employee"  
}
```

**URL**:

```
http://192.168.1.221:4000/auth/staff/register
```

**Output**:

```
{
    "success": true,
    "data": {
        "user": {
            "name": "Staff 2",
            "phoneNumber": "9393939398",
            "role": {
                "id": 4,
                "name": "employee",
                "createdAt": "2022-11-10T04:13:39.377Z"
            },
            "email": null,
            "lastLogin": null,
            "lastActivity": null,
            "gender": null,
            "birthdate": null,
            "id": 68,
            "isLocked": false,
            "createdAt": "2023-01-03T13:22:00.527Z"
        }
    }
}
```

# 2.) POST Internal user

**Description** : Allows to create Internal User.

**Body** :
``` 
{
"phoneNumber": "9393939397",
"email": "admin@gmail.com",
"name": "Staff 2",
"pin": "101010",
"role": "admin",
"secret": "TG@@OTOBIT132",
"isLocked": false  ,
"gender":"female",
"birthdate":"28-11-2001"
}
```

**URL**:

```
http://192.168.1.221:4000/user/
```

**Output**:

```
{
    "success": true,
    "data": {
        "name": "Staff 2",
        "phoneNumber": "9393939397",
        "email": "admin@gmail.com",
        "isLocked": false,
        "gender": "female",
        "birthdate": "28-11-2001",
        "pin": "$2a$12$OzftsJ1NguJtKbID6xE7yOizKapnyipVQ/TB4I5Xjphnx5Rldt/YO",
        "role": {
            "id": 1,
            "name": "admin",
            "createdAt": "2022-11-10T04:13:39.315Z"
        },
        "lastLogin": null,
        "lastActivity": null,
        "id": 69,
        "createdAt": "2023-01-03T13:29:07.461Z"
    }
}
```



