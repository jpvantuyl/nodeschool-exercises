var http = require('http'),
	concatStream = require('concat-stream');

var url = process.argv[2];

http.get(url, function (response) {
	response.pipe(concatStream(function (data) {
		console.log(data.toString().length);
		console.log(data.toString());
	}))
    response.on('error', console.error);
});