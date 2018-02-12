var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('vegancupcake', { title: 'Vegan Chocolate Cupcake',id:8 });
});

module.exports = router;
