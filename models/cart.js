const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({

    userId: {
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