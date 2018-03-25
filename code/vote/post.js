
let server = "http://localhost:4000/village";
let voteRoute = server + "/vote";
let getVotesRoute = server + "/getvotes";
let emptyRoute = server + "/empty";

// ===========================================================

let postCard = document.querySelector("img");

postCard.addEventListener( "click" , function() {
	getRoute( emptyRoute );
} )

// ===========================================================

let menu = document.querySelector(".menu");

menu.addEventListener( "change" , function(e) {

	e.preventDefault();

	let v = e.currentTarget.value;

	if(v !== "Vote") {
		let vote = JSON.stringify( { village:v });
		postRoute( vote );
	}
})

// ===========================================================

function draw( villages ) {

	let el = document.querySelector(".votes");
	el.innerHTML = "";

	villages.forEach( function(v) {

		let span = document.createElement("p")
		span.textContent = v
		span.setAttribute("class", "village")
		el.appendChild(span)

	})
}
// ===========================================================

function postRoute( vote ) {}

// ===========================================================

function getRoute( route ) {
	console.log( route )
}

// ===========================================================

getRoute( getVotesRoute );
