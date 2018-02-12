var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('minimocha', { title: 'Mini Mocha Cupcake',id:16 });
});

module.exports = router;
