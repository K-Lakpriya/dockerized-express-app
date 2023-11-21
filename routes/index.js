var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express on Docker' ,
    body: "Express is very cool isn't it?"});
});

module.exports = router;
