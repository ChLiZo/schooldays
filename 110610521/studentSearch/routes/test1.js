var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('./lib/db.js');

router.get('/',function(req,res,next){
    if(req.session.username){
        res.render('test1');
    }
    else {
        res.redirect('/')
    }

});

module.exports = router