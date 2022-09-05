# Dockerize Express webserver with Postgres and Redis 

## Redis Config
connect service to redis we can user <b>REDIS_URL</b> without password and remove <b>command</b> in docker compose file or 
use <b>REDIS_HOST,REDIS_PORT and REDIS_PASSWORD</b> for connection to redis .
In web server for connect to redis run command
```
npm install --save redis
```
then for create new connection:
```
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);
```
or 
```
const redis = require('redis');
const client = redis.createClient(
    {host:process.env.REDIS_HOST,
    port:process.env.REDIS_PORT,
    password:process.env.REDIS_PASSWORD
    });

```