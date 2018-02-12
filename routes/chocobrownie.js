var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('chocobrownie', { title: 'Chocolate Brownie',id:37});
});

module.exports = router;
