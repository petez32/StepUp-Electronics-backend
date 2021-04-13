// install and import mongoose 
const mongoose = require('mongoose')
// import mongo url fron the config.js file 
const {MONGO_URI} = require('./config')
// Routes
const userRoutes= require("./Routes/userRoutes")
const productRoutes = require("./Routes/productRoutes")
const cartRoutes = require("./Routes/cartRoutes")
// import express
const express = require("express")
// connect to mongodb
mongoose.connect(MONGO_URI, 
{useNewUrlParser: true,  useUnifiedTopology: true })
.then (()=>console.log("mongodb connected"))
.catch(err=> console.log("not connected") )

//import the UsersPostModel
const cors = require("cors")
const userLogin = require('./Controllers/userLogin')
const addToCart = require("./Controllers/addToCart")
const getCart = require("./Controllers/getUserCart")
const app = express()
const port = 5000

// middlewares
app.use(cors());
app.use(express.json())
// Routes 
// Post user
app.use("/users", userRoutes)
app.use("/products", productRoutes)
app.use("/cart", addToCart)
 app.use("/login", userLogin)
// add to cart
app.use("/users/cart", cartRoutes)
// get user Cart
app.use("/cart/", getCart)


app.listen(port, ()=>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})
