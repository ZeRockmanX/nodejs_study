var mysql = require('mysql');

// 使用mysql连接池需要安装插件:npm install -g node-mysql //-g表示全局安装
function mysqlPool() {
    this.flag = true;//是否需要初始化连接池
    this.pool = mysql.createPool({
        host: 'localhost',
        user: 'dev',
        password: 'dev',
        database: 'nodejs_table',
        port: '3306'
    });

    this.getPool = function () {
        //初始化连接池
        if (this.flag) {
            this.pool.on('connection', function (connection) {
                connection.query('SET SESSION auto_increment_increment=1');
                this.flag = false;
            })
        }
        return this.pool;
    }
};
module.exports = mysqlPool;