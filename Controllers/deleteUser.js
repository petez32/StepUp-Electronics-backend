// fetch products
const users = require("../models/users")

const deleteUser = async(req, res, next)=>{
    try{
        await users.deleteOne({_id:req.params.id})
        
        res.status(200).json("user deleted");
    }catch(err){
        res.status(400).send("something went wrong user not Deleted")

    }
    next()

}
module.exports = deleteUser