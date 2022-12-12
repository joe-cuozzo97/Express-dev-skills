var express = require('express');
var router = express.Router();

//All actual paths start with '/skills'
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
