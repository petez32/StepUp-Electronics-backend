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
// import delete user
const deleteUser = require("../Controllers/deleteUser")
// import update user
const updateuser = require("../Controllers/updateUser")
// import updateusercredits
const updateUserCredits= require("../Controllers/updateCredit")




// add the post request
router.post("/",signUpRequest);
// add login request
router.post("/",userLogin)
// get all user request
router.get("/",getUsers)
// delete user
router.delete("/", deleteUser)
// update user
router.patch("/", updateuser)
// update credits
router.patch("/",updateUserCredits)


module.exports = router;
