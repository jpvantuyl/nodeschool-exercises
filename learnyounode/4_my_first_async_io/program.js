var fs = require('fs'),
	path = process.argv[2];

fs.readFile(path, function (err, buf) {
	if (err) {
		console.log(err);
	} else {
		console.log(Number(buf.toString().split('\n').length)-1);
	}
});