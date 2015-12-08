var http = require('http');
var stdin = process.openStdin();


function send_req(res) {
	res.on('connect', function(req, socket) {
		socket.write('Coneccted');
	});
	res.on('data', function(data) {
		console.log(data.toString());
	});
}

stdin.addListener('data', function(data) {
	var client = http.get({host: '127.0.0.1', port: '8080'}, send_req)

	client.on('error', function(err) {
		console.log(err.message);
	});
});

