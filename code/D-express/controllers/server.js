
const express = require('express')
const app = express()

let routes = require('./routes');
app.use('/', routes);

app.listen(4000, function() {
	console.log('Port 4000')
})
