var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Sequelize = require('sequelize');
var sosRouter = require('./routes/soscontributions');
var othersRouter = require('./routes/othercontribution');
var PBRouter = require('./routes/PB');
var MAWRouter = require('./routes/Maw');
var PEMRouter = require('./routes/Pem');
var PSRouter = require('./routes/Projectsupplies');
var PCRouter = require('./routes/personalCost');
var TravelRouter = require('./routes/travel');
var SCRouter = require('./routes/subcontract');
var LOCRouter = require('./routes/LOC');
var cors = require('cors')
var app = express();
require('./db/connection.js')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*to remove cors error 
 add respose headers which allows browser to allow cors */

app.use(cors())

/* Routing of request patterns */

app.use('/other', othersRouter);
app.use('/sos', sosRouter);
app.use('/PB',PBRouter);
app.use('/MAW',MAWRouter);
app.use('/PEM',PEMRouter);
app.use('/PS',PSRouter);
app.use('/PC',PCRouter);
app.use('/SC',SCRouter);
app.use('/Travel',TravelRouter);
app.use('/LOC', LOCRouter);


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

app.listen(3000,(req,res)=>{
	console.log('connected to 3000')
});

module.exports = app;
