var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('hellow');
	socket.pipe(socket);
});
server.listen(1337, '127.0.0.1');



