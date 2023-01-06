---
sidebar_position: 2
---

# Game Component

This componeent displays the information related to the game like name, rules, description , ballslimit etc.

# 1.) POST component

**Description** : Allows you to create or find game related information.

***Body***:
```
{
            "name": "Game 20",
            "image": "1672218784719c2.jpeg",
            "description": "test",
            "rules": "Test",
            "rulesImage": "1672218784767c1.jpeg",
            "ballsLimit": 30
}
```

**URL**:

```
http://192.168.1.221:4000/game
```

**Output**:
```
{
    "success": true,
    "data": {
        "name": "Game 20",
        "image": "1672218784719c2.jpeg",
        "description": "test",
        "rules": "Test",
        "rulesImage": "1672218784767c1.jpeg",
        "ballsLimit": 30,
        "id": 7,
        "createdAt": "2023-01-06T09:36:28.362Z"
    }
}
```

# 2.) GET all

**Description**: It displays all the information relatd to the game.

**Params**: -

**URL**:

```
http://192.168.1.221:4000/game
```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "name": "GAME 1",
            "image": null,
            "description": null,
            "rules": null,
            "rulesImage": null,
            "ballsLimit": 0,
            "createdAt": "2022-11-10T04:13:42.272Z"
        },
        {
            "id": 2,
            "name": "GAME 2",
            "image": null,
            "description": null,
            "rules": null,
            "rulesImage": null,
            "ballsLimit": 30,
            "createdAt": "2022-11-10T04:13:42.273Z"
        }
    ]
}
```

# 3.)  PATCH update

**Description**: This API allows you to update the information related to the gamne.

**Body**:
```
{
            "id": 7,
            "name": "Game 20",
            "image": "1672218784719c2.jpeg",
            "description": "test update",
            "rules": "Test",
            "rulesImage": "1672218784767c1.jpeg",
            "ballsLimit": 30
}
```

**URL**:
```
http://192.168.1.221:4000/game
```

**Output**:
```
{
    "success": true,
    "data": {
        "id": 7,
        "name": "Game 20",
        "image": "1672218784719c2.jpeg",
        "description": "test update",
        "rules": "Test",
        "rulesImage": "1672218784767c1.jpeg",
        "ballsLimit": 30,
        "createdAt": "2023-01-06T09:36:28.362Z"
    }
}
```

# 4.) DELETE 

**Description** : It allows you to delete a specific game mentioned along with id.

**Params**: -

**URL**:
```
http://192.168.1.221:4000/game/id 
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