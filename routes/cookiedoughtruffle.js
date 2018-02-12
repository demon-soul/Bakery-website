var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('cookiedoughtruffle', { title: 'Cookie Dough Truffle',id:38 });
});


module.exports = router;
