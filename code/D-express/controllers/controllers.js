
// Controllers : these functions are not tied to a specific route.

exports.root = ( req,res ) => {

	let heading = "<h1>Hello</h1>"
	res.send( heading );
}

exports.page = ( req,res ) => {

	let heading = req.originalUrl.toUpperCase();
	res.send( `<h1>${heading}</h1>` );
}

// Pass in URL params
// http://localhost:4000/food?name=carrot&calories=45

exports.food = ( req,res ) => {

	let name = req.query.name ? req.query.name : "Missing";
	let calories = req.query.calories ? req.query.calories : "Missing";

	let markup = `
	<section>
		<h2>${ name }</h2>
		<h2>${ calories }</h2>
	</section>
	`;

	res.send( markup );
}
