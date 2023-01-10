---
sidebar_position: 2
---

# Antenna component

This component gives the information related to the antennas.

# 1.) GET All Antennas

**Description** : Displays all the information realted to antennas.

**Params** : 1.) type (Example: type="pit", type="bay")

**URL**:

```
http://192.168.1.221:4000/ant
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Reader1_1",
            "port": 1,
            "active": true,
            "power": "20",
            "location": "101",
            "createdAt": "2022-11-10T04:13:52.970Z",
            "reader": {
                "id": 1,
                "readerID": "Reader1",
                "normalId": "Reader 1",
                "active": true,
                "readerType": "bay",
                "noOfAntennas": 8,
                "createdAt": "2022-11-10T04:13:53.054Z"
            }
        }
    ]
}
```

# 1.) POST antennas

**Description** : Allows you to create antenna related information.

**Body** :
```
{
    "name": "ant 1",
    "readerID": "test_reader_1",
    "bay": "6"
}
```

**URL**:

```
http://192.168.1.221:4000/ant
```
