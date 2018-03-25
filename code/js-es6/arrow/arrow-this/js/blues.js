// Dynamic scope using THIS and BIND

var blues = {

	name : "Howling Wolf",
	born : "White Station, Mississippi",

	draw : function() {
		console.log( this.name , this.born );
		console.log( this );
	},

	pauseThenDraw : function() {

		// Here THIS points to window, and so displays the global variables name, born.
		// setTimeout( this.draw , 250 );
		// Fix this by defining an arrow function.
		// Arrow functions bind THIS lexically to their containing scope, the blues object.

		setTimeout( () => this.draw() , 250 );
	},
	clickDraw : function() {

		// Here THIS points to the DOM element clicked on, the body element.
		// document.body.addEventListener( "click" , this.draw );
		// Fix this by defining an arrow function.
		// Arrow functions bind THIS lexically to their containing scope, the blues object.

		document.body.addEventListener( "click" , () => this.draw() );
	}
}

// --------------------------------------------------------------------------------

// Some global variables whose names match the properties of the blues object.

var name = "John Lee Hooker";
var born = "Coahoma County, Mississippi" ;

blues.pauseThenDraw();
blues.clickDraw();

// --------------------------------------------------------------------------------
