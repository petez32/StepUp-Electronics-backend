const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');
const cartSchema = new Schema({
   cartId:{
        type: String,
        default: uuidv4()
    },
    userName: {
        type: String,
        required: true,

    },

    productName: {
        type: String,
        required: true,

    },
    price: {
        type:Number,
        required: true,

    },
    productDetail: {
        type: String,
        

    } 
})
module.exports = mongoose.model('shoppingCarts', cartSchema);