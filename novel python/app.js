var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var install = require('./routes/install');

var information = require('./routes/information');
var admins = require('./routes/admins');
var test = require('./routes/test');
var viewNovel = require('./routes/viewNovel');
var viewSection= require('./routes/viewSection');

//引入自定义模块

//app版模块
var appIndex = require('./routes/appIndex');
var appViewNovel = require('./routes/appViewNovel');
//自动运行全自动偷取小说功能
//var novelAuto = require('./lib/novelAuto');
//novelAuto.getAllNovel();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/install', install);
app.use('/information', information);
app.use('/ajax/admins',admins);
app.use('/test',test);
app.use('/viewNovel',viewNovel);
app.use('/viewSection',viewSection);

//新增路由中间件规则

//app路由
app.use('/app/',appIndex);
app.use('/app/',appViewNovel);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
