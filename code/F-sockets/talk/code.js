// socket.io-client exposes a io global

let logger = (e,s) => console.log( "[" + e + "] " + s + "\n");

let joinMessage = "Client " + Date.now() + " joining";

$('form').submit(function(e){
    e.preventDefault();
    let m = $('#chat').val().trim()
    if( m ) {
        socket.emit('talk', m);
    }
    $('#chat').val("")
});

var socket = io.connect('http://localhost:4200');

socket.on('talk', function(data) {
    logger( 'talk', data);
});

socket.on('broadcast', function(data) {
    logger( 'broadcast',data);
    $('.words').text( data )
});

socket.on('connect', function() {
    socket.emit('join', Date.now() );
});
