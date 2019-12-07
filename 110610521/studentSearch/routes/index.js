var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = require('./lib/db.js');

var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser());
app.use(session({
  secret:"66666",
  resave:true,
  saveUninitialized:true,
  cookie:{maxAge: 600 * 1000}
}))
app.use(router);

var messages = "";
router.get('/',function(req,res,next){
if(req.session.username){
  res.redirect('test1');
}
else {
  res.render('index',{messages:messages});
}
});

router.post('/',function(req,res){
  var id = req.body['id'];
  var password = req.body['password'];
  pool.query("select * from account where id=?",[id], function(err, results) {  //根據帳號讀取資料
    if(err) throw err;
    if(results.length == 0) {  //帳號不存在
      messages = "帳號不正確！"
      res.render('index', {messages:messages})
    } else if(results[0].password != password) {  //密碼不正確
      messages = "密碼不正確！"
      res.render('index', {messages:messages})
    } else{  //帳號及密碼皆正確;
      req.session.username = id;
      res.redirect('test1');
    }
  });
})

/*
var id = req.body['id'];  //取得輸入的帳號
var password = req.body['password'];  //取得輸入的密碼
   pool.query("select * from account where id=?",[id], function(err, results) {  //根據帳號讀取資料
   if(err) throw err;
   if(results.length == 0) {  //帳號不存在
     messages = "帳號不正確！"
     res.render('users', {messages:messages})
   } else if(results[0].password != password) {  //密碼不正確
     messages = "密碼不正確！"
     res.render('users', {messages:messages})
   } else{  //帳號及密碼皆正確;
   }
 });
*/
 module.exports = app;