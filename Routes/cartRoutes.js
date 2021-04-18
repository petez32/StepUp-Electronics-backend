// import express
const express = require('express');
const router = express.Router();
// import the user model

// import the post/ signup function 
//const signUpRequest = require("../Controllers/userSignUp")
const addToCart = require("../Controllers/addToCart")
const getCart = require("../Controllers/getUserCart")
const DeleteItem = require('../Controllers/deleteFromCart');
const checkOutCart = require('../Controllers/checkOut');



// add the post/ add product request

router.post("/",addToCart);
router.get("/", getCart)
router.delete("/",DeleteItem)
router.patch("/",checkOutCart)


module.exports = router;

