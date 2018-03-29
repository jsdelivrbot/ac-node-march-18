
// Function declarations and variable declarations are hoisted to the top of their containing scope.
// Variable assignments and function expressions are not.

history();

function history() {

	hastings();

	function hastings() {

		battle = 1066;
		console.log( battle );

		var battle;
	}

	var agincourt = function() {

		console.log( battle );
		var battle = 1485;
	};

	agincourt();

}

/*
	Function definitions within IF blocks are a poor idea.
	ES5 does not have block scope, and hoisting may cause unpredictable results across browsers.
*/

var year = 1984;

if (year < 2000) {
  function getCentury() {
    return 20;
  }
} else {
  function getCentury() {
    return 21;
  }
}

console.log( "getCentury()" , getCentury());
console.log( getCentury.toString() );
