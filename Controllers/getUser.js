// fetch products
const users = require("../models/users")

const getUser = async(req, res, next)=>{
    try{
        const user = await users.findOne({_id:req.params.id});
        if(!user) throw Error(" no users")
        res.status(200).json(user);
    }catch(err){
        res.status(400).send("something went wrong")

    }
    next()

}
module.exports = getUser