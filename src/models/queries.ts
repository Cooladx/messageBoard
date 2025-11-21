// src/models/queries.ts

import pool from "./pool.js";

export {getAllMessages, getAllMessagesWithSup, insertMessage}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  console.log(rows)
  return rows;
}

async function getAllMessagesWithSup() {
  const { rows } = await pool.query("SELECT * FROM messages WHERE message LIKE '%sup%' ");
  return rows;
}

async function insertMessage() {
  await pool.query("INSERT INTO messages (message) VALUES ($1)", );
}

