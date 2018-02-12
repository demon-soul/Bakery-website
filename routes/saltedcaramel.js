var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('saltedcaramel', { title: 'Salted Caramel Cupcake',id:7 });
});

module.exports = router;
