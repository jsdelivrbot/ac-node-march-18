
// utils.js

// Variables are scoped to this module (this file) unless you explicitly assign them to module.exports.

// Note: mixing the two styles of exports does not work.

"use strict";

module.exports.getArea = ( w,l ) => w*l;
module.exports.double = n => n*2;

module.exports.reverse = word => word.split("").reverse().join("");
module.exports.hyphenate = sentence => sentence.split(" ").join("-");

// module.exports = { reverse,hyphenate, getArea, double }

// This variable is private and not visible in code.js
// unless you omit let/var in which case it becomes globally scoped.

let city = "Oxford";
