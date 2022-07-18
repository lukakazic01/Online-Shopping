const express = require('express');
const app = express();
const {createPool} = require('mysql');
const pool = createPool({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'bazazaprojekat'

});

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.post("/signup",(req, res) => {
  const error = true;
  const {username, password, email} = req.body;
  pool.query('INSERT INTO korisnici VALUES(default, ?, ?, ?)',[email,username,password], 
  (err,result) => {
    if(err)
    console.log(err)

    res.send({result, error});
  })

});


module.exports = app;