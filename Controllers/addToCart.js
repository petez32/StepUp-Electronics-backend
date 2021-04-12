const cartSchema = require("../models/cart")
const addToCart =  async(req,res, next) =>{
  newCart = new cartSchema(req.body);
   try{
       const product = await newCart.save();
       if(!product) throw Error("cart not saved");
       res.send("successfull")


   }catch {
       res.status(400).send("something went wrong")
   }
   next()
}
module.exports = addToCart