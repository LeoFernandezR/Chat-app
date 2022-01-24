import dotenv from "dotenv"
dotenv.config()

const config = {
  PORT: process.env.PORT || 4000,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || "access-token",
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || "refresh-token",
}

export default config
