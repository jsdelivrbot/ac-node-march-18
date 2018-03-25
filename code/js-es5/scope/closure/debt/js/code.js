
// This module uses CLOSURE to define private variables/functions.
// The module is not self-executing (IIFE), so multiple instances
// can be created from the debt function.
// Each has its own private data.

var debt = function() {

	var debt, nation,incr, speed;
	var interval, panel;

	function setDebt( n, d, i, s ) {

		nation = n;
		debt = d;
		incr = i;
		speed = s;

		panel = createPanel( nation, debt );

		panel.on( "click" , stop );

		interval = setInterval( update, speed*1000 );
	}

	function update() {
		debt += incr;
		updatePanel( panel, debt );
	}

	function stop() {
		clearInterval( interval )
	}

	return {
		setDebt: setDebt,
		stop:stop
	}

}


var n = debt()
n.setDebt( "Norway", 12000, 50,.1  )

var s = debt()
s.setDebt( "Sweden", 600000, -250,.2 )
