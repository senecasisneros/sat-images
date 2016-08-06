'use strict'

const mysql = require('mysql');

const db = mysql.createConnection({
  host:  process.env.MySQL_HOST,
  user: process.env.MySQL_USER,
  password: process.env.MySQL_PASSWORD,
  database: process.env.MySQL_DATABASE
})

db.connect();

module.exports = db;
