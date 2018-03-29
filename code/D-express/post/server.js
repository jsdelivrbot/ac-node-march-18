
const express = require('express')
const app = express()

var morgan = require('morgan')
app.use(morgan('tiny'))

let reverse = s => s.split("").reverse().join("");

// Enables us to see the request body in POST requests.
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// curl -d 'city=copenhagen' http://localhost:4000/travel -w "\n"

app.get('/', function(req, res) {
	res.send( "Test POST using curl or Postman")
});

app.post('/travel', function(req, res) {

	req.body.city = reverse( req.body.city );
	res.send( JSON.stringify( req.body ))
});

app.listen(4000, function() {
	console.log('Port 4000')
})
