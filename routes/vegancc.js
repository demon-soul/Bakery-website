var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('vegancc', { title: 'Vegan Chocolate Celebration Cake',id:22 });
});

module.exports = router;
