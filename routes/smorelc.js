var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('smorelc', { title: "S'mores Layered Cake",id:29 });
});

module.exports = router;
