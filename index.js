const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
db.connect();

app.get('/people', (req, res) => {
  const sql = 'SELECT * FROM people';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(3000, () => console.log('its working, its working!'));
