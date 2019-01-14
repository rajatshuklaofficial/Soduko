const express = require('express')
const app = express()
const mongoose = require('mongoose');
var port = process.env.PORT || 7229


const db = require('./config/keys').mongoUrl;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Soduko listening on port ${port}!`))