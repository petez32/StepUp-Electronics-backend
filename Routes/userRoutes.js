// import express
const express = require('express');
const router = express.Router();
// import the user model

// import the post/ signup function 
const signUpRequest = require("../Controllers/userSignUp")
// import login function
const userLogin = require("../Controllers/userLogin")
// import getuser
const getUsers = require("../Controllers/getUsers")



// add the post request
router.post("/",signUpRequest);
// add login request
router.post("/",userLogin)
// get all user request
router.get("/",getUsers)

module.exports = router;
