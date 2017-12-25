// 基本输出框架
var http = require('http');// 引如内部对象http
http.createServer(function (request, response) {// 默认创建一个8000端口的页面写法
    // writeHead <=> end 开始和结束是一对
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url != '/favicon.ico') { // 防止浏览器会执行两边，用框架可忽略，框架已解决此问题
        // ......
        response.write('Hello World');
        // ......
        response.end('');//结束用，否则浏览器一直在执行操作，可不输出文字
    }
}).listen(8000);//浏览器打开的页面和端口
console.log('Server starting please access http://127.0.0.1:8000');//控制台打印信息，执行后此处会最先执行