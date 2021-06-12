const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router
.route("/")
.get(async (req, res)=>{
    console.log(req.url)
    console.log(req.query)
    let orders = await orderController.getAllOrders();
     res.json(orders);

})


router.get('/:id' ,async (req,res)=>{
    console.log(req.params)
    let id =req.params.id


})


module.exports= router;
