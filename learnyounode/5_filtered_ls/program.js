require('String.prototype.endsWith');

var fs = require('fs'),
	path = require('path'),
	dir = process.argv[2],
	ext = process.argv[3];

fs.readdir(dir, function (err, list) {
	if (err) {
		console.log(err);
	} else {
		for (var item in list) {
			if (path.extname(item) === '.' + ext)
				console.log(item);
		}
	}
});