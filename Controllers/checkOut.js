const shoppingCarts = require("../models/cart");


const checkedOutCart = async(req, res, next)=>{
    // const checkedOut= req.body
    try{
        await shoppingCarts.updateMany({userId:req.params.id},{$set:{
            checkedOut:true
        }});
         
        res.status(200).json(" cart checkedout successfully");
    }catch(err){
        res.status(400).send("something went wrong user cart not checked out")

    }

    next()

}
module.exports =checkedOutCart