
var news = {}

//news.events = _.extend( {}, Backbone.Events );

news.view = function() {
	
	function drawStory( o ) {

		var panel = $("<section>", { class:"panel"}).appendTo(".news");
		
		$("<img>", { src: "media/" + o.image}).appendTo(panel );
		$("<h2>", { class:"headline", text:o.headline }).appendTo(panel );
		$("<p>", { class:"story", text:o.story }).appendTo(panel );
		$("<p>", { class:"source", text:o.source }).appendTo(panel );		
	}
	
	function draw( event, stories ) {
		
		stories.forEach( drawStory );
	}
	
	function setup() {
		$("body").on( "draw" , this.draw );
//		news.events.on( "draw" , this.draw );
	}
	
	return {
		setup: setup,
		draw : draw
	}
	
} () ;

news.model = function() {

	function getNews() {
		
		var config = {
			url : "json/news.json",
			dataType : "json",
			success : draw,
			error : error
		}
		$.ajax( config );
	}
	
	function draw( stories ) {
		$("body").trigger( "draw" , [stories] );	
//		news.events.trigger( "draw" , stories );	
	}
	
	function error() {
		console.log( "AJAX error" );
	}
	
	return {
		getNews : getNews
	}
} () ;

news.view.setup();
news.model.getNews();

