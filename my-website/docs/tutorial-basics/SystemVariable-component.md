---
sidebar_position: 2
---

# System Variable component

This component allows you to create system variables, view them all, update them and delete them.

# 1.) GET System Variable

**Description** : Displays all the system variables

**Params** : 1.) name (Example: name="Game Extention")

**URL**:

```
http://192.168.1.221:4000/systemVariable
```

**Output**:

```
{
    "success": true,
    "data": {
        "id": 7,
        "name": "Game Extention",
        "details": {
            "value": 1
        },
        "createdAt": "2022-11-16T11:00:53.450Z"
    }
}
```

# 2.) POST System Variable

**Description** : Displays all the system variables

**Body** : 
{
    "variables": [
        {
            "name": "Game Extention",
            "details": {
            "value": 1
            }
        }
    ]
}

**URL**:

```
http://192.168.1.221:4000/systemVariable
```

**Output**:

```
{
    "success": true,
    "data": {
        "id": 7,
        "name": "Game Extention",
        "details": {
            "value": 1
        },
        "createdAt": "2022-11-16T11:00:53.450Z"
    }
}
```