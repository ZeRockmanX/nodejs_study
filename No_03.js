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
// 引入模块（类）
var Person = require('./models/No_03_fun_defult');
var Students = require('./models/No_03_fun_students');
var Teachers = require('./models/No_03_fun_teachers');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url != '/favicon.ico') {
        // 实例化Person类
        def = new Person("编号", "许多人", "年纪");
        // 使用Person类中带方法
        def.where(response);
        stu = new Students("1", "张三", 35);//弱语言没有强制类型（字符，数字，boolean）
        stu.action(response);
        teacher = new Teachers(2, "李四", "32");
        teacher.speak(response);
        response.end('');
    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');