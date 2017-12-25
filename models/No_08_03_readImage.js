// 引入内部对象文件管理对象fs,用于操作文件
var fs = require('fs');
module.exports = {
    readImg: function (path, res) {
        fs.readFile(path, 'binary', function (err, fileData) {
            if (err) {
                console.log(err);
                return;
            } else {
                res.write(fileData, 'binary');
                res.end('');
            }
        });
    }
}