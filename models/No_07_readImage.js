// 引入内部对象文件管理对象fs,用于操作文件
var fs = require('fs');
module.exports = {
    readImg: function (path, res) {
        // .readFile可用于读取二进制图片文件,但是中间不能有其他输出否则读取图片失败
        fs.readFile(path, 'binary', function (err, fileData) { //binary表示是二进制读取(bin)
            if (err) {
                console.log(err);
                return;
            } else {
                res.write(fileData, 'binary');  //binary表示是二进制读取(bin)
                res.end('');
            }
        });
    }
}