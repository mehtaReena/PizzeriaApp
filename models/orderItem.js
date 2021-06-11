const mongoose = require('mongoose');


const OrderItemSchema = new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 quantity:{
     type:Number,
 },

});

const OrderItemModule=new mongoose.model('orderItem',OrderItemSchema);
module.exports=OrderItemModule;