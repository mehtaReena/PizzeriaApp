const mongoose = require('mongoose');


const OrderItemSchema = new mongoose.Schema({
    pizzas: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Pizza'

    },
    quantity: {
        type: Number,
    },

});

const OrderItemModule = new mongoose.model('orderItem', OrderItemSchema);
module.exports = OrderItemModule;