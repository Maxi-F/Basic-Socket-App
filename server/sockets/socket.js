const { io } = require('../server');

// IO = this is the communication of the backend

io.on('connection', (client) => {
    console.log('User Connected');

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'I HAV DA PAWAR'
    })

    client.on('disconnect', () => {
        console.log('User Disconnected');
    })

    // listen to the client
    client.on('sendMessage', (data, callback) => {

        console.log(data);

        client.broadcast.emit('sendMessage', data);
        /*if (messageObject.user) {
            callback({
                response: "everything ok"
            });
        } else {
            callback({
                response: "everything wrong :c"
            })
        }
        */
    })
})