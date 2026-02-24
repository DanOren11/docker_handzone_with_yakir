const express = require('express')
require('dotenv').config()



const mysql = require('mysql2');

const app = express()
const port = process.env.PORT || 8080

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'dan',
  password: process.env.MYSQL_PASSWORD || 'dan1',
  database: process.env.MYSQL_DATABASE || 'mydb'
};

const connection = mysql.createConnection(dbConfig);
connection.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err.message);
  } else {
    console.log('Connected to MySQL');
  }
});

app.get('/', (req, res) => {
  res.send(`<h1>Docker-Compose-Lab</h1><p>running on port ${port}</p>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})