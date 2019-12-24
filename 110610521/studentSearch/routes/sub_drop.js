var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');

router.post('/', function (req, res, next) {

    if(req.body.name==undefined){
        res.redirect('/drop');
    }

    var ll = [];
    if (typeof (req.body.name) == 'string') {
        ll[0] = req.body.name;
        n = 1;
    } else {
        n = req.body.name.length;
        for (var i = 0; i < req.body.name.length; i++) {
            ll[i] = req.body.name[i];
        }
    }

    for (var i = 0; i < n; i++) {
        pool.query("select c_id from course where c_name=?", [ll[i]], function (err, result) {  //根據帳號讀取資料
            if (err) throw err;
            pool.query('delete from choose where id=? AND c_id=?', [req.session.username, result[0].c_id], function (err, search) {
                if (err) throw err;
            })
        })
    }

    res.redirect('/test1');
    /*pool.query('select * from course INNER JOIN choose ON course.c_id=choose.c_id WHERE choose.id=?',[req.session.username],function(err,result2){
        if(err) throw err;
        console.log(result2);
        res.render('sub_drop', {
            name : result2
        });       
    })*/
});

module.exports = router;