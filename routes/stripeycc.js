var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('stripeycc', { title: 'Stripey Celebration Cake',id:21 });
});

module.exports = router;
