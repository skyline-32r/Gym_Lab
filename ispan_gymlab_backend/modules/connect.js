import mysql from 'mysql2/promise'
// import "dotenv/config";

const db = await mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  timezone: '08:00',
  waitForConnections: true,
  connectionLimit: 3,
  queueLimit: 0
})

// process.exit();

export default db
