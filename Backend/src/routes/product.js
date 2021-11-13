const express = require('express')
const router = express.Router()

router.get("/" , (req,res) =>{
    res.send("My product homepage")
})

router.get("/about", (req,res) => {
    res.send("about our product")
})

module.exports = router