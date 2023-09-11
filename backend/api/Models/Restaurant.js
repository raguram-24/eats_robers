const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    address : {type : String, required :true},
})

module.exports = mongoose.model('Restaurant',restaurantSchema);