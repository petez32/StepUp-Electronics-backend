// import express
const express = require('express');
const router = express.Router();
// import the user model

// import the post/ signup function 
//const signUpRequest = require("../Controllers/userSignUp")
const addToCart = require("../Controllers/addToCart")
const getCart = require("../Controllers/getUserCart")



// add the post/ add product request

router.post("/",addToCart);
router.get("/", getCart)


module.exports = router;

