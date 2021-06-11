
const Pizza = require('../models/pizza')



const pizzasList = async () => {

    try {
        let pizzas = await Pizza.find();
        console.log("-----");
        if (pizzas.length === 0) {
            console.log('No category found')
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
    pizzasList

}