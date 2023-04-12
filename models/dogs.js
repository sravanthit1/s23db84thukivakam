const mongoose = require("mongoose")
const dogsSchema = mongoose.Schema({
    dogName: String,
    dogAge: String,
    DogPrice: Number
})
module.exports = mongoose.model("dogs",
dogsSchema)