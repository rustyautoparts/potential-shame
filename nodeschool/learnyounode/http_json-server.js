var http = require('http');
var url = require('url');

var port = process.argv[2];
var server = http.createServer(function(req, res) {
	var parsedUrl = url.parse(req.url, true);
	var parsedQuery = new Date(parsedUrl.query.iso);
	var unixify = {"unixtime": parsedQuery.getTime()}
	var jsonify = {
		"hour": parsedQuery.getHours(),
		"minute": parsedQuery.getMinutes(),
		"second": parsedQuery.getSeconds()
	}
	if (!parsedUrl) {
		res.writeHead(404);
	} else if (parsedUrl.pathname === '/api/parsetime') {
		res.writeHead(200, { 'Content-Type': 'application/json'});
		res.write(JSON.stringify(jsonify));
	} else if (parsedUrl.pathname === '/api/unixtime') {
		res.writeHead(200, { 'Content-Type': 'application/json'});
		res.write(JSON.stringify(unixify));
	} else {
		res.writeHead(404);
	}
	res.end();
});

server.listen(port);
