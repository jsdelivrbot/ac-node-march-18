
var spain = [
	{ image:"sevilla.jpg", name:"Sevilla", region:"Andalusia", popl:1.2, temp:77,  },
	{ image:"valencia.jpg", name:"Valencia", region:"Valencia", popl:1.5, temp:70,  },
	{ image:"barcelona.jpg", name:"Barcelona", region:"Catalonia", popl:4.0, temp:72,  },
	{ image:"granada.jpg", name:"Granada", region:"Andalusia", popl:1.25, temp:72,  },
	{ image:"caceres.jpg", name:"Caceres", region:"Extremadura", popl:0.1, temp:76 },
	{ image:"alicante.jpg", name:"Alicante", region:"Valencia", popl:0.7, temp:68 },
	{ image:"zaragoza.jpg", name:"Zaragoza", region:"Aragon", popl:0.7, temp:64 },
	{ image:"vigo.jpg", name:"Vigo", region:"Galician", popl:0.2, temp:60 }
];

// ------------------------------------------------

function shortCity( city ) {
	return { name: city.name , region:city.region };
}

var imageTemp = function( city ) {
	return { image:city.image, temp:city.temp };
}

function isBig( city ) {
	return city.popl > 1
}

var andalusian = function( city ) {
	return city.region === "Andalusia"
}

draw( spain.filter( isBig ).map( shortCity ))
//draw( spain.filter( andalusian ).map( imageTemp ))

// ------------------------------------------------

// SORT uses a comparator function.

var hottest = spain.sort(
	function(a,b) {
		return (a.temp < b.temp)
	}
)

// ------------------------------------------------

var totalPop = spain
	.map( function( ob ) {
		return ob.popl
	})
	.reduce( function( a,b ) {
		return a+b;
	})

console.log( "Total population" , totalPop )

// Average temp : divide total by length of array

// ------------------------------------------------
