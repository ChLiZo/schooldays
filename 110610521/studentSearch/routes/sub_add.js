var express = require('express');
var router = express.Router();
var pool = require('./lib/db.js');

router.post('/',function(req,res,next){    
        res.render('sub_add',{
            name: req.body.name 
        });
    });

module.exports = router;