// 多个函数的调用
module.exports = {
    func01: function (res) {
        res.write('this is func01');
    },
    func02: function (res) {
        res.write('this is func02');
    }
}
/*
// 只支持一个函数的调用
function func01(res){
    res.write("this is simple func01");
}
module.exports=func01;
*/