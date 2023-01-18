---
sidebar_position: 2
---

# Steps to deploy on server.

Follow these steps in order to deploy **AdminPanel** or **Backend** to the server.

**Sky Golf project is up and running on:**

[Sky Golf- AdminPanel](http://192.168.1.221:3000)

# PROXMOX server 1
` https://192.168.1.225:8006/ `

`root Otobit@1221`

# SERVER

`ssh server1@192.168.1.221`

`ssh server2@192.168.1.222`

# File Transfer Example

```
scp  /c/Users/JashJariwala/Documents/Projects/NewProject/TG-Backend/.env server1@192.168.1.221:/home/server1/skygolf/skygolf-backend/Backend/
```

`pass : otobit`

# Deploy Update

**Steps:**

```
1. Move to project root
```

```bash
2. npm run vm1
```

```
3. BACKEND - cd skygolf/skygolf-backend/Backend/ && git pull && npm run build && npm run restart && pm2 logs
```

```
4. FRONTEND - cd skygolf/skygolf-react/AdminPanel/ && git pull && npm i && yarn run build
```