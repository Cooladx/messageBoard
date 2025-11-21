// src/db/populatedb.ts

import {Client} from 'pg';

// Allows env to be used in thif file
import dotenv from "dotenv";

// Give env access
dotenv.config()

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL

);

INSERT INTO messages (username, message)
VALUES
  ('Mike', 'Hello world!'),
  ('Alan', 'Hello Mike!'),
  ('Lara', 'Are we having a meeting soon?');
  `;

async function main() {
  console.log("seeding...");
  const client = new Client({
    host: process.env.HOST,
    user: process.env.ROLE_NAME,
    database: process.env.DB,
    password: process.env.ROLE_PASSWORD,
    port: Number(process.env.DB_PORT)
  
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
