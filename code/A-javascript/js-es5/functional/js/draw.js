
function draw( spain ) {

	$(".spain").empty()
	spain.forEach( drawCity )
}

function drawCity( city ) {

	var panel = $("<section>" , { class:"panel" }).appendTo(".spain");

	for ( var prop in city ) {

		if( prop === "image" ) {
			$("<img>" , { src:"media/" + city[ prop ] }).appendTo( panel )
		} else {
			var label = $("<p>" ).appendTo( panel )
			$("<span>" , {text : prop, class:"label" }).appendTo( label )
			$("<span>" , {text : city[ prop ] }).appendTo( label )
		}
	}

}
