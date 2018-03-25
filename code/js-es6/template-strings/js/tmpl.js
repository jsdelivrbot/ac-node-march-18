
var cars = [
	{ name : "Checker Marathon", image : "checker-marathon.jpg" },
	{ name : "Chevrolet Impala", image : "chevrolet-impala.jpg" },
	{ name : "Cutlass Supreme", image : "cutlass-supreme.jpg" },
	{ name : "Ford Galaxie", image : "ford-galaxie.jpg" },
	{ name : "Grantorino Sport", image : "grantorino-sport.jpg" }
]

// cars.forEach( createCar );


function createCar( ob ) {

	var markup = `
		<section class="auto">
			<h2>${ ob.name }</h2>
			<img src="cars/${ ob.image }" />
		</section>
	`

	document.body.innerHTML += markup;
}

// ====================================================

function createCars() {

	var markup =
	`<section>
		${cars.map( ob =>
		`<section class="auto">
			<h2>${ ob.name }</h2>
			<img src="cars/${ ob.image }" />
		</section>`
	).join("")}
	</section>`;

	document.body.innerHTML = markup;
}

createCars()
