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

/*
1. 从使用event api的消费者（consumer）的角度，event（不限于Node或JS）的思想是，
我不管谁给我发的消息，我只监听api给我提供的event，拿到event给我传递的数据，然后
做我该做的事，我不应该关心我的事情做完了会发生什么，因为你走你的阳关道，我过我的独
木桥，我去插手别人的事情，一定会引起混乱。  ==> event listener适用于互不影响
的（全局）事件处理。
2. 从构造event的api模块（module）的角度，event的思想是，把我内部的逻辑封装，
不让外面看到，只在合适的时候emit event，让消费者通过
.on('event', function(data) { } ) 得到结果。
至于外面的消费者想干嘛，我不应该关心，因为我的目的是提供一个统一的接口，
让成千上万消费者买的放心，用的舒心。
==> EventEmitter 往往用于为封装模块向外传递数据。
在一个event listener内部去emit另一个event往往是一个anti-pattern。
 */

// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected(data) {
    console.log("key is :" + data);
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function () {
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection',"here is key name");

console.log("程序执行完毕。");