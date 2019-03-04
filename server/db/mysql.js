const mysql = require('mysql');

const connectionPool = mysql.createPool({
  connectionLimit : 5,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DB
});

module.exports = connectionPool;
