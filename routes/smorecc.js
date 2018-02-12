var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('smorecc', { title: "S'mores Celebration Cake",id:19 });
});

module.exports = router;
