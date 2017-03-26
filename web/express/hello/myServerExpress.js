var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//使用静态目录结构
app.use(express.static(path.join(__dirname, 'public')));

app.get('/index.htm', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function(req, res) {

  // 输出 JSON 格式
  var response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(3000, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
