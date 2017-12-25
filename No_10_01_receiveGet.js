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
// get/post需要用到url解析
var url = require('url');
var readFileTools = require('./models/No_10_readFileTools');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    function recall(message) {
        response.write(message);
        response.end('');
    }

    if (request.url != '/favicon.ico') {
        try {
            // get 方法是同步执行,所以按顺序执行逻辑
            var getData = url.parse(request.url, true).query;
            if (getData['email'] != undefined) {
                response.write(getData['email']);
            }
            readFileTools.readFile_type_Async('./views/No_10_01_getLogin.html', recall);
        } catch (err) {
            response.write("同步异常捕获的内容:" + err.toString());
            response.end('');
        }
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');