const mongoose = require('mongoose');


const PizzaSchema = new mongoose.Schema({
 name:{
     type:String,
     required:true,
 },
 price:{
     type:Number,
 },
 ingredients:{
    type: [String],
}
});

const PizzaModule=new mongoose.model('pizza',PizzaSchema);
module.exports=PizzaModule;