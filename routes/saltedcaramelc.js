var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('saltedcaramelc', { title: 'Salted Caramel Layered Cake',id:28 });
});

module.exports = router;
