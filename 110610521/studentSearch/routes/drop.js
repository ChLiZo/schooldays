var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    if(req.session.username){
        res.render('drop');
    }
    else {
        res.redirect('/')
    }
    /* res.render('drop'); 不需要*/
});

module.exports = router;