var net = require('net'),
	strftime = require('strftime');

var server = net.createServer(function (socket) {
	socket.write(strftime('%F %H:%M') + '\n');
	socket.end();
});
server.listen(process.argv[2]);