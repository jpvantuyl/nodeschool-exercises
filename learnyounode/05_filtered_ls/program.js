var fs = require('fs'),
    path = require('path');
    
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

var filepath = process.argv[2],
    filemask = process.argv[3];
fs.readdir(filepath, function callback(err, list) {
    if(!err) {
        //console.log(list);
        for (var i = 0; i < list.length; i++) {
            if(path.extname(list[i]).endsWith(filemask)) {
                console.log(list[i]);
            }
        }
    } else {
        //console.log('err: ' + err);
    }
});