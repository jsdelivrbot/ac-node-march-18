
let fs = require("fs");
let promisify = require("util").promisify;
let encoding = "utf8";
let folder = "./europe/";

const YEAR = 2018;

let readP = promisify( fs.readFile );
let writeP = promisify( fs.writeFile );

// EUROPE is a folder of JSON files
// e.g. denmark.json contains { "capital":"Copenhagen"}
// Iterate over this folder
// Add a year property to the object for every file in the folder:
// { "capital":"Copenhagen" , year:2018 }

let readCity = f => {

    let path = folder + f;

    fs.lstat( path, (error, stats) => {

        if(stats.isFile()) {

            readP( path, encoding )

                .then( city => {
                    let c = JSON.parse( city );
                    c.year = YEAR;
                    return JSON.stringify(c)
                })

                .then( data => writeP( path,data ))

                .catch( error => console.log( "ERROR", error ))
        }

    });


}

fs.readdir( folder , (e, files) => files.forEach( readCity ));

// Alternative for reading folders: node-dir
/*
let folder = require('node-dir');

function search(error, content, fileName, next) {
    error ? console.log(err) : console.log(fileName);
    next();
}

let options =  {
    match: /.json$/,
    recursive: false
}

folder.readFiles('./', options , search );
*/
