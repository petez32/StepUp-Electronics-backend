// import express
const express = require('express');
const router = express.Router();
// import the user model

// import the post/ signup function 
const signUpRequest = require("../Controllers/userSignUp")



// add the post request
router.post("/",signUpRequest);

module.exports = router;
