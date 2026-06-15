// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "http://www.mysqlonline.com.br",
//   user: "root",
//   password: "ifsuldeminas",
//   database: "ecommerce",
// });

// module.exports = connection;

require("dotenv").config();

const { createClient } = require("@libsql/client");

const db = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

module.exports = db;
