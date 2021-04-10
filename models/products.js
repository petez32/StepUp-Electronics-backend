const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');
const productsPostSchema = new Schema({
   productId:{
        type: String,
        default: uuidv4()
    },

    productName: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,

    },
    imageUrl:{
        type: String,
        required: true,
    } ,
    price: {
        type:Number,
        required: true,

    },
    productDetail: {
        type: String,
        

    } 
})
module.exports = mongoose.model('products', productsPostSchema);