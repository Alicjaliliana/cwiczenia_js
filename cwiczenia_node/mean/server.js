var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.urlencoded({extanded : false }));
app.use(bodyParser.json());
var mongo = require("mongojs");
var databaseUrl = "blogDB"; // "username:password@example.com/mydb"
var collections = ["posts", "comments"];
var db = mongo(databaseUrl, collections);
var reload = require('reload');

app.get('/', function(req, res) {
	res.send('Hello world');
})

app.get('/allposts', function(req, res) {
	console.log('allposts get received');
	db.posts.find().sort({'date': -1}, function(err, posts) {
		console.log(posts);
		res.json(posts);
	});
});

app.get('/admin', function (req, res) {
	res.sendfile(__dirname + '/public/index.html');
});

app.post('/admin', function (req, res) {
	console.log(req.body);
	db.posts.insert(req.body, function (err, docs) {
		res.end(JSON.stringify(docs));
	});
});

app.get('/getonepost', function(req, res) {
	db.posts.findOne({'_id': req.query.detail}, function (err, doc) {
		console.log(doc);
	 	res.json(doc);
	});
});

app.delete('/allposts', function (req, res) {
	console.log(req.query.toDel);
	console.log('post deleted');
	db.posts.remove({"_id": req.query.toDel}, {justOne: true});
});

app.get('/getcomments', function (req, res) {
	db.comments.find({'foreignId': req.query.foreignId}, function (err, doc) {
		res.json(doc);
	})
});

app.post('/getcomments', function (req, res) {
	console.log(req.body);
	db.comments.insert(req.body, function (err, doc) {
		res.json(doc);
	});
});

app.delete('/getcomments', function (req, res) {
	console.log(req.query.toDel);
	db.comments.remove({"_id": db.ObjectId(req.query.toDel)}, {justOne: true});
});
var server = app.listen(8080);

