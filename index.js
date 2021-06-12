const express = require('express');
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/PizzeriaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}
).then(() => {
   console.log(" DataBase connected...")
});

const app =express();
app.use (express.json());
const orderRouter = require("./routes/order");
app.use('/orders',orderRouter)
const pizzaRouter = require("./routes/pizza");
app.use('/pizzas',pizzaRouter)


const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server is  listing  at http://localhost: ${PORT}`)
})