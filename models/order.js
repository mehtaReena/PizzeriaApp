const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
 pizza:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Pizza'

 },
 order:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'orderItem'

 }
});

const OrderModule=new mongoose.model('order',OrderSchema);
module.exports=OrderModule;