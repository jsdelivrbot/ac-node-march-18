// Dynamic scope using THIS and BIND

var blues = {

	name : "Howling Wolf",
	born : "White Station, Mississippi",

	draw : function() {
		console.log( this.name , this.born );
		console.log( this );
	},

	pauseThenDraw : function() {

		// Here, the calling context sets THIS equal to window.
		// window.setTimeout( this.draw , 2000 );
		// If there are global variables called name and born, it displays them.
		// Explicitly bind the value of THIS to fix the problem.

		setTimeout( this.draw.bind( this ) , 250 );
	},
	clickDraw : function() {

		// Javascript binds the value of THIS to the DOM element clicked on.
		// Explicitly bind the value of THIS to fix the problem.

		document.body.addEventListener( "click" , this.draw.bind( this ))
	}
}

console.log( blues.name , blues.born );
console.log( blues )

// --------------------------------------------------------------------------------

// Some global variables whose names match the properties of the blues object.

var name = "John Lee Hooker";
var born = "Coahoma County, Mississippi" ;

blues.draw();

// --------------------------------------------------------------------------------

// This implicitly binds blues.draw() to the muddy object.

var muddy = {
	name : "Muddy Waters",
	born : "Issaquena County, Mississippi",
	draw : blues.draw
}

muddy.draw();

// --------------------------------------------------------------------------------

// Explicitly bind the blues.draw method to the robert object.
// robertDraw is a new function, whose context points THIS at robert.

var robert = {
	name : "Robert Johnson",
	born : "Hazlehurst, Mississippi",
}

var robertDraw = blues.draw.bind( robert );
robertDraw();

// --------------------------------------------------------------------------------

blues.pauseThenDraw();
blues.clickDraw();

// --------------------------------------------------------------------------------
