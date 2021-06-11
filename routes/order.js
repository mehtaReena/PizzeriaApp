const express = require('express');
const router = express.Router();

router
.route("/")
.get(async (req, res)=>{
    let bookList = await order.printAllBooks()
    console.log(bookList)
     res.json(bookList);

})




module.exports= router;
