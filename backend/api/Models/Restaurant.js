const mongoose = require('mongoose');

const foodAddSchmea = mongoose.Schema({

    food:{type:mongoose.Schema.Types.ObjectId, ref:'Food',required : true},
    _id:false
})
const restaurantSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    address : {type : String, required :true},
    food:[foodAddSchmea],
    image:{type:String}
})

module.exports = mongoose.model('Restaurant',restaurantSchema);