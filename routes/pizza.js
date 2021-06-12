const express = require('express');
const router = express.Router();

const pizzaController = require('../controllers/pizzaController');

router
.route("/")
.get(async (req, res)=>{
    console.log(req.url)

    console.log(req.query)
    let pizzsa = await pizzaController.getAllPizzas();
     res.json(pizzsa);

})




module.exports= router;