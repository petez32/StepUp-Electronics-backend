// fetch products
const Products = require("../models/products")

const getAllProducts = async(req, res, next)=>{
    try{
        const products = await Products.find();
        if(!products) throw Error("no items")
        res.status(200).json(products);
    }catch(err){
        res.status(400).send("something went wrong")

    }
    next()

}
module.exports = getAllProducts