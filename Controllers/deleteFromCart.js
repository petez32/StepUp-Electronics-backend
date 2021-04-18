const users = require("../models/cart")

const DeleteItem  = async(req, res, next)=>{
    try{
        await users.deleteOne({_id:req.params.id})
        
        res.status(200).json("Item Deleted from cart");
    }catch(err){
        res.status(400).send("something went wrong user not Deleted")

    }
    next()

}
module.exports = DeleteItem