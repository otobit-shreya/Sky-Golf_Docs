---
sidebar_position: 2
---

# Dropdown component

This component provides the reason to drop a person from the waiting list.

# 1.) GET all 

**description**: It displays the list of reasons for the drop.

**Params**: 

1.) type ( Example: 'waitingList' )

**URL**:
```
http://192.168.1.221:4000/dropdowns?type=waitingList
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "reason any : if reason is too long .",
            "type": "waitingList",
            "createdAt": "2022-11-16T11:00:54.510Z"
        },
        {
            "id": 2,
            "name": "Sick",
            "type": "waitingList",
            "createdAt": "2022-11-16T11:00:54.512Z"
        },
        {
            "id": 3,
            "name": "Too much queue",
            "type": "waitingList",
            "createdAt": "2022-11-16T11:00:54.513Z"
        }
    ]
}
```

# 2.) POST create

**description**: This allows you to create the drops.

**Body**:
```
{
    "name" : "Others",
    "type" : "waitingList"
}
```

**URL**:
```
http://192.168.1.221:4000/dropdowns
```

# 3.) DELETE 

**description**: Allows you to delete dropdown with the help of the id.

**URL**:
```
http://192.168.1.221:4000/dropdowns/4
```

