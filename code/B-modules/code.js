
// let reverse = require("./utils").reverse;
// let hyphenate = require("./utils").hyphenate;
// let getArea = require("./utils").getArea;
// let double = require("./utils").double;

let { reverse, hyphenate, getArea, double } = require("./utils");

console.log( reverse( "pneumonoultramicroscopicsilicovolcanoconiosis" ))

let sentence = "Broccoli is an edible green plant in the cabbage family";
console.log( hyphenate( sentence ));

console.log( getArea(6,4)) ;
console.log( double(2));

// Cannot see variable city defined in utils.js but not exported.

console.log( typeof city === "undefined" );
// console.log( global.city === city );
