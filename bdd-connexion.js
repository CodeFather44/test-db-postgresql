import "dotenv/config";
import pkg from "pg";
const { Client } = pkg;

export const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_BDD,
  user: process.env.DB_USER,
  password: process.env.DB_PWRD,
});

