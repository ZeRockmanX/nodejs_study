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
var otherFunc = require('./models/No_02_fun'); // 引入 model中含有func的文件，不用写后缀
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url != '/favicon.ico') {
        //使用支持一个函数的写法
        //otherFunc(response);
        // 多个函数的调用
        otherFunc.func01(response);
        otherFunc['func02'](response);
        response.end('');
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');