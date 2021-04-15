// install and import mongoose 
const mongoose = require('mongoose')
// import mongo url fron the config.js file 
const {MONGO_URI} = require('./config')
// Routes
// const userRoutes= require("./Routes/userRoutes")
// const productRoutes = require("./Routes/productRoutes")
// const cartRoutes = require("./Routes/cartRoutes")
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
const deleteUser = require("./Controllers/deleteUser")
const signUp = require("./Controllers/userSignUp")
const updateuser = require("./Controllers/updateUser")
const updateUserCredits = require('./Controllers/updateCredit')
const getallUsers = require("./Controllers/getUsers")
const getAllProducts = require('./Controllers/getAllProducts')
const addProductRequest = require("./Controllers/addproduct")
const app = express()
const port = 5000

// middlewares
app.use(cors());
app.use(express.json())

// Routes 


// get users
app.use("/allusers",getallUsers)
// add product 
app.use("/product/add", addProductRequest)
app.use("/products",getAllProducts)
//app.use("/cart/add", addToCart)
 app.use("/login", userLogin)
// add to cart
app.use("/cart/add", addToCart)
// get user Cart
app.use("/cart/:id", getCart)
// deleteUser
app.use("/users/delete/:id", deleteUser)
// user sign up
app.use("/users",signUp)
// update user
app.use("/users/update/:id", updateuser)
// update credits
app.use("/users/updateCredits/:id",updateUserCredits)



app.listen(port, ()=>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})
