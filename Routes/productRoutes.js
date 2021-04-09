// import express
const express = require('express');
const router = express.Router();
// import the user model

// import the post/ signup function 
//const signUpRequest = require("../Controllers/userSignUp")
const addProductRequest = require("../Controllers/addproduct")
const getAllProducts = require("../Controllers/getAllProducts")

// add the post request

router.post("/",addProductRequest);
// get all products
router.get("/", getAllProducts);
module.exports = router;

