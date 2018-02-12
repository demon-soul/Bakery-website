var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('victorialc', { title: 'Victoria Layered Cake',id:32 });
});

module.exports = router;
