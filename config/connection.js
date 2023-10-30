//Must require dotenv to be active and exported.
require("dotenv").config();
const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log(`Connected to employee database`)
);

db.connect(function (err) {
  if (err) {
    throw err;
  }
});

module.exports = db;
