# schooldays
專題題題題題題


var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');

router.get('/',function(req,res,next){
    if(req.session.username){
        pool.query('SELECT course.c_name, course.teacher FROM course INNER JOIN choose ON course.c_id=choose.c_id WHERE choose.id=?',[req.session.username],function(err,result){
            if(err) throw err;
            console.log(result);
            res.render('drop',{data:result})
    })}else {
        res.redirect('/')
    }
    
    
});

module.exports = router;
