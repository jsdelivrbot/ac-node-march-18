
"use strict";

let reverse = s => s.split("").reverse().join("")

let fs = require("fs");

//     .createReadStream( process.argv[2] )
//     .pipe( process.stdout );

let chunkCount = 0 ;

const CHUNK_SIZE = 1024 ;

let file = process.argv[2] || "bard.txt" ;

fs
    .createReadStream( process.argv[2] , { highWaterMark: CHUNK_SIZE } )

    // {"type":"Buffer","data":[65,44,98,114,105,99,107,10]}
    // .on( "data" , chunk => console.log( JSON.stringify(chunk) ))

    .on( "data" , chunk => {
        //process.stdout.write( reverse( chunk.toString()));
        console.log("Chunk",chunkCount++)
    })

    .pipe(fs.createWriteStream(file + '.reverse'))

    .on( "end" , () => console.log("\n",chunkCount + " chunk(s)"))

    .on('close', () => console.log('Stream destroyed. File closed'))

    // If you do not listen for error events, an exception is thrown.
    .on( "error", e => console.log( "File not found:" , e.path  ))

// node stream.js brick.txt > brick.reverse
// The text file ends in a Linefeed Character (hexadecimal 0A, decimal 10)
