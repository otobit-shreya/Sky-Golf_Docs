---
sidebar_position: 2
---

# Reader Component

This component provides all the reader related information.

# 1.) POST create reader

**description**: This component will create a reader and its information.

**Body**:
```
{
    "readerId": "test_reader_69",
    "normalId": "Reader 1",
    "readerType": "pit",
    "antennas": [
        {
            "name": "test_reader_69_1",
            "port": 1,
            "power": "10",
            "manufacture": "Top Golf tech",
            "ipRating": "4",
            "connector": "coaxial",
            "inventoryId": 20
        }
    ],
    "noOfAntennas": "1",
    "inventoryId": 19
}
```

**URL**:
```
http://192.168.1.221:4000/reader
```

# 2.) POST check reader

**description**: It allows to chek reader exists by readerID/normalID.

**Body**:
```
{
    "readerId": "test1",
    "normalId": "test1"
}
```

**URL**:
```
http://192.168.1.221:4000/reader/readerCheck
```

# 3.) DELETE reader

**description**: It deletes a particular reader hen provided with its id.

**URL**: http://192.168.1.221:4000/reader/1

# 4.) PATCH update

**description**: It allows to update a reader

**Body**:
```
{
    "id": 21,
    "readerID": "ffaa5330-be92-48ed-af5e-3cd2dbb321b9",
    "normalId": "",
    "active": true,
    "readerType": "bay",
    "noOfAntennas": "8",
    "manufacture": "Top Golf tech",
    "os": null,
    "readerLocation": null,
    "createdAt": "2022-09-30T02:32:52.838Z",
    "antennas": [
        {
            "id": 27,
            "name": "ffaa5330-be92-48ed-af5e-3cd2dbb321b9_2",
            "port": 1,
            "active": true,
            "power": "0",
            "createdAt": "2022-09-30T02:32:50.790Z",
            "inventory": {
                "id": 20,
                "quantity": 20,
                "inUseQuantity": 0,
                "details": {
                    "manufacture": "golf",
                    "os": "",
                    "connector": "co axial",
                    "dbi": "6",
                    "noOfPort": "",
                    "vendor": "glof",
                    "billNo": "2",
                    "purchaseDate": "2022-09-28T13:54:43.565Z",
                    "invoice": ""
                },
                "invoiceUrl": null,
                "createdAt": "2022-09-28T08:25:05.148Z"
            }
        },
        {
            "name": "ffaa5330-be92-48ed-af5e-3cd2dbb321b9_5",
            "inventoryId": 23,
            "port": 2
        }
    ],
    "inventory": {
        "id": 19,
        "quantity": 20,
        "inUseQuantity": 5,
        "details": {
            "manufacture": "golf",
            "os": "android 9",
            "connector": "co axial",
            "dbi": "6",
            "noOfPort": "8",
            "vendor": "glof",
            "billNo": "1",
            "purchaseDate": "2022-09-22T13:22:00.000Z",
            "invoice": ""
        },
        "invoiceUrl": null,
        "createdAt": "2022-09-28T07:57:02.307Z"
    },
    "readerId": "ffaa5330-be92-48ed-af5e-3cd2dbb321b9",
    "inventoryId": 28
}
```

**URL**:
```
http://192.168.1.221:4000/reader/10
```

# 5.) PATCH activate-deactivate

**description**: It allows you to activate or deactive the reader.

**URL**:
```
http://192.168.1.221:4000/reader/active/reader_1
```

# 6.) GET view all reader antenna pair

**description**: It displays all the reader antenna pairs

**Params**: -

**URL**: 
```
http://192.168.1.221:4000/reader/antennaPairs
```
**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "readerID": "Reader1",
            "normalId": "Reader 1",
            "active": true,
            "readerType": "bay",
            "noOfAntennas": 8,
            "createdAt": "2022-11-10T04:13:53.054Z",
            "antennas": [
                {
                    "id": 1,
                    "name": "Reader1_1",
                    "port": 1,
                    "active": true,
                    "power": "20",
                    "location": "101",
                    "createdAt": "2022-11-10T04:13:52.970Z"
                },
                {
                    "id": 2,
                    "name": "Reader1_2",
                    "port": 2,
                    "active": true,
                    "power": "20",
                    "location": "102",
                    "createdAt": "2022-11-10T04:13:52.984Z"
                }
            ]
        }
    ]
}
```

# 7.) GET view reader

**description**: It displays all the reader information.

**URL**: 
```
http://192.168.1.221:4000/reader
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 3,
            "readerID": "b9f79d3710da1f3e",
            "normalId": "reader_3",
            "active": true,
            "readerType": "bay",
            "noOfAntennas": 8,
            "createdAt": "2022-12-17T12:09:42.582Z"
        },
        {
            "id": 1,
            "readerID": "Reader1",
            "normalId": "Reader 1",
            "active": true,
            "readerType": "bay",
            "noOfAntennas": 8,
            "createdAt": "2022-11-10T04:13:53.054Z"
        }
    ]
}
```

# 8.) GET reader by id

**description**: It helps you to get the reader when provided with the id.

**Params**:

1.) readerId ( Example: readerId = test10 )

**URL**:
```
http://192.168.1.221:4000/reader/antennaPairs?readerId=test10
```

**Output**:
```
{
    "success": true,
    "data": []
}
```


