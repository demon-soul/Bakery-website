var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('miniredvelvet', { title: 'Mini Red Velvet Cupcake',id:12 });
});

module.exports = router;
