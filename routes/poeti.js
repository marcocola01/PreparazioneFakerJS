var express = require('express');
var router = express.Router();
var file_poeti = require('../poeti.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(file_poeti);
  //res.render('index', { title: 'Express' });
});

router.get('/search/:email', function(req, res, next) {
    
    let poeta_trovato = file_poeti.poeti.find(poeta => poeta.email == req.params.email);
    console.log(poeta_trovato);
  
  //res.render('index', { title: 'Express' });
});

module.exports = router;