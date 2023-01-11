---
sidebar_position: 2
---

# Staff component

This component is responsible for creating as well as displaying staff related information.

# 1.) POST create action

**description**: This component allows you to create an action for the staff.

**Body**:
```
{
    "name":"Bay Allocation"
}
```
**URL**:
```
http://192.168.1.221:4000/staffRole/action
```

# 2.) GET all action

**description**: It gets the list of actions.

**Params**:

1.) role (role="customer")

**URL**:
```
http://192.168.1.221:4000/staffRole/action
```

**Output**:
```
{
    "success": true,
    "data": []
}
```

# 3.) POST create role

**description**:  It allows you to create a role for the staff.

**Body**:
```
{
    "name": "xyZ",
    "actions": [
        {
            "id": 1,
            "isActive": true
        }
    ]
}
```

**URL**: 
```
http://192.168.1.221:4000/staffRole
```

# 4.) GET actions by role

**description**: It allows you to get actions ith the help of role

**URL**:
```
http://192.168.1.221:4000/staffRole/action/customer

```
