var http = require('http'),
	concatStream = require('concat-stream');

var results = [],
	i = 0;

function printResponse(url, pos) {
	http.get(url, function (response) {
		response.pipe(concatStream(function (data) {
			results[pos] = data.toString();
			if (++i === 3) {
				console.log(results[0]);
				console.log(results[1]);
				console.log(results[2]);
			}

		}))
	    response.on('error', console.error);
	});
};

printResponse(process.argv[2], 0);
printResponse(process.argv[3], 1);
printResponse(process.argv[4], 2);