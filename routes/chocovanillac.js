var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('chocovanillac', { title: 'Chocolate Vanilla Cupcake',id:5 });
});


module.exports = router;
