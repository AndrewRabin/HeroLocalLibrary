var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res){
    //console.log("AR index.html => /catalog redirect");
    res.redirect('/catalog');
})

module.exports = router;
