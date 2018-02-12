var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('minichoco', { title: 'Mini Chocolate Cupcake',id:9 });
});

module.exports = router;
