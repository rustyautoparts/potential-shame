var express = require('express');
var app = express();
var url = require('url');
var port = process.argv[2];

app.get('/search', function(req, res) {
	var json = JSON.stringify(req.query);
	res.send(json);
});
app.listen(port);
