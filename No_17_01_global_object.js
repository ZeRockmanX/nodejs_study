// 输出全局变量 __filename 的值
console.log( __filename );

// 输出全局变量 __dirname 的值
console.log( __dirname );

function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printHello, 2000);

function printHello(){
    console.log( "Hello, World! 01");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);

function printHello(){
    console.log( "Hello, World! 02");
}
// 两秒后执行以上函数 setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
setInterval(printHello, 2000);




console.log('Hello world');
console.log('byvoid%diovyb');
console.log('byvoid%diovyb', 1991);


console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
//
console.timeEnd('获取数据');

console.info("程序执行完毕。")