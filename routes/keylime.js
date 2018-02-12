var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('keylime', { title: 'Keylime Cake',id: 1 });
});


module.exports = router;
