
const express = require('express');
const pug = require('pug');
const PORT = process.env.PORT || 5000;
const path = require("path");
const templatePath = path.join( __dirname, 'tmpl');

// CompileFile returns another function.
// That function merges the template with object data, and returns a string of HTML/CSS

// let templateFn = pug.compileFile("./tmpl/spain.pug")
// templateFn( { city:city , region:region } )
// response.write( templateFn( { city:city , region:region } ));
// response.end();

let app = express();
app.set('views', templatePath );

// If no view engine is defined, response.render will throw this error:
// Error: No default engine was specified and no extension was provided.

// Not needed if define file extension in render method.
app.set('view engine','pug');

app.get('/', function( request , response ) {

	// http://localhost:8000/spain?city=Trujillo&region=Extremadura

	let defaultCity = process.env.CITY || "Trujillo";
	let defaultRegion = process.env.REGION || "Extremadura";

	// CITY=Granada REGION=Andalusia node index.js

	let { city=defaultCity, region=defaultRegion } = request.query;

	// heroku logs -a shielded-springs-69756 -t -n 4 --force-colors
	console.log( "_____________",city, "_____________",region);

	// If tmpl/spain.pug does not exist, or views path not set, it will throw this error:
	// Failed to lookup view "spain" in views directory

	let basket = [
		{ name:"Carrots" , price:0.45 },
		{ name:"Beans" , price:1.25 },
		{ name:"Kiwi" , price:0.75 },
		{ name:"Bread" , price:1.45 }
	]
	
	response.render( "spain.pug" , { city:city , region:region, basket:basket, version:1.04 } );

})

app.listen(PORT, () => console.log('Port', PORT ));
