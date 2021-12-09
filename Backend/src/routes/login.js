const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const fs = require('fs')


let validateLogin = (uName, pwd) => (uName + '@123' == pwd)? true : false

let requestLogger = (req,res, next) => {
    let logRequest = `${new Date()}-${req.method} : ${req.url} \n`
    fs.appendFile('requestlogger.txt' ,logRequest, (err) => {
        if(err){
            next(err)
        }else{
            next()
        }
    })
}
let errorLogger = (error, req,res, next) => {
    fs.appendFile('errorlogger.txt', error.stack ,logRequest, (err) => {
        if(err){
            console.log('logging failed');
        }
    })
    res.status(error.status)
    res.send({"message": error.message})
    next()
}

router.post('/loginUser' , requestLogger , (req,res) => {
    let user = req.body.username
    let password = req.body.password
    let result = validateLogin(user,password)
    if(result){
        res.json({'message': user + 'successfully logged in'})
    }else{
        let error = new Error("unauthorised access")
        error.status = 401
        throw error
    }
}, errorLogger)

router.get('/about' , requestLogger , (req,res) => {
    res.send("hello")
}, errorLogger)


module.exports = router

