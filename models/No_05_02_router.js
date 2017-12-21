var readFileTools = require('./No_05_01_readFileTools');
// 同No_02含有多个function的调用写法
module.exports = {
    // recall为主程序传入的回调方法，也可以单独写在这里，其作用是防止response.end结束后再次调用response的情况
    login: function (req, res, recall) {
        console.log("输出位置在->login内");
        res.write("login的function");
        // 使用readFileTools的异步调用方法
        readFileTools.readFile_type_Async('./views/No_05_02_login.html', recall);
    },
    register: function (req, res, recall) {
        console.log("输出位置在->register内");
        res.write("register的function");
        readFileTools.readFile_type_Async('./views/No_05_03_register.html', recall);
    }
}