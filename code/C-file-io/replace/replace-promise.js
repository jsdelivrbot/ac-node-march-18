
let fs = require("fs");
let promisify = require("util").promisify;

let apples = "./apples.txt";
let pears = "./pears.txt";
let encoding = "utf8";
let regExpr = /apple/gi;
let replaceWord = "PEAR";

let readP = promisify( fs.readFile );
let writeP = promisify( fs.writeFile );

readP( apples, encoding )

    .then( data => data.replace( regExpr , replaceWord ))
    .then( data => writeP( pears,data ))

    .catch( error => console.log( error ))
