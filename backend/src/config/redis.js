const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-19486.c98.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 19486,
     
    }
});

module.exports = redisClient;