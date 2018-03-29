#!/usr/local/bin/node
// executable:
// chmod +x read.js
// ./read.js > brick.reverse

"use strict";

const fs = require("fs");

let reverse = s => s.split("").reverse().join("")

fs.readFile( "brick.txt" , ( error, data ) => {

    // Data is a BUFFER: { type:"Buffer" , data:[ 45,12.. ]}
    // Adding character encoding parameter "utf8" will change its type.
    // console.log( JSON.stringify( data )) ;
    // Convert binary data to string before call reverse().

    // node read.js > brick.reverse
    process.stdout.write( reverse( data.toString() )) ;
})
