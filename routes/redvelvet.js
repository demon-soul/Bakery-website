var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('redvelvet', { title: 'Red Velvet Cupcake',id:6 });
});

module.exports = router;
