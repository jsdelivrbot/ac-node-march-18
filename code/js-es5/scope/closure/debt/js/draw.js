
// var n = createPanel( "Norway",1000 )

function createPanel( nation, debt ) {

	var panel = $("<section>" , { class:"panel" }).appendTo(".debts");

	$("<p>" , { text : nation, class:"nation" }).appendTo( panel );
	$("<p>" , { text : debt, class:"debt" }).appendTo( panel );

	return panel
}

// updatePanel( n , 4000 )

function updatePanel( panel, debt ) {
	panel.find( ".debt").text( debt );
}
