var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog', { 
  	title: 'Express',
  	test:[
  	  {
  	  	id:0,
  	  	content:'test00'
  	  },
  	  {
  	  	id:1,
  	  	content:'test01'
  	  }
  	]
  });
});


router.get('/test', function(req, res, next) {
  res.json({'test':123});
});


module.exports = router;
