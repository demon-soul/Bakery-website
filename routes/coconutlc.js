var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('coconutlc', { title: 'Coconut Layer Cake',id:26 });
});


module.exports = router;
