---
sidebar_position: 2
---

# Inventory Component

This component allows you to create or view an inventory along with its details like billNo., vendor, invoice, manufacture, noOfAntennas etc. 

# 1.) POST create

**Description** : Allows you to create invntories.

**Body** :
```
{
    "categoryName": "Reader",
    "details": {
        "billNo": "",
        "connector": "wire",
        "dbi": "",
        "invoice": "",
        "manufacture": "MR2",
        "noOfAntennas": "8",
        "os": "IOS",
        "purchaseDate": "2022-10-14T07:47:54.858Z",
        "vendor": ""
    },
    "quantity": "1"
}
```

**URL**:

```
http://192.168.1.221:4000/inventory
```

# 2.) GET inventory view

**Description** : Displays all the inventories

**Params** : 1.)page 2.)per_page

**URL**:


```
http://192.168.1.221:4000/inventory
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "quantity": 1,
            "inUseQuantity": 0,
            "details": {
                "os": "IOS",
                "dbi": "",
                "billNo": "",
                "vendor": "JASH",
                "invoice": "",
                "connector": "wire",
                "manufacture": "R1",
                "noOfAntennas": "8",
                "purchaseDate": "2022-10-20T11:33:05.484Z"
            }
    ]
}
```