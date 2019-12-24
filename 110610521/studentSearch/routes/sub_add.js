var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');

router.post('/', function (req, res, next) {
    var ll = [];
    /*console.log(req.body.name);*/
    if(req.body.name==undefined){
        res.redirect('/add');
    }
    
    if (typeof (req.body.name) == 'string') {
        ll[0] = req.body.name;
        n = 1;
    } else {
        n = req.body.name.length;
        for (var i = 0; i < req.body.name.length; i++) {
            ll[i] = req.body.name[i];
        }
    }
    //ll紀錄req長度
    for (var i = 0; i < n; i++) {
        pool.query("select c_id from course where c_name=?", [ll[i]], function (err, result) {  //根據帳號讀取資料
            if (err) throw err;
            pool.query('select * from choose where id = ? AND c_id = ?', [req.session.username, result[0].c_id], function (err, search) {
                if (err) throw err;
                if (!search.length) {
                    pool.query('insert into choose(id,c_id) values(?,?)', [req.session.username, result[0].c_id], function (err, asd) {  //根據帳號讀取資料
                        if (err) throw err;
                    })
                } else {
                    return;
                }
            })

        })
    }
    res.redirect('/test1');
    /*res.render('sub_add', {
        name: req.body.name
    });*/
});

module.exports = router;