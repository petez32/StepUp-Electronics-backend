// install and import mongoose 
const mongoose = require('mongoose')
// import mongo url fron the config.js file 
const {MONGO_URI} = require('./config')
// Routes
const userRoutes= require("./Routes/userRoutes")
const productRoutes = require("./Routes/productRoutes")
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
const app = express()
const port = 5000

// middlewares
app.use(cors());
app.use(express.json())
// Routes 
// Post user
app.use("/users", userRoutes)
app.use("/products", productRoutes)
 app.use("/login", userLogin)



app.listen(port, ()=>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})
