const users = require("../models/users");


const updateUserCredits = async(req, res, next)=>{
    const {credits}= req.body
    try{
        await users.updateOne({_id:req.params.id},{$set:{
            credits,
        }});
         
        res.status(200).json(" credits updated successfully");
    }catch(err){
        res.status(400).send("something went wrong user credits not updated")

    }
    next()

}
module.exports =updateUserCredits