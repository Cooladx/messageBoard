// src/models/pool.ts

import { Pool } from 'pg';





const pool = new Pool({
    host: process.env.HOST,
    user: process.env.ROLE_NAME,
    database: process.env.DB,
    password: process.env.ROLE_PASSWORD,
    port: Number(process.env.DB_PORT)
})

export default pool;


