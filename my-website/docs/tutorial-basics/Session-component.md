---
sidebar_position: 2
---

# Session Component

This component gives the detail information about the session.

# 1.) POST 

**description**: This component allows you to create a new session

**Body**:
```
{
    "billingUser": {
        "name": "User Test 1",
        "phoneNumber": "1284567899"
    },
    "bayNumber": "104",
    "duration": 60,
    "amount": 500,
    "paymentType": {
        "type": "CASH"
    },
    "isDiscounted": false,
    "discount": {
        "password": "123456",
        "type": "fixed",
        "value": 200,
        "reason": "hi"
    }
}
``` 

**URL**:
```
http://192.168.1.221:4000/session
```

# 2.) POST session verify

**description**: It allows you to post a verified session.

**Body**:
```
{
    "bayNumber": "104",
    "pin":"674828"
}
```

**URL**:
```
http://192.168.1.221:4000/session/verify
```

# 3.) GET sessions

**description**: It displays a list of sessions.

**Params**:

1.) page

2.)per_page

**URL**:
```
http://192.168.1.221:4000/session?page=10&per_page=5
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 144,
            "pin": "929231",
            "duration": 3,
            "cancel": false,
            "active": false,
            "isInQueue": false,
            "timerId": null,
            "createdAt": "2023-01-11T11:33:19.356Z",
            "game": null,
            "bay": {
                "id": 2,
                "number": "102",
                "screenId": "ed89d8430a326be3",
                "timerId": "8b3e0351-7294-4d33-80ab-7cbd48e33057",
                "ballLevel": 0,
                "bookedTill": null,
                "createdAt": "2022-11-10T04:13:39.620Z"
            },
            "sessionUsers": []
        }
    ]
}
```

# 4.) GET session by id

**description**: It gets the session with the help of id.

**URL**:
```
http://192.168.1.221:4000/session/6
```

I**Output**:
```
{
    "success": true,
    "data": {
        "id": 6,
        "pin": "813494",
        "duration": 120,
        "cancel": false,
        "active": false,
        "isInQueue": false,
        "timerId": null,
        "createdAt": "2022-12-17T12:17:40.053Z",
        "game": {
            "id": 3,
            "name": "GAME 3",
            "image": null,
            "description": null,
            "rules": null,
            "rulesImage": null,
            "ballsLimit": 20,
            "createdAt": "2022-11-10T04:13:42.275Z"
        },
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
        "lastActiveSessionUser": {
            "id": 29,
            "createdAt": "2022-12-17T12:18:45.327Z",
            "user": {
                "id": 6,
                "name": "TEST USER 44",
                "phoneNumber": "9999999999",
                "email": null,
                "isLocked": false,
                "lastLogin": null,
                "lastActivity": null,
                "gender": "male",
                "birthdate": "2022-10-01",
                "pin": null,
                "createdAt": "2022-11-12T13:27:02.052Z"
            }
        },
        "sessionUsers": [
            {
                "id": 30,
                "createdAt": "2022-12-17T12:18:58.818Z",
                "user": {
                    "id": 12,
                    "name": "admin",
                    "phoneNumber": "1111111111",
                    "email": null,
                    "isLocked": false,
                    "lastLogin": null,
                    "lastActivity": null,
                    "gender": "male",
                    "birthdate": "2000-11-01",
                    "pin": null,
                    "createdAt": "2022-12-09T13:34:59.965Z"
                }
            },
            {
                "id": 29,
                "createdAt": "2022-12-17T12:18:45.327Z",
                "user": {
                    "id": 6,
                    "name": "TEST USER 44",
                    "phoneNumber": "9999999999",
                    "email": null,
                    "isLocked": false,
                    "lastLogin": null,
                    "lastActivity": null,
                    "gender": "male",
                    "birthdate": "2022-10-01",
                    "pin": null,
                    "createdAt": "2022-11-12T13:27:02.052Z"
                }
            }
        ],
        "bay": {
            "id": 9,
            "number": "109",
            "screenId": "f80d7654fb9cc8f4",
            "timerId": "9d62bedf-41c9-48ff-833a-5c4026da811c",
            "ballLevel": 2,
            "bookedTill": null,
            "createdAt": "2022-11-10T04:13:40.294Z",
            "antennas": [
                {
                    "id": 24,
                    "name": "b9f79d3710da1f3e_8",
                    "port": 8,
                    "active": true,
                    "power": "20",
                    "location": "109",
                    "createdAt": "2022-12-17T12:09:42.578Z"
                }
            ]
        }
    }
}
```

# 5.) PATCH update

**description**: It allows you to update the sessions.

**Body**:
```
{
    "id": 2,
    "gameId": 1
}
```

**URL**:
```
http://192.168.1.221:4000/session
```

# 6.) POST add session time

**description**: It allows you to post the session according to the session time.

**Body**:
```
{
    "duration":5,
    "amount":1000
}
```

**URL**:
```
http://192.168.1.221:4000/session/addSessionTime/24
```

# 7.) POST cancel 

**description**: It allows you to cancel or delete the session.

**URL**:
```
http://192.168.1.221:4000/session/1/end
```

# 8.) GET history bay/booking

**description**: It gets the details of the bay's history or bookings.

**Params**:

1.) page

2.) per_page

**URL**:
```
http://192.168.1.221:4000/session/history?page=1&per_page=15
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 144,
            "pin": "929231",
            "duration": 3,
            "cancel": false,
            "active": false,
            "isInQueue": false,
            "timerId": null,
            "createdAt": "2023-01-11T11:33:19.356Z",
            "sessionTransaction": [],
            "bay": {
                "id": 2,
                "number": "102",
                "screenId": "ed89d8430a326be3",
                "timerId": "8b3e0351-7294-4d33-80ab-7cbd48e33057",
                "ballLevel": 0,
                "bookedTill": null,
                "createdAt": "2022-11-10T04:13:39.620Z"
            },
            "sessionUsers": [],
            "extenedSession": [],
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
            "extendedRequestTime": null,
            "releaseTime": null,
            "extendedTime": 0,
            "paymentPending": 0,
            "paymentReceived": 0
        }
    ]
}
```