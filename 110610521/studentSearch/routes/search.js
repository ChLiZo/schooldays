var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    if(req.session.username){
        res.render('search');
    }
    else {
        res.redirect('/')
    }

    /* res.render('search'); 不需要 */
});

module.exports = router;