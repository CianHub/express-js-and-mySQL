const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const app = express();

const db = mysql.createConnection({});

app.listen(3000, () => console.log('its working, its working!'));
