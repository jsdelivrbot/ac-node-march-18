
var fs = require("fs");
var spain = "spain.json";

var filter = [];

// 1st argument is Node
// 2nd argument is path of this file.
// process.argv.forEach( function( value,n ) {
// 	console.log( value,n );
// })

if( process.argv.length > 2 ) {
	var region = process.argv[2];
} else {
	console.log( "Usage : node filter-region.js Andalusia" );
	return;
}

fs.readFile( spain , { encoding:"utf8" } , function( error, data ) {

	if( !error ) {
		var cities = JSON.parse( data );

		cities.forEach( function( ob ) {
			if ( ob.region === region ) {
				filter.push( ob );
			}
		});

		fs.writeFile( "result.json" , JSON.stringify( filter ) , function( error ) {})
	}
});
