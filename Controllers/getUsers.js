// fetch products
const users = require("../models/users")

const getUsers = async(req, res, next)=>{
    try{
        const user = await users.find();
        if(!user) throw Error(" no users")
        res.status(200).json(user);
    }catch(err){
        res.status(400).send("something went wrong")

    }
    next()

}
module.exports = getUsers