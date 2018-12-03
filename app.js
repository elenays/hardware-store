var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');
let ObjectID = require('mongodb').ObjectID;
const dbName = 'firstproject';
let db_cursor = null;

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    db_cursor =  database.db(dbName);

});

app.get('/goods/:id', (req, res) => {
    const id = req.params.id;
    const details = {'_id': new ObjectID(id)};
    db_cursor.collection('goods').findOne(details)
        .then(function (item) {
            res.render('index', {
                title: item.title, article: item.article, size: item.size, color: item.color,
                description: item.description, price: item.price, img: item.img});
        })
        .catch(function (err) {
            if(err) throw err;
        });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;
