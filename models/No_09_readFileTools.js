// 引入内部对象文件管理对象fs,用于操作文件
var fs = require('fs');
module.exports = {
    readFile_type_Sync: function (path, res) {
        // .readFileSync同步已utf8的形式读取文件
        var data = fs.readFileSync(path, 'utf-8');
        res.write(data);
    },
    readFile_type_Async: function (path, recall) {
        // .readFile默认异步标准写法
        fs.readFile(path, function (err, data) {
            if (err) {
                // 异步异常捕获(不需要特意写try,catch,异步捕获已在函数申明时定义)
                console.log("后台输出异步异常捕获的内容:" + err.toString());
                recall('异步异常捕获 后台输出异步异常捕获的内容');
            } else {
                recall(data);
            }
        });
    },
    other: function (flag) {
        if (flag == 0) {
            throw '主动抛出同步异常捕获';
        }
    }
}