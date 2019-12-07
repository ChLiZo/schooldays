var mysql = require('mysql');
var pool = mysql.createPool({
    user:'root',
    password:'',
    host:'localhost',
    database:'test2',
    waitForConnections:true,
    connectionLimit:10
});

module.exports = pool;
