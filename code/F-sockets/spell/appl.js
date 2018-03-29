
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

let logger = (e, s) => console.log("[" + e + "] " + s + "\n");

let word = [];
let BACKSPACE = 8;

logger('socket.io', "localhost:4200");

io.on('connection', function(client) {

  logger('connection', io.engine.clientsCount);

  client.on('join', function(s) {
    logger('join', s);
    client.emit('spell', word.join(""))
  });

  client.on('disconnect', function() {
    logger('disconnect', io.engine.clientsCount);

    if (io.engine.clientsCount === 0) {
      word = [];
    }
  });

  client.on('spell', function(data) {

    let letter = (data === BACKSPACE) ? "BACKSPACE" : String.fromCharCode(data);
    let info = "KeyCode " + data + " letter " + letter;

    logger('spell', info);

    if (data >= 65 && data <= 90) {
      let letter = String.fromCharCode(data);
      word.push(letter);
    }

    if (data === BACKSPACE) {
      word.pop();
    }

    // Send to all clients including sender.
    io.emit('spell', word.join(""));


  });

})

app.use(express.static(__dirname + '/node_modules'));

app.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(4200);
