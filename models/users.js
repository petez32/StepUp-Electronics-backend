const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require('uuid');
const UsersPostSchema = new Schema({
    id:{
        type: String,
        default: uuidv4()
    },

    userName: {
        type: String,
        required: true,

    },
    firstName:{
        type: String,
        required: true,
    } ,
    lastName: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        
    },
    credits:{
        type:Number,
        default:50
        

    },
    imageUrl:{
        type: String,
        required:false, 
        default:""
    }

})
module.exports = mongoose.model('users', UsersPostSchema);