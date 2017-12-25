var Person = require('./No_03_fun_defult');

function Student(id, name, age) {
    // apply 继承父类
    Person.apply(this, [id, name, age]);
    // stu的成员属性
    this.type = '学生';
    // stu的成员方法
    this.action = function (res) {
        // 使用父类方法
        this.where(res);
        res.write(this.type + ' ' + this.name + " 在上课<br/>");
    }
}

module.exports = Student; // 外部调用