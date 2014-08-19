var filtered_ls = require('./modular_filtered_ls');

var filepath = process.argv[2],
    filemask = process.argv[3];
    
filtered_ls(filepath, filemask, function callback(err, data) {
    if(err) {
        console.log(err);
    } else {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    }
});