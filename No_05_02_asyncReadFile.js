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
// 引入文件工具文件
var readFileTools = require('./models/No_05_01_readFileTools');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    response.write('异步处理读取文件内容，执行按照谁执行快谁先显示');

    // 异步处理读取文件内容，执行按照谁执行快谁先显示
    function recall(data) {
        response.write(data);
        console.log("输出位置在->response.end之前");
        response.end('');
    }

    if (request.url != '/favicon.ico') {
        readFileTools.readFile_type_Async('./views/No_05_01_welcome.html', recall);
        console.log("输出位置在->readFileTools.readFileSync之后");
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');