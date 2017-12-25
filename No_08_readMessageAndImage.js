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
var url = require('url');
var router = require('./models/No_08_01_router');
http.createServer(function (request, response) {
    if (request.url != '/favicon.ico') {
        var pathName = url.parse(request.url).pathname;
        pathName = pathName.replace(/\//, "");
        router[pathName](request, response);
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');