var net = require('net');
var server = net.createServer(function(socket) {
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var connectTime = y + '-' + (m<=9 ? '0' + m : m) + '-' + (d<=9 ? '0' + d : d) + ' ' + (h<=9 ? '0' + h : h) + ':' + (mi<=9 ? '0' + mi : mi);

	socket.end(connectTime);
});
server.listen(process.argv[2]);
