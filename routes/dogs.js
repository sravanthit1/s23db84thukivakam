//var express = require('express');
//var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('dogs', { title: 'Search Results dogs' });
//});

//module.exports = router;

var express = require('express');
const dogs_controllers= require('../controllers/dogs');
var router = express.Router();

const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET dogs */
router.get('/',dogs_controllers.dogs_view_all_Page );
router.get('/dogs/:id', dogs_controllers.dogs_detail); 
/* GET detail dogs page */ 
router.get('/detail',secured, dogs_controllers.dogs_view_one_Page); 
/* GET create dogs page */ 
router.get('/create',secured, dogs_controllers.dogs_create_Page); 
/* GET create update page */ 
router.get('/update',secured, dogs_controllers.dogs_update_Page); 
/* GET delete dogs page */ 
//router.get('/delete',secured, dogs_controllers.dogs_delete_Page); 
module.exports = router;
