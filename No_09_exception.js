/*
// 基本输出框架
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url != '/favicon.ico') {
        ......
        response.end('');
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');
*/
var http = require('http');
var readFileTools = require('./models/No_09_readFileTools');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    function recall(message) {
        response.write(message);
        response.end('');
    }

    if (request.url != '/favicon.ico') {
        // try catch  同步捕获异常 (地址出错)
        // try {
        //     readFileTools.readFile_type_Sync('./views/No_Exist_Page.html', recall);
        // } catch (err) {
        //     response.write("同步异常捕获的内容:" + err.toString());
        //     response.end('');
        // }

        // try catch  同步捕获异常 (同步捕获,主动抛出异常)
        // try {
        //     // 输出为 [Error: 主动抛出]
        //     throw new Error('主动抛出');
        //     // 输出为 [主动抛出]
        //     throw '主动抛出';
        //     // 函数中的主动抛出
        //     readFileTools.other(0);
        // } catch (err) {
        //     response.write(err.toString());
        //     response.end('');
        // }

        // try catch  异步捕获异常 (readFile_type_Async中异步捕获)
        readFileTools.readFile_type_Async('./views/No_Exist_Page.html', recall);
    }

}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');