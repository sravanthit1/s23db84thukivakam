var dogs = require('../models/dogs');
// List of all dogs
exports.dogs_list = async function(req, res) {
    try{
        thedogs = await dogs.find();
        res.send(thedogs);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
};

// for a specific dogs.
exports.dogs_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Dogs detail: ' + req.params.id);
};

// Handle dogs create on POST.
exports.dogs_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dogs();
    document.dogs_name = req.body.dogs_name;
    document.dogs_size = req.body.dogs_size;;
    document.cost = req.body.cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};

// Handle dogs delete form on DELETE.
exports.dogs_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dogs delete DELETE ' + req.params.id);
};

// Handle dogs update form on PUT.
exports.dogs_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dogs update PUT' + req.params.id);
};
