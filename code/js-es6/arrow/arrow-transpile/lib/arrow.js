"use strict";

// ================================================================

// Older browsers do not support ES6.
// Transpilers convert ES6 source code to ES5 source code.
// Babel is a transpiler.
// To transpile this code back to ES5:
// Install Node
// From the arrow-transpile folder, run "npm install" from the command line.
// Then "npm run build"
// This creates ES5 code in the lib folder.

// ================================================================

// Two ES5 forms of a functions

function double(n) {
	return n * 2;
}

var double = function double(n) {
	return n * 2;
};

// More concise ES6 arrow functions.
// Only the argument and return statement are defined.

var double = function double(n) {
	return n * 2;
};
double(2);

// Adding a return keyword requires curly braces
var double = function double(n) {
	return n * 2;
};

// If you pass more than 1 argument, you need to add paretheses

var add = function add(a, b) {
	return a + b;
};

// A function with NO arguments needs paretheses

var getYear = function getYear() {
	return "2016";
};

// To return an object, wrap {} in ()

var createCity = function createCity(c, n) {
	return { city: c, nation: n };
};

console.log(createCity("Oxford", "UK"));

// An anonymous arrow function
(function (n) {
	return n * 2;
});

// A self-executing anonymous arrow function
(function (n) {
	return n * 2;
})(2);

// ================================================================

// Functional programming using map, reduce, sort, filter
// with inline arrow functions.

var spain = [{ image: "sevilla.jpg", name: "Sevilla", region: "Andalusia", popl: 1.2, temp: 77 }, { image: "valencia.jpg", name: "Valencia", region: "Valencia", popl: 1.5, temp: 70 }, { image: "barcelona.jpg", name: "Barcelona", region: "Catalonia", popl: 4.0, temp: 72 }, { image: "granada.jpg", name: "Granada", region: "Andalusia", popl: 1.25, temp: 72 }, { image: "caceres.jpg", name: "Caceres", region: "Extremadura", popl: 0.1, temp: 76 }, { image: "alicante.jpg", name: "Alicante", region: "Valencia", popl: 0.7, temp: 68 }, { image: "zaragoza.jpg", name: "Zaragoza", region: "Aragon", popl: 0.7, temp: 64 }, { image: "vigo.jpg", name: "Vigo", region: "Galician", popl: 0.2, temp: 60 }];

function draw(ar) {
	console.log(JSON.stringify(ar));
}

// Big cities
draw(spain.filter(function (city) {
	return city.popl > 1;
}));

// City names
draw(spain.map(function (city) {
	return city.name;
}));

// Names of big cities
draw(spain.filter(function (city) {
	return city.popl > 1;
}).map(function (city) {
	return city.name;
}));

// Sort by temp
draw(spain.sort(function (a, b) {
	return a.temp < b.temp;
}));

// Total population
draw(spain.map(function (city) {
	return city.popl;
}).reduce(function (a, b) {
	return a + b;
}));