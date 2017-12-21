// 同No_02含有多个function的调用写法
module.exports = {
    login: function (req, res) {
        res.write("login的function");
    },
    register: function (req, res) {
        res.write("register的function");
    }
}