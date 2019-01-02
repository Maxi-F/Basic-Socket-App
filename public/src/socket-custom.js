var socket = io();

// on: listen events
socket.on('connect', function() {
    console.log('connected to server');
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('sendMessage', function(message) {
    console.log('server: ');
    console.log(message);
});

// emit: send info to the server
socket.emit('sendMessage', {
    user: 'Maximiliano',
    message: "Hello World"
}, function(response) {
    console.log(response);
});