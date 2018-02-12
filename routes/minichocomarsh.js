var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('minichocomarsh', { title: 'Mini Chocolate Marshmallow Cupcake',id:14 });
});

module.exports = router;
