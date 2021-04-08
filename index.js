// install and import mongoose 
const mongoose = require('mongoose')
// import mongo url fron the config.js file 
const {MONGO_URI} = require('./config')
const { v4: uuidv4 } = require('uuid');

// import express

const express = require('express');
// connect to mongodb
mongoose.connect(MONGO_URI, 
{useNewUrlParser: true,  useUnifiedTopology: true })
.then (()=>console.log("mongodb connected"))
.catch(err=> console.log("not connected") )

const app = express()
const port = 5000

// add midleware 
app.use(express.json())
app.use(function(req,res, next){
    // website to allow access
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "GET, POST, OPTIONS ,PUT ,PATCH , DELETE"
    );
    next();

})


//declare users databases
let Usersdb = []
let Productsdb = []

// add a get request
app.get("/users", (req, res, next)=>{
    res.send(Usersdb)
})
const signUp =  (req,res, next) =>{
    const {userName,firstName,lastName, password}= req.body
    
        const user = {
            userId: uuidv4(),// generate user ids
            userName: userName,
            firstname: firstName,
            lastName:lastName,
            password:password
        }
            Usersdb.push(user)

    

console.log(req.body)
res.send("successfull")
}
app.post("/users",signUp)


app.listen(port, ()=>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})
