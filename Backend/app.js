const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const userrouter = require("./src/routes/user")
const productrouter = require("./src/routes/product")
const loginrouter = require("./src/routes/login")

app.use(bodyParser.json())
app.use("/user" , userrouter)
app.use("/product" , productrouter)
app.use("/login" , loginrouter)


app.listen(8000) 
console.log("server started at port 8000");


// console.log("let server run");
// app.get("/path/:name", (req,res) => {
//     let name = req.params.name
//     res.send("My name is darshan");
//     console.log(name);
// })
// // NB500