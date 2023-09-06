const mongoose = require('mongoose');
const validator = require('validator')

const foodSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,
        required:[true , 'FoodName is required']},
    type:{type:String,required:true},
    price : {type:Number,required:true},
    // image : {type:String,required : true}
    
    
    
})

module.exports = mongoose.model('Food',foodSchema);