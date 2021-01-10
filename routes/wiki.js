// wiki.js - Wiki route module.

var fs = require('fs');

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {

    fs.readFile('wikiIndex.html', function(err, data){
        if(err){
            console.error("cannot read file " + err);
            return;
        }
  
        res.send(data.toString());
        //https://expressjs.com/en/4x/api.html#res.json
    });  
});

// About page route.
router.get('/about', function (req, res) {
  res.send('About this wiki');
});

module.exports = router;

