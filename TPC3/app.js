var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
require('dotenv').config({ path: '.env' })

var indexRouter = require('./routes/index');
var listIndividuos = require('./routes/listIndividuos');
var distribuicaoSexo = require('./routes/distribuicaoSexo');
var distribuicaoDesporto = require('./routes/distribuicaoDesporto');
var top10profissoes = require('./routes/top10profissoes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/listIndividuos', listIndividuos);
app.use('/distribuicaoSexo', distribuicaoSexo);
app.use('/distribuicaoDesporto', distribuicaoDesporto);
app.use('/top10profissoes', top10profissoes);

// catch 404 and forward to error handlerapenas
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
