var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('cookiedoughcc', { title: 'Cookie Dough Celebration Cake',id:18 });
});


module.exports = router;
