var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var dogs_controller = require('../controllers/dogs');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// dogs ROUTES ///

// POST request for creating a dogs.
router.post('/dogs', dogs_controller.dogs_create_post);

// DELETE request to delete dogs.
router.delete('/dogs/:id', dogs_controller.dogs_delete);

// PUT request to update dogs.
router.put('/dogs/:id', dogs_controller.dogs_update_put);

// GET request for one dogs.
router.get('/dogs/:id', dogs_controller.dogs_detail);

// GET request for list of all dogs items.
router.get('/dogs', dogs_controller.dogs_list);

module.exports = router;