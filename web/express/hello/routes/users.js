var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query); // { n: 'Lenda', age: [ '12', '13' ] }
  //express deprecated req.param(name):
  // Use req.params, req.body, or req.query instead routes\users.js:7:19
  console.log(req.param('n')); // Lenda   param是一个Function
  console.log(req.params); // {}   params是一个对象
  res.send('respond with a resource');
});

var usersList = [
  { username: 'a', age: 1, sex: 1 },
  { username: 'b', age: 2, sex: 0 },
  { username: 'c', age: 3, sex: 1 },
  { username: 'd', age: 4, sex: 1 },
  { username: 'e', age: 5, sex: 0 },
  { username: 'f', age: 6, sex: 1 },
  { username: 'g', age: 7, sex: 0 },
];
router.get('/list', function(req, res, next) {
  res.json(usersList);
});

module.exports = router;
