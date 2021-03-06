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
// 引入内部对象url
var url = require('url');
// 引入模块（路由function）
var router = require('./models/No_04_router');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url != '/favicon.ico') {
        var pathName = url.parse(request.url).pathname;//url对象的pares解析url地址中的path路径名（含'/'...）
        pathName = pathName.replace(/\//, "");//正则去掉url的根”/“
        router[pathName](request, response);//根据解析的url地址的value值调用router中对应的方法
        // ***router方法中没有的话会报错，因为没有做例外操作***
        response.end('');
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');