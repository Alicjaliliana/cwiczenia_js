var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({extanded : false }));
app.use(bodyParser.json());
var mongo = require("mongojs");
var databaseUrl = "blogDB"; // "username:password@example.com/mydb"
var collections = ["posts"];
var db = mongo(databaseUrl, collections);

app.get('/', function(req, res) {
	res.send('Hello world');
})
app.get('/allposts', function(req, res) {
	console.log('allposts get received');
	db.posts.find(function(err, posts) {
		console.log(posts);
		res.json(posts);
	});

});

app.get('/admin', function (req, res) {
	res.sendfile(__dirname + '/public/index.html');
});
app.post('/admin', function (req, res) {
	console.log('received add article request');
	console.log(JSON.stringify(req.body, null, 2));
	db.posts.insert(req.body, function (err, docs) {
		res.end(JSON.stringify(docs));
	});
});

var server = app.listen(8080);
