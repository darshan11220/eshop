const express = require('express')
const app = express();
const userrouter = require("./src/routes/user")
const productrouter = require("./src/routes/product")


app.use("/user" , userrouter)
app.use("/product" , productrouter)
// app.listen(8000) 
// console.log("server started at port 8000");

// request query string url

// app.get("/user", (req,res) => {
//     console.log(req.query.firstname);
//     console.log(req.query.lastname);
//     res.json({"message": `The data coming from the url is ${req.query.firstname}${req.query.lastname}`})
// })

// app.get('/', (req,res) => {
//     console.log("request to start file");
//     res.sendFile(path.join(__dirname + '/view/start.html'))
// })

// app.get("/saveUser" , (req,res)=>{
//     res.json({username: req.query.username,password: req.query.password})
// })

// app.get("/home" , (req,res)=>{
//     res.set("Content-type", "text/plain")
//     res.send("Welcome")
// })
// app.get("/about", (req,res) =>{
//     console.log("about us page");
//     res.send("about us page")
// })
// app.get('/login', (req,res) => {
//     console.log("request to start file");
//     res.sendFile(path.join(__dirname + '/view/end.html'))
// })

app.listen(8000) 
console.log("server started at port 8000");


// console.log("let server run");
// app.get("/path/:name", (req,res) => {
//     let name = req.params.name
//     res.send("My name is darshan");
//     console.log(name);
// })
// // NB500