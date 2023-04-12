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
    
    document.dogName = req.body.dogName;
    document.dogAge = req.body.dogAge;;
    document.DogPrice = req.body.DogPrice;
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

// VIEWS 
// Handle a show all view 
exports.dogs_view_all_Page = async function(req, res) { 
    try{ 
        result = await dogs.find(); 
        res.render('dogs', { title: 'dogs Search Results', results: result }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle a show one view with id specified by query 
exports.dogs_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await dogs.findById( req.query.id) 
        res.render('dogsdetail',  
{ title: 'dogs Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for creating a dogs. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.dogs_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('dogscreate', { title: 'dogs Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a dogs. 
// query provides the id 
exports.dogs_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await dogs.findById(req.query.id) 
        res.render('dogsupdate', { title: 'dogs Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.dogs_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await dogs.findById(req.query.id) 
        res.render('dogsdelete', { title: 'dogs Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

