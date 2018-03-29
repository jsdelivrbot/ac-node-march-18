
// Async testing without a test framework.

let { getData } = require("./code.js");

// Start a local web server in this folder on Mac Os using
// python -m SimpleHTTPServer 1200

let path = "http://localhost:1200/backpacks.json" ;

let testA = () => {
    let result = getData( path )
    console.log( "Test A\n" , JSON.stringify( result ));
}

testA();

let testB = async () => {
    let result = await getData( path )
    console.log( "Test B\n" , JSON.stringify( result ));
}

testB();
