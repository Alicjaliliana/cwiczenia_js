var net = require('net');

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
	console.log('Welcome');
	client.write('Hi there');
});

//Ala jest glupolem
client.on('data', function(data) {
	console.log( data.toString());
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Disconnected');
});
client.on('error', function(error) {
	console.log('error');
});
