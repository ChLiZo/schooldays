var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index'); //index
var test1Router = require('./routes/test1'); //test..
var courseRouter = require('./routes/1'); //1
var studentRouter = require('./routes/2'); //2
var add = require('./routes/add');
var drop = require('./routes/drop');
var mycourse = require('./routes/mycourse');
var search = require('./routes/search');


//var login = require('./routes/login');
//app.use('/login',login);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/test1',test1Router);
app.use('/1',courseRouter);
app.use('/2',studentRouter);
app.use('/add',add);
app.use('/drop',drop);
app.use('/mycourse',mycourse);
app.use('/search',search);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
