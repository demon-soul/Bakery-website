var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('minicaramel', { title: 'Mini Salted Caramel Cupcake',id:13 });
});

module.exports = router;
