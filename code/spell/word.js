let word = [];
let BACKSPACE = 8;

let typeLetter = e => {

	let code = e.keyCode;
	console.log(code);

	if( code === BACKSPACE ) {
		word.pop();
	}
	if( code >= 65 && code <= 90) {
		let letter = String.fromCharCode(code);
		word.push(letter);
	}

	$(".game").text(word.join(""))
}

$("body").on("keyup", typeLetter);
