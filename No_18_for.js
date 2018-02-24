// 基本输出框架
var http = require('http');// 引如内部对象http
http.createServer(function (request, response) {// 默认创建一个8000端口的页面写法
    // writeHead <=> end 开始和结束是一对
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    if (request.url != '/favicon.ico') { // 防止浏览器会执行两边，用框架可忽略，框架已解决此问题
        // ......
        console.log("start");
        //exec1(response);
        //exec2(response);
        exec3(response);
        console.log("end");
        // ......
    }
}).listen(8000);//浏览器打开的页面和端口
console.log('Server starting please access http://127.0.0.1:8000');//控制台打印信息，执行后此处会最先执行

// function action (){}
// var action = function act (){}
// var action = () => {}


function exec1(response) {
    // * var 对整个｛｝生效 而 let 只对当前｛｝有效 推荐用exec3 的let写法
    // * 非闭包i的值还会多出1次
    for (var i = 0; i <= 10; i++) {
        function run() {
            setTimeout(function () {
                // 因为没有传值进来，没有等待传入值所欲不是闭包，所以会先运行完for循环后(i=10)，等100ms再执行的就都是10
                console.log("不算闭包打印" + i);
                var rs = i + 10;
                response.write(' ' + rs);

                // if (i === 11) {
                //     response.end('');//结束用，否则浏览器一直在执行操作，可不输出文字
                // }
            }, 1000);
        };
        run();
        console.log("先打印" + i);
    }
}

function exec2(response) {
    // ＊ var 对整个｛｝生效 而 let 只对当前｛｝有效 推荐用exec3 的let写法
    for (var i = 0; i <= 10; i++) {
        function run(i) {
            // 因为有传值进来，会等待所以形成了闭包，会先运行run(i=各个值)
            setTimeout(function () {
                console.log("闭包打印" + i);
                var rs = i + 10;
                response.write(' ' + rs);

                if (i === 10) {
                    response.end('');//结束用，否则浏览器一直在执行操作，可不输出文字
                }
            }, 1000);
        };
        run(i);
        console.log("先打印" + i);
    }
}

function exec3(response) {
    for (let i = 0; i <= 10; i++) {
        // let 只对当前｛｝有效,传不传都可以(待验证)
        function run(i) {
            setTimeout(function () {
                console.log("闭包打印" + i);
                var rs = i + 10;
                response.write(' ' + rs);

                if (i === 10) {
                    response.end('');//结束用，否则浏览器一直在执行操作，可不输出文字
                }
            }, 1000);
        };
        run(i);
        console.log("先打印" + i);
    }
}
