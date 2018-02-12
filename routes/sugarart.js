var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('sugarart', { title: 'Sugar Art Cupcake',id:2 });
});

module.exports = router;
