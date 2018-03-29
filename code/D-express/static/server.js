
// server.js

const express = require('express');
const path = require("path");

const app = express()
let filmRoutes = require('./film')

app.use( express.static( path.join( __dirname, "public")));

app.use('/film', filmRoutes);

app.listen(4000, () => console.log('Port 4000'));
