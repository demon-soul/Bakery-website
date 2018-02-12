var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('plumlc', { title: 'Plum Layered Cake',id:27 });
});

module.exports = router;
