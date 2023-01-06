---
sidebar_position: 2
---

# Pit Component

This component displays all the details of the pits

# 1.) POST create or update pit

**Description** : Allows you to create or update pit.

**URL**:

```
http://192.168.1.221:4000/pit
```

**Body** :
```
{
{
    "name": "S1",
    "antennas": [
        {
            "antennaId": "Reader1_1",
            "power": "100",
            "location": "S1_1"
        },
        {
            "antennaId": "Reader1_2",
            "power": "100",
            "location": "S1_2"
        }
    ]
}  
}
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 2,
            "name": "S2",
            "createdAt": "2022-12-17T12:49:26.437Z",
            "antennas": [
                {
                    "id": 16,
                    "name": "Reader1_1",
                    "port": 8,
                    "active": true,
                    "power": "100",
                    "location": "S1_1",
                    "createdAt": "2022-11-10T04:13:53.149Z"
                },
                {
                    "id": 25,
                    "name": "Reader1_2",
                    "port": 1,
                    "active": true,
                    "power": "100",
                    "location": "S1_2",
                    "createdAt": "2022-12-17T12:49:13.677Z"
                },
            ]
        }
    ]
}
```

# 2.) GET all pits

**Description** : Displays all the information of the pit.

**URL**:

```
http://192.168.1.221:4000/pit
```

**Body/Params**: -

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 2,
            "name": "S2",
            "createdAt": "2022-12-17T12:49:26.437Z",
            "antennas": [
                {
                    "id": 16,
                    "name": "Reader1_1",
                    "port": 8,
                    "active": true,
                    "power": "100",
                    "location": "S1_1",
                    "createdAt": "2022-11-10T04:13:53.149Z"
                },
                {
                    "id": 25,
                    "name": "Reader1_2",
                    "port": 1,
                    "active": true,
                    "power": "100",
                    "location": "S1_2",
                    "createdAt": "2022-12-17T12:49:13.677Z"
                },
            ]
        }
    ]
}
```


