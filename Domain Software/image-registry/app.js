var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

var serveIndex = require('serve-index');

var app = express();
app.use(fileUpload());

app.get('/ping', function (req, res) {
  res.send('pong');
});

app.post('/upload', function (req, res) {
  let sampleFile;
  let uploadPath;
  let sensorName;
  console.log("req");
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }

  console.log('req.files >>>', req.files); // eslint-disable-line

  sampleFile = req.files.sampleFile;
  //sensorname
  sensorName = req.body.sensorName;
  //sensortype
  var s_name = sampleFile.name;
  var index = s_name.lastIndexOf(".");
  var imagetype = s_name.substring(index + 1, s_name.length);

  uploadPath = __dirname + '/uploads/img/' + sensorName + `.` + imagetype;
  webPath = '/uploads/img/' + sensorName + `.` + imagetype;

  sampleFile.mv(uploadPath, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    var obj = {
      code: 200,
      summary: "success",
      data: webPath,
      //sql返回的数据
  }
   // res.send(`You have uploaded this image to <server_url>${webPath}: <hr/><img src="${webPath}" width="500"><hr /><a href="./">Upload another image</a>`);
  res.send(obj);
  });
});


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

// https://github.com/expressjs/serve-index
app.use('/uploads', express.static('uploads'), serveIndex('uploads', { 'icons': true }))
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
