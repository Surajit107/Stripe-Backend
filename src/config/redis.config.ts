const DEFAULT_REDIS_PORT = 6379;
const DEFAULT_REDIS_HOST = '127.0.0.1';

const parsePort = (value: string | undefined): number | undefined => {
  if (!value) return undefined;
  const n = Number(value);
  if (!Number.isInteger(n) || n <= 0 || n > 65535) return undefined;
  return n;
};

const isRedisEnabled = (value: string | undefined): boolean => {
  if (!value) return false;
  return value === '1' || value.toLowerCase() === 'true';
};

export const REDIS_ENABLED: boolean = isRedisEnabled(process.env.REDIS_ENABLED);
export const REDIS_PORT: number = parsePort(process.env.REDIS_PORT) ?? DEFAULT_REDIS_PORT;
export const REDIS_HOST: string = process.env.REDIS_HOST ?? DEFAULT_REDIS_HOST;