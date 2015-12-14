var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get('/', function(req, res) {
	res.send('Hello world');
})

var server = app.listen(8080);
