const userDB = require("../model/user")

const userService = {} 

userService.register = (userObj) => {
    return userDB.registerUser(userObj).then((obj) => {
        if(obj==null){
            let err = new Error("Registration failed")
            err.status = 406;
            throw err;
        }else {
            return obj
        }
    })
}

module.exports = userService;