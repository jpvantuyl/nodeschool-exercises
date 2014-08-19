var fs = require('fs'),
	path = process.argv[2],
	buf = fs.readFileSync(path);

console.log(Number(buf.toString().split('\n').length)-1);