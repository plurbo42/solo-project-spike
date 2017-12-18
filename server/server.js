var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    socket.on('roll', function (result) {
        console.log('Result: ', result);
        io.emit('roll', result);
    });
});

http.listen(port, function () {
    console.log('listening on port', port);
});