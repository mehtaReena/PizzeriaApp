const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({

 order:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'orderItem'

 }
});

const OrderModule=new mongoose.model('order',OrderSchema);
module.exports=CategoryModule;