var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log(req.session.email);
    res.render('products', { title: 'Our Products' });

});


module.exports = router;
