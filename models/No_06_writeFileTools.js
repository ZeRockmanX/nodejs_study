// 引入内部对象文件管理对象fs,用于操作文件
var fs = require('fs');
module.exports = {
    writeFile_type_Sync: function (path, writeData, recall) {
        fs.writeFileSync(path, writeData);// 同步写入文件 (+Sync的表示使用同步)
        recall('Sync写入成功');
    },
    writeFile_type_Async: function (path, writeData, recall) {
        fs.writeFile(path, writeData, function (err) {// .writeFile默认异步标准写法
            if (err) {
                throw err;
            } else {
                recall('Async写入成功');// 闭包回调保护
            }
        });
    }
}