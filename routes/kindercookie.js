var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('kindercookie', { title: 'Kinder Cookie',id:36 });
});


module.exports = router;
