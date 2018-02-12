var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('confetticc', { title: 'Confetti Celebration Cake',id:17 });
});


module.exports = router;
