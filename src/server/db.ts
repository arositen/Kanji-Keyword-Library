import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
    host: process.env.VITE_HOST,
    user: process.env.VITE_USERNAME,
    password: process.env.VITE_PASSWORD,
    port: parseInt(process.env.VITE_DBPORT || ""),
    database: 'test'
})


