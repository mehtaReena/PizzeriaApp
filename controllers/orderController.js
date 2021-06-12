
const Order = require('../models/order')



const getAllOrders = async () => {

    try {

        let orders =  await Order.findOne({_id: '60c2e0d67e4d610c82b5ce87' })
        .populate(
            "orderItem",
        ).populate('pizza')


        console.log(orders);
        return(orders)



    }
    catch (e) {
        console.log('Error Occured', e)
    }

}






module.exports = {
    getAllOrders

}