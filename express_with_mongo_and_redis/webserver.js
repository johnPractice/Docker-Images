console.clear()
const express = require('express')
const app = express()
const port = 3000
const redis = require('redis')
const redisClient = redis.createClient({ url: 'redis://redis:6379' })
redisClient.on('error', (err) => console.log('Redis Client Error', err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, async () => {
    console.log('try connect to redis')
    await redisClient.connect()
    console.log('connected to redis')
    console.log(`Example app listening on port ${port}!`)
})