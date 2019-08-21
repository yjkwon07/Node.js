const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const createError = require('http-errors');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 남들이 만든 미들웨어 
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'sercet code',
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());

// 자기가 만든 미들웨어 
app.use((req, res, next) => {
  console.log('첫 번째 미들웨어');
  // if(new Date() % 2== 0){
  //   next();
  // } else {
  //   res.send('ok end!!');
  // }
  next();
}, (req, res, next) => {
  console.log('두 번째 미들웨어');
  next();
});

// 라우터 미들웨어 
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 ERROR 미들웨어
app.use(function (req, res, next) {
  res.status(404).send('NOT FOUND');
});

// 500 ERROR
// 모든 에러처리 미들웨어 
app.use(function (err, req, res, next) {
  // console.log(err);
  // res.status(500).send('SERVER ERROR');

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;