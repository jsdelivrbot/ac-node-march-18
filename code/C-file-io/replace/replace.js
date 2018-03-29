
let fs = require("fs");
let apples = "./apples.txt";
let pears = "./pears.txt";
let encoding = "utf8";
let regExpr = /apple/gi;

fs.readFile( apples, encoding, function( error,data ) {

    if( error ) {
        console.log(error);
    } else {
        let pearData = data.replace( regExpr , "PEAR" )

        fs.writeFile( pears,pearData , function( error ) {
            if( error ) {
                console.log( error )
            } else{
                console.log("Created",pears);
            }
        })
    }
})
