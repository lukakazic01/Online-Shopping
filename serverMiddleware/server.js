const express = require('express');
const app = express();

app.get("/me", (req, res) => {
  res.send('hello world');
});


module.exports = app;