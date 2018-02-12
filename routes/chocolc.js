var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chocolc', { title: 'Chocolate Layered Cake',id:26 });
});

module.exports = router;
