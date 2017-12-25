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
var writeFileTools = require('./models/No_06_writeFileTools');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url != '/favicon.ico') {

        function recall(message) {
            response.write(message);
            response.end('');
        }

        var pathName = url.parse(request.url).pathname;
        pathName = pathName.replace(/\//, "");
        //router url value -> writeFile_type_Sync,writeFile_type_Async
        writeFileTools[pathName]('./reports/' + pathName + '.txt', 'This is function ->' + pathName + '<- report', recall);
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');