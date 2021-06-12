
const Pizza = require('../models/pizza')



const getAllPizzas = async () => {

    try {
        console.log(Pizza)
        let pizzas = await Pizza.find({});
        console.log("-----");
        if (pizzas.length === 0) {
            console.log('No pizza found')
        }
        else {
            pizzas.forEach((pizza) => {
                console.log(pizza.name);
            })
        }
        return pizzas;
    }
    catch (e) {
        console.log('Error Occured', e)
    }

}






module.exports = {
    getAllPizzas

}