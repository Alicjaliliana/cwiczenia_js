var net = require('net');
var stdin = process.openStdin();
var socket = new net.Socket;

socket.connect(1338, '127.0.0.1', function() {
	socket.on('data', function (data) {
		console.log(data.toString());
	});
});

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then substring()  i
  socket.write(d.toString().trim());
  });
