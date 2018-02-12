var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('redvelvetc', { title: 'Natural Red Velvet Celebration Cake',id:24 });
});

module.exports = router;
