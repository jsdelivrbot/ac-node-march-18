

let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

let logger = (e,s) => console.log( "[" + e + "] " + s + "\n");

let words = [];

io.on('connection', function(client) {

    logger('connection' , io.engine.clientsCount);

    client.on('join', function() {
        client.emit('broadcast', words);
    });

    client.on('disconnect', function () {
        logger('disconnect', io.engine.clientsCount);
    });

    client.on('talk', function(data) {

        logger( 'talk', data );
        words.push( data );

        let sentence = words.join(" ");

        // Send to all clients except sender
        // client.emit('broadcast', words);
        // client.broadcast.emit('broadcast', words);

        // Send to all clients including sender.
        io.emit('broadcast', sentence );
        logger( 'broadcast', sentence );

    });

    client.on('end', function(s) {
        client.disconnect(0)
    });

})

app.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/'));

logger('socket.io' , "localhost:4200" );
http.listen(4200);
