import * as dotenv from "dotenv";
dotenv.config();
export default {
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_NAME: process.env.APP_NAME || "api",
  HOST: process.env.HOST || "localhost",
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || "NotSoSecret",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "NotSoSecret",
};
