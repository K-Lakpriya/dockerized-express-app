var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express on Docker' ,
    body: "Express on docker very cool isn't it?"});
});

module.exports = router;
