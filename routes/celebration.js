var express = require('express');
var router = express.Router();

router.get('/',function (req, res, next) {
    res.render('celebration',{title:"Celebration Cupcakes"});

});

module.exports = router;