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

//引入事件对象
var events = require('events');

function eventTools() {
    this.eventEmit = new events.EventEmitter();
    this.reg = function (req, res) {
        console.log("注册");
        this.eventEmit.emit('regSuccess', '参数1', '参数2', '参数3');//抛出事件消息为regSuccess;
    },
        this.login = function (req, res) {
            console.log("登录");
            res.write(req['uname']);
            res.write(req['pwd']);
            res.write(req['act']);
        }
}

module.exports = eventTools;