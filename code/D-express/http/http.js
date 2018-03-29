// HTTP server class inherits from EventEmitter.

let http = require("http");
let server = http.createServer();

const PORT = 4000;
let connections = 0;

let connect = (e) => console.log("Connected", connections++ );

let webRequest = ( request,response ) => {
  response.writeHead( 200, {'Content-Type':'text/plain'} );
  response.end(Date.now().toString());
}

server.on( "request" , webRequest )
server.on( "connection" , connect );

server.listen( PORT , () => console.log("localhost",PORT));

console.log("Server running");
