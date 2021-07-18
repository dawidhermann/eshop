import { registerAs } from '@nestjs/config';

export const DB_CONFIG_NAME = 'database';
export const dbConfig = registerAs(DB_CONFIG_NAME, () => ({
  host: process.env.HOST,
  port: process.env.PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  dbName: process.env.DB_NAME,
}));
