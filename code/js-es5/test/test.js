
function assert( ob ) {

    let result = ob.expr ? "pass" : "fail";
	let el = `<p class='${result}'>${ob.message}</p>`;

	document.body.innerHTML += el;
}

// ========================================

function double(n) {
    let result = n*2;
    return result
}

let suiteOfTests = [
    { expr : (double(2) === 4) , message:"double(2) equals 4" },
    { expr : (typeof result === "undefined") , message:"Variable result is not a global" },
]

suiteOfTests.forEach( assert );
