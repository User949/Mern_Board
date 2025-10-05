import "dotenv/config";

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
};
