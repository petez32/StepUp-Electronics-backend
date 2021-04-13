// fetch products
const ShoppingCarts = require("../models/cart");


const getUserCart = async(req, res, next)=>{
    try{
        const cart = await ShoppingCarts.find()
        if(!cart) throw Error("no cart by user")
        res.status(200).json(cart);
    }catch(err){
        res.status(400).send("something went wrong")

    }
    next()

}
module.exports = getUserCart