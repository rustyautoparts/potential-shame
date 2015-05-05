var express = require('express');
var app = express();
var fs = require('fs');

var port = process.argv[2];
var file = process.argv[3];
var jsonFile = "";

fs.readFile(file, function(err, data) {
	if (err) throw err;
	jsonFile = JSON.parse(data);
});
app.get('/books', function(req, res) {
	res.json(jsonFile);
});
app.listen(port);
