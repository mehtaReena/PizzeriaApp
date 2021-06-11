const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaControllerr');

router
.route("/")
.get(async (req, res)=>{
    let pizzsa = await pizzaController.getAllPizzas
    console.log(pizzsa)
     res.json(pizzsa);

})




module.exports= router;