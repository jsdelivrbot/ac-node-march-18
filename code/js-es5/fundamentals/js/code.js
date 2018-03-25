
/*
Understanding Javascript requires an understanding of :
	- variables, arrays, objects, functions.
	- the ability to combine these four elements in flexible ways to structure an application
*/

// -----------------------------------------------------

/* Variables
	- case sensitive
	- weakly typed : type is not defined, and can change
	- unitialised variables are undefined
	- globally scoped if defined outside a function, or object.

	var town = "Pangbourne";
	console.log( Town ); // runtime error
*/

var city;
console.log( typeof city === "undefined" );

// -----------------------------------------------------

// Array
var capitals = [ "London" , "Paris", "Madrid", "Rome", "Oslo" ];

// Move from back to front
var last = capitals.pop();
capitals.unshift( last );
console.log( capitals );

// Move from front to back
var first = capitals.shift();
capitals.push( first )
console.log( capitals );

// -----------------------------------------------------

// Objects are descriptive, self-documenting name/value pairs.
// Mutable

var fuji = {
	name	: "Mount Fuji",
	height	: 4776,
	country	: "Japan",
	ranking	: 40
}

// -----------------------------------------------------

// PRIMITIVES : number, string, boolean, null, undefined.
// Everything else is OBJECT-like (and complex)

// Assignment of primitives (numbers,strings), is a copy by values.
// This creates 2 independent variables.

var fred = 24;
var jack = fred;
jack = 48;
console.log( fred,jack );

// Complex objects : copy-by-reference, not copy-by-value
// Simple assignment will create two pointers to the same object.
// Create an independent copy.
// Deep copy may require additional work.

var b = Object.assign( {} , fuji )

// Objects are unique, and cannot be compared, even when contents are the same.

console.log( fuji, b );

// -----------------------------------------------------

// Functions define local scope.
// Functions are hoisted to top of containing scope.
// Omitting VAR creates an implied global
// There are no private access modifiers, unlike other languages.

function getArea( width, length ) {
	var area = width * length;
	return area;
}

console.log( getArea(6,4));

// -----------------------------------------------------

// Truthy, falsy
// Everything can be converted to a boolean value. Most things become true.

function isTrue( value ) {
	console.log( value + " is " + (value ? "Truthy" : "Falsy" ));
}

isTrue( true );
isTrue( 4 );
isTrue( -64 );
isTrue( "green" );
isTrue( [ 4,5,6,7,8 ] );
isTrue( { name:"Fred" , age: 64 } );

isTrue( false );
isTrue( 0 );
isTrue( "" );
isTrue( null );
isTrue( undefined );
isTrue( NaN );

var webApp = webApp || {} ;
webApp.View = webApp.View || {};

// -----------------------------------------------------

// Strict equality

console.log( 4 == "4" );
console.log( 4 === "4" );

var something ;
console.log( something == null );

console.log( null == undefined );
console.log( false == 0 );
console.log( false == "" );
console.log( "" == 0 );
console.log( true == "1" );
console.log( "1" == 1 );


// -----------------------------------------------------

// SCOPE

// Variables created outside of a function/object, are global.
var town = "Southwold";
console.log( town === window.town );

// There is no block scope.
for ( var j=0; j < 10; j++ ) {}
/*
- j exists outside the loop
- j is hoisted to the top of containing scope
- Omitting var creates an implied global
- ES6 will have LET and CONST block-scoped variables.
- Easy to create logic errors around <= and ++
*/

// Minimise the global namespace, to avoid name collisions.
