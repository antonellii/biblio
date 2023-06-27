var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET users cool. */
router.get('/cool', function(req, res, next) {
  // * este é o mais correto: res.render('index', { title: 'you are so cool' });
  res.send('You are so cool');
});

module.exports = router;
