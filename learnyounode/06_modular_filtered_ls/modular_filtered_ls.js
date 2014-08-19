var fs = require('fs'),
    path = require('path');

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

module.exports = function (filepath, filemask, callback) {
    fs.readdir(filepath, function (err, list) {
        if(err) {
            return callback(err);
        }
        
        var data = [];
        
        for (var i = 0; i < list.length; i++) {
            if(path.extname(list[i]).endsWith(filemask)) {
                data.push(list[i]);
            }
        }
        
        return callback(null, data);
    });
};