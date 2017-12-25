var readFileTools = require('./No_08_02_readFileTools');
var readImage = require('./No_08_03_readImage');

// 文字公用的Head提取写一个公用函数
function getRecall(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); // 文字类html的Head

    function recall(data) {    // 闭包
        res.write(data);
        res.end('');
    }

    return recall; // 公用函数需要一个return值
}

module.exports = {
    // 文字类的路由调用 <h1>information</h1>
    login: function (req, res, recall) {
        recall = getRecall(req, res); //调用公用函数(内含闭包函数)
        readFileTools.readFile_type_Async('./views/No_08_messageAndImage.html', recall);
    },
    // 图片类的路由调用 <img src='./displayImage'>
    displayImage: function (req, res, recall) {
        res.writeHead(200, {'Content-Type': 'image/jpeg'}); //普通写法,也可提取为公用函数写法
        readImage.readImg('./imgs/RockA11.jpg', res);
    }
}