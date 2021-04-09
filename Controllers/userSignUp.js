 
 const UsersPostSchema = require("../models/users")
 const signUp =  async(req,res, next) =>{
    newUser = new UsersPostSchema(req.body);
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