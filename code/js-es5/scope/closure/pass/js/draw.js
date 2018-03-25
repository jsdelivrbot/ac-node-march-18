
function drawPass( message,gender ) {

	var panel = $("<section>" , { class:"panel"}).appendTo('.people');
	$("<img>" , { src: "media/" + gender + ".png"  }).appendTo( panel );
	$("<p>",{ text:message } ).appendTo( panel );

};
