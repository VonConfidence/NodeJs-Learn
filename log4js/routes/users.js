var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
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
