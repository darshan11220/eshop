const express = require('express')
const userService = require("../service/user")
const router = express.Router()


router.post("/register" , (req,res,next) => {
    console.log(req.body);
    userService.register(req.body).then(objDetails => {
        res.json({"message" : "registered successfully"})
    }).catch(err => {
        next(err)
    })
})



// module.exports = router;
















router.get("/" , (req,res) =>{
    res.send("My homepage")
})

router.get("/about", (req,res) => {
    res.send("about us section")
})
// router.get("/login", (req,res,next) => {
//     console.log("log to display login form");
//     next()
// })
router.get("/login", (req,res) => {
    res.send("Login form")
    console.log("req");
})

module.exports = router