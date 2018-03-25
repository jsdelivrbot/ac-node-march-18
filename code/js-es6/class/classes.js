
// ES6 classes

// ES5 : invoking a function as constructor
/*
function Capital( c ) {
	this.name = c;
}

Capital.prototype.getName = function() {
	console.log( this.name );
}

var norway = new Capital("Oslo");
var finland = new Capital("Helsinki");
*/

// ======================================================

class Rectangle {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {

    constructor(length) {
        super(length, length);
    }

    getArea() {
        return super.getArea() + " sq metres";
    }
}

var sq = new Square(4);
console.log( sq.getArea());

Rectangle.prototype.isSquare = function() {
	return this.length === this.width;
}

console.log( sq.isSquare());
