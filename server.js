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
const DeleteItem = require('./Controllers/deleteFromCart')
const checkOutCart= require('./Controllers/checkOut')
const getUser= require('./Controllers/getUser')
const getUserOrder= require('./Controllers/getUserOrder')
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
// delete item from cart
app.use("/cart/delete/:id", DeleteItem)
// check out
app.use("/cart/checkout/:id",checkOutCart )
// get order
app.use("/order/:id",getUserOrder )

// get user Cart
app.use("/cart/get/:id", getCart)
// deleteUser
app.use("/users/delete/:id", deleteUser)
// user sign up
app.use("/users",signUp)
// getuser
app.use("/user/:id",getUser)

// update user
app.use("/update/user/:id", updateuser)
// update credits
app.use("/updateCredits/:id",updateUserCredits)



app.listen(port, ()=>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})
