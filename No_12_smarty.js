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
    if (request.url != '/favicon.ico') {
        try {
            var postData = "";
            request.on('data', function (chunk) {
                postData += chunk;
            });
            request.on('end', function () {
                postData = querystring.parse(postData);

                // 闭包里判断用提交的email替换模版中的{email}
                function recall(message) {
                    dataStr = message.toString();
                    if (postData['email'] != undefined) {
                        // arr数组和post[]中的元素对应
                        arr = ['email'];
                        for (var i = 0; i < arr.length; i++) {
                            // 正则定义,g表示全局
                            re = new RegExp('{' + arr[i] + '}', 'g');
                            // 替换{}中的内容
                            dataStr = dataStr.replace(re, postData[arr[i]]);
                        }
                    }
                    // 输出替换后的内容
                    response.write(dataStr);
                    response.end('');
                }

                readFileTools.readFile_type_Async('./views/No_12_smarty.html', recall);
            });
        } catch (err) {
            response.write("同步异常捕获的内容:" + err.toString());
            response.end('');
        }
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');