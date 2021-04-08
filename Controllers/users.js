const { v4: uuidv4 } = require('uuid');
export const signUp =  (req,res) =>{
    // specify the user body
    const {userName,firstName,lastName, password}= req.body
    
        const user = {
            userId: uuidv4(),// generate user ids
            userName: userName,
            firstname: firstName,
            lastName:lastName,
            password:password
        }
            Usersdb.push(user)

    

console.log(user)
res.send("successfull")
}