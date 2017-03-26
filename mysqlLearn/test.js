var mysql = require('mysql');
var connection = mysql.createConnection({
  //host: '116.62.103.54',
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'nodejs'
});

connection.connect();

var express = require('express');
var app = express();

app.get('/', function(req,res) {
  res.redirect('/list');
})

app.get('/list', function(req, res) {
  connection.query('SELECT * from t_users', function(error, results, fields) {
    if (error) throw error;
    console.log(fields);  //字段属性以及描述
    /**  对象构成的数组
      FieldPacket {
        catalog: 'def',
        db: 'nodejs',
        table: 't_users',
        orgTable: 't_users',
        name: 'userid',  // account, name, sex, headimg, lv, exp, coins, gems, roomid, history
        orgName: 'userid',
        charsetNr: 63,
        length: 11,
        type: 3,
        flags: 16931,
        decimals: 0,
        default: undefined,
        zeroFill: false,
        protocol41: true },
    */
    // results 是搜索结构组成的json对象数组
    res.json(results);
  });
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

var server = app.listen(3000, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

connection.end();
