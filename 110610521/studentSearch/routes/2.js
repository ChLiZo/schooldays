var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('./lib/db.js');

router.get('/',function(req,res,next){
    pool.query('select * from account',function(err,results){
        if(err) throw err;
        res.render('2',{data: results});
    });
});

module.exports = router;