const express = require('express')
const app = express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

var port = process.env.PORT || 7229



const users = require('./routes/api/users');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const db = require('./config/keys').mongoUrl;

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);



app.use('/api/users', users);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Soduko listening on port ${port}!`))