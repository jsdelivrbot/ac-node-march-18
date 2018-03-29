// ES6 in Node
// ====================================================
if (true) {
    let city = "Oslo";
}
//console.log(typeof city === "undefined");
// ====================================================
const HOLIDAY = {
    city: "Paris",
    year: 2014
}
HOLIDAY.year++;
console.log(HOLIDAY);
// ====================================================
const MAX_TEMP = 104;
try {
    MAX_TEMP = 102;
} catch (error) {
    console.error("Primitive constants are immutable");
}
// ====================================================

let city = {
    name:"Seville",
    getName : function() {
        console.log( this.name );
    }
}

// Fails because THIS binds to the Timeout object.
setTimeout( city.getName,1000 );
// Using an arrow function lexically binds THIS to object city.
setTimeout( () => city.getName(),2000 );
// ====================================================
let spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:1.2, temp:94  },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:70  },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:78  },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:1.25, temp:88  },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:84 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:0.7, temp:68 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:0.7, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galician", popl:0.2, temp:60 }
];

let getHot = city => city.temp > 75 ;
let getPop = city => ( { name:city.name, popl:city.popl })
let hotCities = spain.filter( getHot ).map( getPop );
// Create array of objects : [ { name: 'Sevilla', popl: 1.2 } , .. ]

console.log( spain.filter( city => city.temp > 75 ).map( city => city.name ));
// ====================================================

function describe( city ) {
    console.log( `The population of ${ city.name } is ${ city.popl }` );
}

spain.forEach( describe )
// ====================================================
