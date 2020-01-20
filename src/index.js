const express = require('express');
const bodyParser = require('body-parser');
const HttpStatus = require('http-status-codes');
const app = express();
const bodyParser = require('body-parser');

// Routers
const goalRouter = require('./routes/goal');

// Load environment variables from .env file
const dotenv = require('dotenv');
dotenv.config();
const APP_PORT = process.env.APP_PORT;

const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/goal', goalRouter);

app.listen(APP_PORT, () => {
    console.log(`KPI Tracker running on port ${APP_PORT}...`);
});
