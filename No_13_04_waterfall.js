//异步控制插件,需要用npm install async安装才能引用
var async = require('async');

// 异步执行 串行有关联(瀑布流执行)
function exec() {
    // 瀑布流是数组模式,用[]
    async.waterfall(
        [
            function (done) {
                var i = 0;
                setInterval(function () {
                        console.log("A-Report" + new Date());
                        i++;
                        if (i === 5) {
                            clearInterval(this);
                            // done保证串行执行 如果有错误就不执行下去
                            done(null, 'done_oneFun_End');
                        }
                    }, 150
                );
                console.log("oneFun_End");
            },
            function (preareValue, done) {
                var j = 0;
                setInterval(function () {
                        console.log("A-Report Result: " + preareValue + " + -> B-Report" + new Date()
                        )
                        ;
                        j++;
                        if (j === 5) {
                            clearInterval(this);
                            // done保证串行执行 如果有错误就不执行下去
                            done(null, 'done_twoFun_End');
                        }
                    }, 100
                );
                console.log("twoFun_End");
            }
        ], function (err, result) {
            console.log('执行中的错误内容: ' + err);
            console.log('执行后的结果内容: ');
            console.log(result);
        }
    )
}

// 串行无关联输出,如果其中一个有错则整个出错(结果无关联)
exec();
console.log('Process End');