// import express

const express = require('express')
const app = express()
const port = 5000

// add midleware 
app.use(express.json())

//declare users databases
let Usersdb = []
let Productsdb = []

// add a get request
app.get("/", (req, res, next)=>{
    res.send("welcome to our stepup electronics ")
})


app.listen(port, ()=>{ 
    console.log(`Example app listening at http://localhost:${port}`)
})
