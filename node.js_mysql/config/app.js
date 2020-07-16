const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'mysql_host',
  user: 'docker',
  password: 'docker',
  database: 'test_database'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});


app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM test_talbe',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});

app.listen(3000);
