// 引入内部对象文件管理对象fs,用于操作文件
var fs = require('fs');
// 同No_02含有多个function的调用写法
module.exports = {
    readFile_type_Sync: function (path, res) {
        // .readFileSync同步已utf8的形式读取文件
        var data = fs.readFileSync(path, 'utf-8');
        res.write(data);
        console.log("输出位置在->readFileSync内");
    },
    readFile_type_Async: function (path, recall) {
        // .readFile默认异步标准写法
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                // 如果读取文件成功，闭包调用这个文件防止异步没有结束前，response.end结束后还需要调用response的情况
                recall(data);
            }
        });
        console.log("输出位置在->Async处理完毕");
    }
}