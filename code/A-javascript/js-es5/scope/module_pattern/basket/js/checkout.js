
var myApp = myApp || {} ;

// ===========================================================

myApp.view = function() {

	function basket( b ) {		
		b.forEach( function( o ) {
			var item = o.item + " £" + o.price;
			$("<p>", { text:item }).appendTo( "body" );
		}) ;
	}

	function total( t ) {
		$("<p>", { text:"£" + t.toFixed(2), id:"total" }).appendTo( "body" );
	}
	
    return { 
		basket:basket,
		total:total
	};

} () ;

// ===========================================================

myApp.model = function() {

	var basket = [];
	
	function calcTotal() {
	
		var total = 0;
		basket.forEach( function( o ) {			
			total += o.price;
		}) ;
		return total
	}
    
    function buy( o )  {
        basket.push( o );
    }
    function empty() {
        basket = [];
    }
    function getTotal() {
        return calcTotal();
    }
    function getBasket() {
        return basket;
    }

    return {
        buy : buy ,
        empty : empty ,
        getTotal : getTotal,
        getBasket : getBasket
    }
    
} () ;

// ===========================================================

var shoppingList = [
	{ item : "Beans" , price : 0.45 },
	{ item : "Milk" , price : 1.02 },
	{ item : "Beer" , price : 4.12 },
	{ item : "Bread" , price : 0.85 }
]

// ===========================================================

shoppingList.forEach( myApp.model.buy );

myApp.view.basket( myApp.model.getBasket());
myApp.view.total( myApp.model.getTotal());

// ===========================================================

// We cannot MIXIN additional methods later to a closure.

// checkOut.getSizeOfBasket = function() {
//     return basket.length;
// }
// checkOut.getSizeOfBasket()


    	
