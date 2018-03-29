
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const film = require('./village.js');

app.use( function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/village', film);

app.listen(4000, () => console.log('Port 4000'));

// Test POST without a form using CURL:
// curl -d 'village=Pangbourne' http://localhost:4000/village/vote -w "\n"
