---
sidebar_position: 2
---

# Floor Component

This component displays the floor bay pair and helps you to get the bay price pair.

# 1.) POST create

**Description** : Allows you to create floor and bays.

**Body** :
```
{
    "floorNumber": "2"
}
```

**URL**:

```
http://192.168.1.221:4000/floor
```

# 2.) GET floor bay pair

**Description** : Displays all the floors and bays assigned to that floor

**Body/Params** : -

**URL**:

```
http://192.168.1.221:4000/floor
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "number": "1",
            "createdAt": "2022-11-10T04:13:39.566Z",
            "bays": [
                {
                    "id": 6,
                    "number": "106",
                    "screenId": null,
                    "timerId": null,
                    "ballLevel": 2,
                    "bookedTill": null,
                    "createdAt": "2022-11-10T04:13:39.748Z"
                },
                {
                    "id": 18,
                    "number": "118",
                    "screenId": null,
                    "timerId": null,
                    "ballLevel": 2,
                    "bookedTill": null,
                    "createdAt": "2022-11-10T04:13:40.731Z"
                },
            ]
        },
     ]
}
```

# 3.) GET bay price pair

**Description** : It gets the bay price pair

**Params** : 1.)name (Example: name="Weekday")

**URL**:

```
http://192.168.1.221:4000/floor/bay/price
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "number": "1",
            "createdAt": "2022-11-10T04:13:39.566Z",
            "bays": [
                {
                    "id": 1,
                    "number": "101",
                    "screenId": null,
                    "timerId": "116e26ae-66ff-48c7-abd8-e56381f735f0",
                    "ballLevel": 2,
                    "bookedTill": null,
                    "createdAt": "2022-11-10T04:13:39.584Z",
                    "genericPrice": []
                },
                {
                    "id": 2,
                    "number": "102",
                    "screenId": "ed89d8430a326be3",
                    "timerId": "f8865d0d-15e9-4639-a1b0-c7797264ef19",
                    "ballLevel": 2,
                    "bookedTill": null,
                    "createdAt": "2022-11-10T04:13:39.620Z",
                    "genericPrice": []
                },
                ]
            }
        ]
}
```
