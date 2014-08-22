var http = require('http'),
	url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method != 'GET')
        return res.end('failed');
    
    res.writeHead(200, { 'content-type' : 'application/json'});
    var urlObj = url.parse(req.url, true),
        time = new Date(urlObj.query['iso']);
    if (urlObj.pathname === '/api/parsetime') {
        res.write(JSON.stringify({'hour': time.getHours(), 'minute': time.getMinutes(), 'second': time.getSeconds()}));
    } else if (urlObj.pathname === '/api/unixtime') {
        res.write(JSON.stringify({'unixtime': time.getTime()}));
    }
});
server.listen(process.argv[2]);