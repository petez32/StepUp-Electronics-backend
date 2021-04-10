// import joi
const Joi = require("joi")
const loginValidation = (data)=>{
    const schema = Joi.object( {
        password: Joi.required(),
        userName: Joi.required()
    })
    return schema.validate(data)

}
module.exports = loginValidation
