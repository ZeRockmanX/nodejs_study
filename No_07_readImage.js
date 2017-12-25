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
var readImage = require('./models/No_07_readImage');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'image/jpeg'});//'Content-Type': 'image/jpeg'是读取二进制图片文件
    if (request.url != '/favicon.ico') {
        readImage.readImg('./imgs/RockA11.jpg', response); //读取文件(response.end在里面)
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');