var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.send('Express');
  })
  /* GET home page. */
router.get('/resource', function(req, res, next) {
  res.send('Hello World Express');
});

module.exports = router;
