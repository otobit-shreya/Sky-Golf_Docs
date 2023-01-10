---
sidebar_position: 2
---

# Waiting List Component

This componennt gives you the information related to waiting list.

# 1.) POST create 

**description**: It creates the user waiting list.

**Body**:
```
{
    "name":"Riya Patel",
    "phoneNumber":"7233278230",
    "remark": null,
    "prefrence": "3/L"
}
```
**URL**:
```
http://192.168.1.221:4000/waitingList

```

# 2.) POST send messages

**description**: This API allows you to send messages.

**Body**:
```
{
    "phoneNumber":"7043831521",
    "message": "hii"
}
```

**URL**:
```
http://192.168.1.221:4000/waitingList/sendMessage

```

# 3.) PATCH update

**description**: This API allows you to update waiting list information.

**Body**:
```
{
    "id" : 74,
    "remark":"NB 1"
}
```

**URL**:
```
http://192.168.1.221:4000/waitingList
```

# 4.) DELETE from waiting list

**description**: This API allows you to delete certain waiting list information when provided ith id.

**Body**: 
```
{
    "resaon":"nine",
    "adminPassword": "101010"
}
```
**URL**:
```
http://192.168.1.221:4000/waitingList/76
```

# 5.) GET waiting list

**description**: Displays the entire waiting list.

**Params**: -

**URL**:
```
http://192.168.1.221:4000/waitingList
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 22,
            "position": 2,
            "prefrence": "0/CG",
            "name": "shreya",
            "phoneNumber": "5896332155",
            "createdAt": "2023-01-02T11:45:14.149Z",
            "remarks": []
        }
    ]
}
```

# 6.) GET filtered

**description**: Get filtered users in waiting list with the help of their phone number or name.

**Params**: 

1.) phoneNumber

2.) name

**URL**:
```
http://192.168.1.221:4000/waitingList/filtered?phoneNumber=5896332155&name=shreya
```

**Output**:
```
 {
            "id": 22,
            "position": 2,
            "prefrence": "0/CG",
            "name": "shreya",
            "phoneNumber": "5896332155",
            "createdAt": "2023-01-02T11:45:14.149Z",
            "remarks": []
}
```