---
sidebar_position: 2
---

# Bay component

This component gives you information related to bay.

# 1.) POST create bay

**description**: It allows you to create a new bay

**Body**
```
{
    "number": "209",
    "floorNumber": "2",
    "antennas": []
}
```

**URL**:

```
http://192.168.1.221:4000/bay
```

**Output**:
```
{
    "success": true,
    "data": {
        "id": 29,
        "number": "209",
        "screenId": null,
        "timerId": "a2afabb0-f73d-43b1-9bd6-f842325e2c8c",
        "ballLevel": 2,
        "bookedTill": null,
        "createdAt": "2022-11-10T04:13:41.153Z",
        "status": {
            "id": 1,
            "name": "Available Bay",
            "shortName": "Available",
            "color": "#FFFFFF",
            "border": false,
            "createdAt": "2022-11-10T04:13:39.371Z"
        }
    }
}
```

# 2.) GET all 

**description**: This method gets you all the information related to bay.

**Params**: 

1.)floorNo (Example: floorNo=1) 

2.)status (Example: status="Ask Extension")

3.)fillBalls (Example: fillBalls=true)

4.)bayNumber (Example: bayNumber=103)

5.)billGenerate (Example: billGenerate=true)

**URL**:

```
http://192.168.1.221:4000/bay
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "number": "101",
            "screenId": null,
            "timerId": "9947d538-1b72-4d50-ad35-b6eb82d3b152",
            "ballLevel": 2,
            "bookedTill": null,
            "createdAt": "2022-11-10T04:13:39.584Z",
            "floor": {
                "id": 1,
                "number": "1",
                "createdAt": "2022-11-10T04:13:39.566Z"
            },
            "antennas": {
                "id": 20,
                "name": "b9f79d3710da1f3e_4",
                "port": 4,
                "active": true,
                "power": "15",
                "location": "101",
                "createdAt": "2022-12-17T12:09:42.551Z"
            },
            "genericPrice": {
                "id": 1455,
                "startTime": "17:00:00",
                "endTime": "18:00:00",
                "amount": 545,
                "createdAt": "2022-11-10T04:13:59.294Z"
            },
            "status": {
                "id": 1,
                "name": "Available Bay",
                "shortName": "Available",
                "color": "#FFFFFF",
                "border": false,
                "createdAt": "2022-11-10T04:13:39.371Z"
            },
            "activeSession": null
        }
    ]
}
```

# 3.) POST Create or update bay

**description**: It allows you to create as well as update bay.

**Body**:
```
{
    "floorNumber": "2",
    "bayObject": [
        {
            "bayNumber": "207",
            "antennaName": "ffaa5330-be92-48ed-af5e-3cd2dbb321b9_1",
            "power": "55",
            "location": "207"
        },
        {
            "bayNumber": "209",
            "antennaName": "ffaa5330-be92-48ed-af5e-3cd2dbb321b9_1",
            "power": "55",
            "location": "209"
        }
    ]
}
```

**URL**:

```
http://192.168.1.221:4000/bay/createOrUpdate
```

# 4.) GET bay search

**description**: Allows you to search bay with the help of bayNumber.

**Params**:
1.) bayNumber (Example: bayNumber=1)
2.) userPhoneNumber

**URL**:

```
http://192.168.1.221:4000/search?bayNumber=1
```

**Output**:
```
{
    "success": true,
    "data": [
        "106",
        "301",
        "310",
        "311",
        "313",
        "314",
        "112",
        "115",
        "102",
        "215",
        "110",
        "116",
        "218",
        "315",
        "120",
        "217",
        "210",
        "111",
        "119",
        "107",
        "201",
        "109",
        "312",
        "211",
        "316",
        "114",
        "104",
        "108",
        "113",
        "216",
        "103",
        "118",
        "117",
        "318",
        "101",
        "213",
        "317",
        "219",
        "319",
        "105",
        "214",
        "212"
    ]
}
```

# 5.) GET bay by screen id

**description**: Allows you to get bay by screen id.

**URL**:
```
http://192.168.1.221:4000/bay/screen/abc
```

**Output**:
```
{
    "success": true,
    "data": {}
}
```

# 6.) POST create status

**description**: Allows you to create status.

**Body**:
```
{
    "id":5,
    "name":"Not Available",
    "color":null,
    "shortName" :"N/A",
    "border" : false
}
```

**URL**:
```
http://192.168.1.221:4000/bay/createStatus
```

**Output**:
```
 {
            "id": 5,
            "name": "Not Available",
            "shortName": "N/A",
            "color": null,
            "border": false,
            "createdAt": "2022-11-10T04:13:39.451Z"
        },
```

# 7.) Get all status

**description**: Allows you to get all the status of bays.

**Params**: 1.) bayNumber

**URL**:
```
http://192.168.1.221:4000/bay/status
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 2,
            "name": "Bay on Hold",
            "shortName": "Hold",
            "color": "#FFFFFF",
            "border": true,
            "createdAt": "2022-11-10T04:13:39.451Z"
        },
        {
            "id": 3,
            "name": "Ongoing Game",
            "shortName": "Booked",
            "color": "#47B6EA",
            "border": false,
            "createdAt": "2022-11-10T04:13:39.467Z"
        }
    ]
}
```

# 8.) POST Session bay change

**description**: allows you to create the details of session bay change

**Body**:
```
{
    "currentBay":"104",
    "newBay":"103",
    "adminPassword":"101010",
    "newDuration" :"10"
}
```

**URL**
```
http://192.168.1.221:4000/bay/sessionBayChange
```

# 9.) PATCH update 

**description**: allows you to update the information related to bay.

**Body**:
```
{
    "number": "104",
    "status" :"Bay on Hold"
}
```

**URL**:
```
http://192.168.1.221:4000/bay
```

# 10.) PATCH update by screen id

**description**: allows you to update the information with the help of screen id.

**Body**:
```
{
    "screenId" :"abc",
    "number": "105"
}
```

**URL**:
```
http://192.168.1.221:4000/bay/screenId

```