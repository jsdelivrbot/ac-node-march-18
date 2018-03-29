
// CLOSURE : function speak() will retain access to variables PERSON and PREFIX
// which were in scope at its time of creation.

function makeMessage( person ) {

	var prefix = "Hello ";

	function speak( p ) {
		person = ( typeof p === "undefined" ) ? person : p;
		console.log( prefix + person );
	}

	return speak;
}

var sp = makeMessage( "Bert" );
sp();

// You cannot directly read the closure variable name
console.log( "sp.name" , sp.person );

// This will not change the closure variable. Instead it will create
// a separate non-closure property called person.
sp.person = "Jane";

// You can change it by passing a parameter to the function
// It has access to the closure variables and can change them.
sp( "Fred" );

// Chrome will show the closure variables
console.dir( sp );

// ==================================================================
