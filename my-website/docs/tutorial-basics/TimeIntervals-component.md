---
sidebar_position: 2
---

# Time Interval component

This component allows you to create time intervals, view all the intervals as well as update and delete them.

# 1.) GET all time intervals

**Description** : Displays all the time intervals.

**Params** : -

**URL**:

```
http://192.168.1.221:4000/timeIntervals
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 2,
            "interval": 30,
            "enable": true,
            "createdAt": "2022-11-16T11:00:53.453Z"
        },
        {
            "id": 4,
            "interval": 60,
            "enable": true,
            "createdAt": "2022-11-16T11:00:53.457Z"
        },
    ]
}
```

# 2.) POST time intervals

**Description** : Allows you to create a new time interval

**Body** : 
```
{
    "interval": 15,
    "enable": true
}
```

**URL**:

```
http://192.168.1.221:4000/timeIntervals
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 2,
            "interval": 15,
            "enable": true,
            "createdAt": "2022-11-16T11:00:53.453Z"
        },
    ]
}
```

# 3.) PATCH time intervals

**Description** : Allows you to update time intervals.

**Body** : 
```
{
    "id": 3,
    "interval": 30,
    "enable": false
}
```

**URL**:

```
http://192.168.1.221:4000/timeIntervals
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 3
            "interval": 30,
            "enable": false,
            "createdAt": "2022-11-16T11:00:53.453Z"
        },
    ]
}
```

# 4.) DELETE time intervals

**Description** : Allows you to delete a time interval.

**URL**:

```
http://192.168.1.221:4000/timeIntervals/id
```

**Output**:
```
{
    "success": true,
    "data": {
        "raw": [],
        "affected": 1
    }
}
```