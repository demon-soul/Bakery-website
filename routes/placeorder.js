var express = require('express');
var router = express.Router();
var db = require('./connect');

router.get('/', function(req, res, next) {

    res.render('placeorder', { title: 'Order' });
});

module.exports = router;
