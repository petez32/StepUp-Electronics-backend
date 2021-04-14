const users = require("../models/users");


const updateUser = async(req, res, next)=>{
    const {userName, firstName,lastName, imageUrl, email}= req.body
    try{
        await users.updateOne({_id:req.params.id},{$set:{
            userName,
            firstName,
            lastName,
            imageUrl,
            email

        }});
         
        res.status(200).json(" updated successfully");
    }catch(err){
        res.status(400).send("something went wrong user not updated")

    }
    next()

}
module.exports =updateUser