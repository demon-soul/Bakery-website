var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('minivanilla', { title: 'Mini Vanilla Cupcake',id:10 });
});

module.exports = router;
