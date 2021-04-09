const productsPostSchema = require("../models/products")
const addProduct =  async(req,res, next) =>{
   newProduct = new productsPostSchema(req.body);
   try{
       const product = await newProduct.save();
       if(!product) throw Error("product not saved");
       res.send("successfull")


   }catch {
       res.status(400).send("something went wrong")
   }
   next()
}
module.exports = addProduct