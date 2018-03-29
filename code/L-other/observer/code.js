
let Search = require('./search');

let detectives = [ "./data/morse.txt","./data/maigret.txt"];

let oxford = new Search( /oxford/gi );

oxford
    .addFiles( detectives )
    .search()
    .on('found', (file,word) => console.log( file,word ))
    .on('error', e => console.log( "Error",e.path));

let paris = new Search( /paris/gi );

paris
    .addFiles( detectives )
    .search()
    .on('found', (file,word) => console.log( file,word ))
    .on('error', e => console.log( "Error",e.path));
