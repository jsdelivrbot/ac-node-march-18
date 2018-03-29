
const express = require('express');
const ejs = require('ejs');
const PORT = process.env.PORT || 5000;
const path = require("path");
const templatePath = path.join( __dirname, 'tmpl');

let app = express();
app.use(express.static(__dirname + '/tmpl'));

app.set('views', templatePath );

app.set('view engine','ejs');

app.get('/', function( request , response ) {

	let family = [
	    { name:"Jack Smith", age:64 },
	    { name:"Janet Ploggs", age:21 }
	];

	response.render( "people.ejs", { people: family });

})

app.listen(PORT, () => console.log('Port', PORT ));
