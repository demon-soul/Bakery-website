var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('layered_cake', { title: 'Layered Cake' });
});

module.exports = router;
