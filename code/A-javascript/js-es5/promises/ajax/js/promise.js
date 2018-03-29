
function draw( s ) {

	$("<p>" , { text : s }).appendTo( "body" );

}

// This function wraps a standard JS AJAX function in a PROMISE wrapper.

var getJSON = function( json ) {

	var p = new Promise( function( resolve, reject ) {

		var ajax = new XMLHttpRequest();

		ajax.onload = function() {
			if (ajax.status == 200) {
				resolve( ajax.response );
			} else {
				reject( ajax.response )
			}
		}

		ajax.onerror = function() {
			reject("Network Error");
		};

		ajax.open('GET', json );
		ajax.send();

	})

	console.dir( p );

	return p;

}

var news = getJSON( "json/region.json" );

news
	.then( function( p ) {
		draw( p );
		// Read the first JSON file to work out the name of the 2nd JSON file.
		var nation = JSON.parse( p ).region;
		return getJSON( "json/" + nation );
	})
	.then( function( p ) {
		// JSON is valid but contains an empty array: []
		if( JSON.parse( p ).length === 0 ) {
			throw "Empty JSON";
		}
		draw( p );
	})
	.catch( function( e ) {
		console.log( "ERROR" , e );
	})
