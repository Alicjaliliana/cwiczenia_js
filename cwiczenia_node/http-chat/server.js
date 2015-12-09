var http = require('http');
var clients = [];

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('<html> <h2> HELLO </h2></html>');
});

server.on('connnect', function(req, socket, head){
	console.log('connected');
});

server.listen(8080, "162.243.16.82");
