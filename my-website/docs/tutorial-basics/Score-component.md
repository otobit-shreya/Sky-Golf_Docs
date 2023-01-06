---
sidebar_position: 2
---

# Score Component

This component displays the score list, update them or delete them with thee help of different api's.

# 1.) POST create or update

**Description:**: With th help of this API you can either craete or update the score list.

**Body:**:
```
[
    "game": {
                "name": "GAME 1",
                "image": null,
                "description": null,
                "rules": null,
                "rulesImage": null,
                "ballsLimit": 0,
                "createdAt": "2022-11-10T04:13:42.272Z"
            },
            "pitAntenna": {
                "name": "Reader2_1",
                "port": 1,
                "active": true,
                "power": "30",
                "location": "S1_1",
                "createdAt": "2022-11-10T04:13:53.094Z"
            }
]
```

**URL**
```
http://192.168.1.221:4000/score

```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "score": 2,
            "createdAt": "2022-11-10T04:13:53.571Z",
            "game": {
                "id": 1,
                "name": "GAME 1",
                "image": null,
                "description": null,
                "rules": null,
                "rulesImage": null,
                "ballsLimit": 0,
                "createdAt": "2022-11-10T04:13:42.272Z"
            },
            "pitAntenna": {
                "id": 9,
                "name": "Reader2_1",
                "port": 1,
                "active": true,
                "power": "30",
                "location": "S1_1",
                "createdAt": "2022-11-10T04:13:53.094Z"
            }
        }
    ]
}
```

# 2.) Get all/ get all by game id

**Description:**: It displays all the information related to the game or displays the specific game if provided along with the id.

**Params**: 1.) gameId (Example: gameId = 1)

**URL**
```
http://192.168.1.221:4000/score?gameId=1

```

**Output**:
```
{
    "success": true,
    "data": [
        {
            "id": 1,
            "score": 2,
            "createdAt": "2022-11-10T04:13:53.571Z",
            "game": {
                "id": 1,
                "name": "GAME 1",
                "image": null,
                "description": null,
                "rules": null,
                "rulesImage": null,
                "ballsLimit": 0,
                "createdAt": "2022-11-10T04:13:42.272Z"
            },
            "pitAntenna": {
                "id": 9,
                "name": "Reader2_1",
                "port": 1,
                "active": true,
                "power": "30",
                "location": "S1_1",
                "createdAt": "2022-11-10T04:13:53.094Z"
            }
        },
        {
            "id": 2,
            "score": 4,
            "createdAt": "2022-11-10T04:13:53.595Z",
            "game": {
                "id": 1,
                "name": "GAME 1",
                "image": null,
                "description": null,
                "rules": null,
                "rulesImage": null,
                "ballsLimit": 0,
                "createdAt": "2022-11-10T04:13:42.272Z"
            },
            "pitAntenna": {
                "id": 10,
                "name": "Reader2_2",
                "port": 2,
                "active": true,
                "power": "30",
                "location": "S1_2",
                "createdAt": "2022-11-10T04:13:53.101Z"
            }
        }
    ]
}
```

# 3.) GET find score by session

**Description**: It allows you to find the score with the help of given session.

**Params**: 1.) sessionUserId

**URL**:
```
http://192.168.1.221:4000/score/session/25?seesionUserId=57
```

**Output**:
```
{
    "success": true,
    "data": []
}
```

# 4.) PATCH update

**Description**: This allows you to update the components provided with id.

**Body**: {
    "id": 2,
    "pitAntennaId": 3
}

**URL**:
```
http://192.168.1.221:4000/score
```

# 5.) DELETE score

**Description**: This allowws you to delete the score related information.

**URL**: 
```
http://192.168.1.221:4000/score/id
```