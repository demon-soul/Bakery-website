var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('stripeylc', { title: 'Stripey Layered Cake',id:31 });
});

module.exports = router;
