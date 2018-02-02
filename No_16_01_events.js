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

/**
 events.EventEmitter
 emitter.addListener(event,listener)==on//添加监听
 emitter.on(event,listener)
 emitter.once(event,listener)//一次性监听器
 emitter.removeListener(event,listener)//删除指定监听
 emitter.removeAllListeners([event])//删除所有监听
 emitter.setMaxListeners(n)//默认情况下当一个事件的监听超过10个时,EventEmitter将打印警告信息,0表示无限制
 emitter.listeners(event)//返回特定事件的事件监听器集合
 emitter.emit(event,[arg1],[arg2].[...])//用提供的参数按照顺序执行每个事件监听器
 **/
/**
 emitter.on('someEvent',function(arg1,arg2,arg3){
    console.log('listener2',arg1,arg2,arg3);
 });
 emitter.emit('someEvent','arg1 参数','arg2 参数','arg3 参数');//抛出事件
 **/

var http = require('http');
var EventTools = require('./models/No_16_eventTools');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url != '/favicon.ico') {
        // 模拟request中传过来的值
        request['uname'] = '张三';
        request['pwd'] = '密码';
        request['act'] = '动作';

        // 实例化监听对象
        eventTools = new EventTools();
        // 一次性监听抛出事件消息为regSuccess的动作,参数要一一对应
        eventTools.eventEmit.once('regSuccess', function (uname, pwd, act) {
            response.write('注册成功!<br/>');
            response.write("传过来的uname: " + uname + "<br/>");
            response.write("传过来的pwd: " + pwd + "<br/>");
            response.write("传过来的act: " + act + "<br/>");
            //监听中触发登录事件,而不是在reg中调用,这样可以实现代码的松散性,以及便于维护
            eventTools.login(request, response);
            response.end('');
        });// 监听注册function

        // 执行注册
        eventTools.reg(request, response);

    }
}).listen(8000);
console.log('Server starting please access http://127.0.0.1:8000');