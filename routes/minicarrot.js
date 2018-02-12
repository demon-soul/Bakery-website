var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('minicarrot', { title: 'Mini Carrot Cupcake',id:11 });
});

module.exports = router;
