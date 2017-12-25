var fs = require('fs');
module.exports = {
    readFile_type_Async: function (path, recall) {
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                recall(data);
            }
        });
    }
}