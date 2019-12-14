var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');

router.post('/', function (req, res, next) {



    var ll = req.body.name;
    //ll紀錄req長度
    for (var i = 0; i < ll.length; i++) {
        pool.query("select c_id from course where c_name=?", [ll[i]], function (err, result) {  //根據帳號讀取資料
            if (err) throw err;
            pool.query('insert into choose(id,c_id) values(?,?)', [req.session.username, result[0].c_id], function (err, results) {  //根據帳號讀取資料
                if (err) throw err;
            })
        })
    }
    res.render('sub_add', {
        name: req.body.name
        //,
        //c_id : req.body.c_id
    });
});

module.exports = router;