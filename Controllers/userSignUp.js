 
 const UsersPostSchema = require("../models/users")
 // import bcrypt
 //const bcrypt = require("bcrypt");
 //set salt rounds
 //const saltRounds = 10
 const signUp =  async(req,res, next) =>{
     let {userName, password, firstName, lastName, email }= req.body
// create a hashpassword
    newUser = new UsersPostSchema({
        userName,
        firstName,
        lastName,
        password,
        email

    });
    try{
        const user = await newUser.save();
        if(!user) throw Error("user not saved");
        res.send("successfull")


    }catch {
        res.status(400).send("something went wrong")
    }
    next()
}
module.exports = signUp