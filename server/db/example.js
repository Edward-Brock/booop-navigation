// MySQL 数据库配置信息
const mysql = require("mysql");
const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  database: "navigation"
});

module.exports = db;
