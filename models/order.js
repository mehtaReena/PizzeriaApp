const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({

   OrderItems:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'OrderItem'

 }
});

const OrderModule=new mongoose.model('order',OrderSchema);
module.exports=OrderModule;