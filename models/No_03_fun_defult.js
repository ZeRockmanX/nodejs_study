// js中没有类class的写法都是用function来代替
function defultPerson(id, name, age) {
    //带this的是class成员属性（变量）
    this.id = id;
    this.name = name;
    this.age = age;
    //带this的是class成员方法（函数）
    this.where = function (res) {
        res.write(this.name + " 在教室里面<br/>");
    }
}

module.exports = defultPerson; // 外部唯一调用defultPerson函数（或class）