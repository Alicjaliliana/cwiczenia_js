var net = require('net');
var sockets = [];

var server = net.createServer (function (socket) {
	socket.on('data', function (data) {
		
		for (var i = 0; i < sockets.length; i++) {
			if(sockets[i] != socket) {
				sockets[i].write(data.toString());
			}
		}
	});
	socket.on('connect', function() {
		sockets.push(socket);
	});
	socket.on('disconnect', function() {
		var index = 0;
		while (sockets[index] != socket) {
			index++;
			console.log(index);
		}
		sockets.remove(index);
	});
	
})


server.listen(1338, '127.0.0.1');
