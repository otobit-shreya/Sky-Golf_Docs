---
sidebar_position: 2
---

# Transaction Component

The transaction component allos you to make transaction as well as provides you all the transaction related information.

# 1.) POST create

**description**: It allows you to initiate a transaction.

**Body**:
```
{
    "amount": 1000,
    "bayNumber": "103",
    "status":"DUE",
    "isDiscounted":true,
    "discount":{
        "password":"123456",
        "type":"fixed",
        "value":200,
        "reason":"test"
    }
}
```

**URL**:
```
http://192.168.1.221:4000/transaction
```

# 2.) GET all

**description**: It allows you to get all the transaction related information.

**Params**:

1.) billgenerate (Example: billGenerate=true)
2.) status (Example: status=DUE)

**URL**:
```
http://192.168.1.221:4000/transaction?billGenerate=true&status=DUE

```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 28,
            "amount": 1000,
            "discountType": "FIXED",
            "reason": "hi",
            "amountDiscounted": 200,
            "status": "DUE",
            "paymentType": {
                "type": "CASH"
            },
            "createdAt": "2023-01-09T10:20:35.938Z",
            "billingUser": {
                "id": 11,
                "name": "User Test 420",
                "phoneNumber": "4204204204",
                "email": "test420@test.com",
                "isLocked": false,
                "lastLogin": null,
                "lastActivity": null,
                "gender": null,
                "birthdate": null,
                "pin": "",
                "createdAt": "2022-12-06T10:31:16.644Z"
            },
            "employee": {
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
                "createdAt": "2022-11-10T04:13:42.300Z"
            }
        }
    ]
}
```

# 3.) PATCH update

**description**: This API allos you to update the information related to the transaction.

**Body**:
```
{
    "transcationId": 24,
    "status": "PAID",
    "paymentType": {
        "type": "CASH"
    },
    "adminPassword": "101010",
    "reason": "hello"
}
```

**URL**:
```
http://192.168.1.221:4000/transaction

```

# 4.) GET by session

**description**: It helps you to get the transaction in accordance with the session.

**URL**:
```
http://192.168.1.221:4000/transaction/session/6
```

# 5.) GET pending Due by Bay Number

**description**: It displays the pending due's ith the help of Bay Number.

**URL**:
```
http://192.168.1.221:4000/transaction/pendingDue/bayNumber/103
```