---
sidebar_position: 2
---

# Category Component

This component allows you to create category and view different categories like Reader, Antenna etc.

# 1.) POST create

**Description** : Allows you to create different categories.

**Body** :
```
{
 "name": "Reader"   
}
```

**URL**:

```
http://192.168.1.221:4000/category
```

**Output**:
```
{
    "success": true,
    "data": {
        "name": "Test3",
        "id": 5,
        "createdAt": "2023-01-05T09:26:58.244Z"
    }
}
```

# 2.) GET categories

**Description** : Displays  different categories.

**Params**: -

**URL**:

```
http://192.168.1.221:4000/category
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Reader",
            "createdAt": "2022-11-10T04:13:52.880Z"
        },
        {
            "id": 2,
            "name": "Antenna",
            "createdAt": "2022-11-10T04:13:52.886Z"
        }
    ]
}
```