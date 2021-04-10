// import express
const express = require('express');
const router = express.Router();
// import the user model

// import the post/ signup function 
const signUpRequest = require("../Controllers/userSignUp")
// import login function
const userLogin = require("../Controllers/userLogin")



// add the post request
router.post("/",signUpRequest);
// add login request
router.post("/",userLogin)

module.exports = router;
