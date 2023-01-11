---
sidebar_position: 2
---

# Pricing Component

This component shows the details of the pricing structure.

# 1.) POST create 

**description**: It allows you to create the generic Price Sheet.

**Body**:
```
{
    "name": "Black Friday",
    "colour": "black",
    "priority": 1
}
```

**URL**:
```
http://192.168.1.221:4000/price/genericPriceSheet
```

# 2.) POST update

**description**: It allows you to update the generic price sheet

**Body**:
```
{
    "name": "Weekends",
    "colour": "red",
    "priority": 2,
    "id":2
}
```

**URL**:
```
http://192.168.1.221:4000/price/genericPriceSheet
```

# 3.) POST create general price 

**description**: It allows you to create general price from generic sheet.

**Body**:
```
{
    "genericPriceSheetId": 2,
    "startTime": "2022-10-02T21:30:00.000Z",
    "endTime": "2022-10-31T21:30:00.000Z",
    "weekday": [
        7
    ]
}
```

**URL**:
```
http://192.168.1.221:4000/price/general
```

# 4.) GET find by time

**description**: It displays the price in accordance with the start time and end time.

**Params**:

1.) startTime ( Example: startTime = 2022-10-1T18:30:00.000Z ) 
2.) endTime   (Example : endTime = 2022-10-31T18:30:00.000Z )

**URL**:
```
http://192.168.1.221:4000/price/time?startTime=2022-10-1T18:30:00.000Z&endTime=2022-10-31T18:30:00.000Z
```

# 5.) GET find all generic price

**description**: This method finds and displays all the generic prices.

**Params**: -

**URL**:
```
http://192.168.1.221:4000/price/genericPriceSheet
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "Week Days",
            "colour": "green",
            "priority": 3,
            "createdAt": "2022-11-10T04:13:56.058Z",
            "genericPrice": [
                {
                    "id": 1,
                    "startTime": "03:00:00",
                    "endTime": "04:00:00",
                    "amount": 362,
                    "createdAt": "2022-11-10T04:13:57.026Z",
                    "bay": {
                        "id": 1,
                        "number": "101",
                        "screenId": null,
                        "timerId": "b4de58c2-02b1-4076-b55b-c27f8386c957",
                        "ballLevel": 2,
                        "bookedTill": null,
                        "createdAt": "2022-11-10T04:13:39.584Z"
                    }
                },
                {
                    "id": 2,
                    "startTime": "04:00:00",
                    "endTime": "05:00:00",
                    "amount": 504,
                    "createdAt": "2022-11-10T04:13:57.026Z",
                    "bay": {
                        "id": 1,
                        "number": "101",
                        "screenId": null,
                        "timerId": "b4de58c2-02b1-4076-b55b-c27f8386c957",
                        "ballLevel": 2,
                        "bookedTill": null,
                        "createdAt": "2022-11-10T04:13:39.584Z"
                    }
                }
            ]
        }
    ]
}
```

# 6.)  DELETE generic price sheet by id

**description**: It allows you to delete generic price sheet with the help of id.

**URL**: 
```
http://192.168.1.221/4000/price/genericPriceSheet/14
```

# 7.) DELETE pricesheet by id

**description**:  It allows you to delete a price sheet by id.

**URL**:,
```
http://192.168.1.221/4000/price/price/1
```

