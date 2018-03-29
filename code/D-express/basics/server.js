let express = require('express')
let app = express()

let package = require("./package.json");

let myLogger = function (request, response, next) {
	console.log(request.params);
	console.log(request.query);
	next()
}

app.use(myLogger)

// =========================================================

app.get('/hello', function( request , response ) {
	let message = "Welcome";
	response.send(`<section><h4>${ message }</h4></section>`);
})

// =========================================================

app.get('/pies', function( request , response ) {

	let leekHam = {
		name:"Leek and ham pie",
		price :4.50
	};

	response.json(leekHam)
})

// =========================================================

// Route parameters are named URL segments

app.get('/ctof/:celsius', function( request , response ) {

	// °C x 9/5 + 32 = °F. (°F - 32) x 5/9 = °C

	let cl = request.params.celsius;
	let fh = Math.floor((cl * (9/5)) + 32);

	response.json( { farenheit:fh })
})

// =========================================================

// Refactor route params into separate function.
// Read config data from package.JSON

let holiday = ( request, response ) => {

    response
        .json( { city : request.params.city, author: package.author })
        .status( 200 )

}

// http://localhost:8000/holiday/barcelona
// returns {"city":"barcelona"}
// Using CURL
// curl -i http://localhost:8000/holiday/barcelona -s

app.get( "/holiday/:city" , holiday )

// =========================================================

// Query strings are not part of the route but can be captured.

app.get('/spain', function( request , response ) {

	// Review bodyParser

	// If the URL is
	// localhost:8000/spain?city=seville&temp=84
	// then request.query contains
	// { city: 'seville', temp: '84' }

	let message = "The temperature in "
				+ request.query.city
				+ " is "
				+ request.query.temp ;

	response.send( message )
})

// =========================================================

let PORT = process.env.PORT || 8000 ;

app.listen(PORT);

console.log( "localhost:" + PORT + "/hello <==== Simple Hello" );
console.log( "localhost:" + PORT + "/pies  <==== JSON response" );
console.log( "localhost:" + PORT + "/ctof/40 <==== Route parameters" );
console.log( "localhost:" + PORT + "/spain?city=seville&temp=84 <==== Body-Parser" );
