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



/* GET dogs */
router.get('/',dogs_controllers.dogs_view_all_Page );
router.get('/dogs/:id', dogs_controllers.dogs_detail); 
/* GET detail dogs page */ 
router.get('/detail',dogs_controllers.dogs_view_one_Page); 
/* GET create dogs page */ 
router.get('/create',dogs_controllers.dogs_create_Page); 
/* GET create update page */ 
router.get('/update',dogs_controllers.dogs_update_Page); 
/* GET delete dogs page */ 
router.get('/delete',dogs_controllers.dogs_delete_Page); 
module.exports = router;
