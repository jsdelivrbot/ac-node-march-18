
const express = require('express');
const pug = require('pug');

const PORT = process.env.PORT || 5000;

const path = require("path");
const pugViews = path.join( __dirname, 'tmpl');

// CompileFile returns another function.
// That function merges the template with object data, and returns a string of HTML/CSS

let templateFn = pug.compileFile("./tmpl/spain.pug")

let basket = [
	{ name:"Carrots" , price:0.45 },
	{ name:"Beans" , price:1.25 },
	{ name:"Kiwi" , price:0.75 },
	{ name:"Bread" , price:1.45 }
]
// npm install pug has added pug to package.json
// But it does not need to be explicitly imported.

let app = express();

app.set('views', pugViews );

// If no view engine is defined, response.render will throw this error:
// Error: No default engine was specified and no extension was provided.

// Not needed if define file extension in render method.
app.set('view engine','pug');

app.get('/', function( request , response ) {

	// http://localhost:8000/spain?city=Trujillo&region=Extremadura

	let defaultCity = process.env.DEFAULT_CITY || "Trujillo";
	let defaultRegion = process.env.DEFAULT_REGION || "Extremadura";

	// DEFAULT_CITY=Granada DEFAULT_REGION=Andalusia node index.js
	// Define CONFIG VARS in the Heroku app settings page

	let { city=defaultCity, region=defaultRegion } = request.query;

	// heroku logs -a shielded-springs-69756 -t -n 4 --force-colors
	console.log( "_____________",city, "_____________",region);

	// If tmpl/spain.pug does not exist, or views path not set, it will throw this error:
	// Failed to lookup view "spain" in views directory

	response.render( "spain.pug" , { city:city , region:region, basket:basket, version:1.04 } );

	// A writable HTTP response stream

	//console.log( templateFn( { city:city , region:region } ));

	// response.write( templateFn( { city:city , region:region } ));
	// response.end();
})

app.listen(PORT, () => console.log('Port', PORT ));

// https://shielded-springs-69756.herokuapp.com/
