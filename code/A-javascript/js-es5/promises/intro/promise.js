
function draw( s, _class ) {
	$("<p>" , { text : s, class:_class }).appendTo( "body" );
}

function makeColour() {

	var p = new Promise(
		function( fulfill,reject ) {
			( Math.random() > 0.5 ) ? fulfill("Green") : reject("Red");
		}
	);

	return p;
}

function makeTime() {

	var p = new Promise( function( fulfill,reject ) {

		// fulfill and reject are internal functions containing
		// native code, and are part of the Promise API.

		var t1 		= Math.floor(Math.random() * 1000);
		var t2 		= Math.floor(Math.random() * 1000);

		// Both these setTimeout functions will run.
		// But only the first setTimeout function to run,
		// will change the promise state from PENDING to (FULFILLED or REJECTED)
		// and change the VALUE from undefined to (fMsg or rMsg)

		setTimeout( function() { fulfill("T1") } , t1 );
		setTimeout( function() { reject("T2") } , t2 );
	})

	return p;

}

let time = makeTime();

time
	.then( function(s) {
		// Promises let you transform future values by returning/passing on
		// a transformed value to the next THEN in the chain.
		// return s.toUpperCase();
		// Or return another promise
		draw(s,"success");

		let colour = makeColour();
		return colour;
	})
	.then( function(s) {
		if ( Math.random() < 0.5) {
			 throw new Error()
		 }
		draw(s,"success");
	})
	.catch( function(s) {
		// If an error occurs, inside a THEN,
		// after a successfully resolved promise
		// it will pass the run-time error on to the CATCH handler.
		// The state of the promise will not change.
		draw(s,"error");
	})

// The promise has a STATUS (fulfilled/rejected) and a VALUE (the message)

// If fulfill or reject are not called in the promise, the STATE is "pending"
// and the VALUE is undefined.

// A promise can STATE CHANGE from pending->fulfilled, or pending->rejected.
// No further state change will occur.

// A promise is SETTLED once it has changed state to either fulfilled or rejected.

// A promise is a sort of limited STATE MACHINE. It moves once from one state+value
// to another state+value.

// A promise can be used to handle async AJAX calls, but does not have to be.
// Here the promise is merely an object which handles/simplifies async logic.

// A promise object is THENABLE : THEN functions can be attached to it.

// The real world parallel has been drawn to a transaction in a shop.
// You order a burger. The fast-food worker hands you a receipt.
// The receipt is an agreed contract to fulfill a future food transaction.
// You take the receipt back to the counter later, and may be handed a burger.

// There is a POLYFILL to add promise support to older browsers:
// https://github.com/stefanpenner/es6-promise#readme

// Promises allow use to construct flatter time-independent wrappers
// around async JS logic.

// Promises are resolved ONCE and become immutable once resolved.
