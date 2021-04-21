// fetch products
const users = require("../models/users")
const loginValidation = require("../controllerValidation/loginValidation")
const {tokenSecrete} = require("../config")
// import jwt
const jwt = require("jsonwebtoken")
const userLogin = async(req, res, next)=>{
    // validate user inputs
    const {error} = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
// find the user
     const user = await users.findOne({userName: req.body.userName});
     if(!user) return res.status(400).send("username or password incorrect")
    

    // check the password of the user
     if(user){
       if(toString(user.password) === toString(req.body.password)){
        const token = jwt.sign({userName: user.userName, id:user._id},tokenSecrete );
        res.header("authToken", token).send({
          token:token,
          userName:user.userName,
          id:user._id, loaded: true,
           credits:user.credits,
           firstName:user.firstName,
           lastName:user.lastName,
           email:user.email
          })

       } 
       // create and asign token 
       else{
        res.status(400).send("check username and password")
       } 

     }
     
    next()

}
module.exports = userLogin;