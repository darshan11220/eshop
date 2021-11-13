const collection = require('../utils/connection')
const user = require('./beanClasses/user')

const userDB = {}

user.checkUser = (contactNo) => {
    return collection.getUserCollection().then(database => {
        return database.findOne({"contactNo" : contactNo}).then(contact => {
            if(contact == 1) {
                return ("User already exists")
            }else {
                return true
            }
        })
    })
}

userDB.registerUser = (userObj) => {
    return collection.getUserCollection().then(database => {
        return database.create(userObj).then(data => {
            console.log(data)
            if(data.length != 0){
                return userObj
            }else {
                return null
            }
        })
    })
}

module.exports = userDB;