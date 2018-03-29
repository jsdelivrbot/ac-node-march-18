
// This MODULE uses closure.
// There are four private variables : person, gender, conference, year.
// They are only accessible to functions draw and setName
// Draw and setName retain access to these private variables through closure.
// Any method created later cannot access these variables.
// They cannot be accessed directly. "woman.year" returns undefined.
// Use console.dir(woman) to view the closure defined on each function.

function createPass( person, gender ) {

	var conference = "Javascript";
	var year = 2017;

	function _draw() {
		var message = conference + " " + year + " " + person;
		drawPass( message, gender );
	}

	function _setName( p ) {
		person = p;
	}

	var public = {
		draw : _draw,
		setName : _setName
	}

	return public;
}

// ob is a MODULE with a public API for accessing private functions and variables.

var woman = createPass( "Jane Smith" , "woman" );
woman.setName("Grace Hopper");

// Methods added later do NOT have access to the closure, and will not work.

woman.setGender = function( g ) {
	gender = g;
}
woman.setYear = function( y ) {
	year = y;
}

woman.draw();
console.dir( woman );

var man = createPass( "Douglas Crockford","man" );
man.draw();
