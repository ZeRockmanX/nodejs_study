function oneFun() {
    var i = 0;
    //setInterval写法
    setInterval(function () {
            console.log("A-Report" + new Date());
            i++;
            if (i == 5) {
                clearInterval(this);
            }
        }, 150
    );
    console.log("oneFun_End");
}

function twoFun(j, flag) {
    var flag = arguments[1] ? arguments[1] : 0;//设置第二个参数的默认值为0
    //setTimeout写法
    setTimeout(function () {
            j++;
            if (j < 6) {
                console.log("B-Report" + new Date());
                twoFun(j, 1);
            }
        }, 100
    );
    if (flag == 0) {
        console.log("twoFun_End");
    }
}

// 异步执行没有顺序
oneFun();
twoFun(0);
console.log('Process End');