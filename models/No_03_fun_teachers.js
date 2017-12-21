var Person = require('./No_03_fun_defult');
function Teacher(id, name, age) {
    // apply 继承父类
    Person.apply(this, [id, name, age]);
    // stu的成员属性
    this.type = '教师';
    this.leave = '特级';
    // teacher的成员方法
    this.speak = function (res) {
        // 使用父类方法
        this.where(res);
        res.write(this.leave + this.type + ' ' + this.name + " 在演讲<br/>");
    }
}
module.exports = Teacher; // 外部调用