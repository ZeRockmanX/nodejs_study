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
// post 需要用到请求格式
var querystring = require('querystring');
var readFileTools = require('./models/No_10_readFileTools');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});

    function recall(message) {
        response.write(message);
        response.end('');
    }

    if (request.url != '/favicon.ico') {
        try {
            // post 方法是异步执行,所以会先出页面再获取post的值,可用闭包等待
            var postData = "";
            // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
            request.on('data', function (chunk) {
                postData += chunk;
            });
            // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
            request.on('end', function () {
                postData = querystring.parse(postData);
                if (postData['email'] != undefined) {
                    response.write(postData['email']);
                }
                readFileTools.readFile_type_Async('./views/No_10_02_postLogin.html', recall);
            });
        } catch (err) {
            response.write("同步异常捕获的内容:" + err.toString());
            response.end('');
        }
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');