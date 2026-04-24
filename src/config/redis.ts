import Redis from 'ioredis';
import { REDIS_ENABLED, REDIS_HOST, REDIS_PORT } from './redis.config';

const redisClient: Redis | null = REDIS_ENABLED
    ? new Redis({
        port: REDIS_PORT,
        host: REDIS_HOST,
      })
    : null;

redisClient?.on('connect', () => {
    console.log(`Connected to Redis: ${redisClient.options.host}:${redisClient.options.port}`);
});

redisClient?.on('error', (err: Error) => {
    console.error('Redis error:', err);
});

export default redisClient;