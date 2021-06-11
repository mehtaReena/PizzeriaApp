const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router
.route("/")
.get(async (req, res)=>{


})

router.get('/:BookID' ,async (req,res ,next)=>{
    console.log(req.params)
    let id =req.params.BookID
    let bookList = await bookController.removeBookByID(id)
     let List = await bookController.printAllBooks()
     res.json(List);

     res.redirect('/');
     next();

})


module.exports= router;
