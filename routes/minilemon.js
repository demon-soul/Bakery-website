var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('minilemon', { title: 'Mini Lemon Cupcake',id:15 });
});

module.exports = router;
