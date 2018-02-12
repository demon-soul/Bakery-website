var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('strawcc', { title: 'Strawberry Milkshake Celebration Cake',id:20 });
});

module.exports = router;
