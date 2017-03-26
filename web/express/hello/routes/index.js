var express = require('express');
var router = express.Router();


router.get('/', function(req,res,next) {
  res.render('index', { title: 'Express' });
})
/* GET home page. */
router.get('/resource', function(req, res, next) {
  console.log('The indexRoute: ');
  console.log(req.path);    //请求资源路径   /resource
  console.log(req.hostname);           // localhost
  console.log(req.protocol);           // http
  console.log(req.query);              // { uid: '123', name: 'feng' }
  console.log(req.route);              // 匹配路由
  console.log(req.baseUrl);   //  空字符串
  console.log(req.originalUrl);        // resource?uid=123&username=feng
  console.log(req.params);             // { '0': 'resource' }
  res.render('index', { title: 'Express' });
});

module.exports = router;
