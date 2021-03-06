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
//创建一个数据库nodejs_table,再新建一张表user
/**
 create table user(
 uid int not null primary key auto_increment,
 uname char(100) not null,
 pwd char(100) not null
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;
 **/
// 使用mysql需要安装插件:npm install mysql
var mysql = require('mysql');
// 创建一个mysql连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dev',
    password: 'dev',
    database: 'nodejs_table',
    port: '3306'
});

connection.connect(function (err) {
    if (err) {
        console.log('[query] - :' + err);
        return;
    }
    console.log('[connection connect] succeed!');
});

// insert语句
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var addParam = ['new_uname', 'new_pwd'];
connection.query(userAddSql, addParam, function (err, result) {
    if (err) {
        console.log('insert err: ', err.message);
        return;
    }
    console.log('insert success');
});

// select语句
var selectSql = 'select * from user where uid=?';
var selectParam = ['1'];
//无参数查询
//connection.query(selectSql, function (err, result) {...}
//有参数查询
connection.query(selectSql, selectParam, function (err, result) {
    if (err) {
        console.log('[query] - :', err);
        return;
    }
    for (var i = 0; i < result.length; i++) {
        console.log('The solution is: ', result[i].uname);

    }
});

//关闭connection
connection.end(function (err) {
    if (err) {
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed!');
});