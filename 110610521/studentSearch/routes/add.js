var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');
//var mysql = require('mysql');

router.get('/',function(req,res,next){
    /*if(req.session.username){
        res.render('add');
    }
    else {
        res.redirect('/')
    }*/

     pool.query('select * from course',function(err,results){
        if(err) throw err;
        res.render('add',{data: results});
    });
});

module.exports = router;