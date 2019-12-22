var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');
var drop_array = [];

router.get('/', function (req, res, next) {
    pool.query('SELECT course.c_name, course.teacher FROM course INNER JOIN choose ON course.c_id=choose.c_id WHERE choose.id=?',[req.session.username],function (err, results) {
        if (err) throw err;
        res.render('drop', { data:results})
    });

    /*if(req.session.username){
        res.render('drop');
    }
    else {
        res.redirect('/')
    }*/
    /* res.render('drop'); 不需要*/
});

module.exports = router;