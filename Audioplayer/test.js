var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static('public'));

var data = "bla bla bla";
var path = process.argv[1].slice(0, -7)+ "public/src/";

app.get('/index.htm', function (req, res) {
	res.sendFile( __dirname + "/" + "index.htm" );
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

