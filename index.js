//import express
const express = require("express");
const userModel  = require("./userModel.js");

//tạo app
const app = express();

const path = require("path")

 //let link = path.join(__dirname,'./index.html')

 //express.static
 app.use('/pulic', express.static(path.join(__dirname,"./pulic")))

 //tạo ra 1 đường dẫn để làm việc
app.get("/home",function(req,res){
    // res.send(`
    // <div>
    // <h1>hello</h1>
    // </div>
    // `
        
    // );
    res.sendFile(path.join(__dirname,"./index.html"));
});

// app.get("/css",function(req,res){
 
//     res.sendFile(path.join(__dirname,"./index.css"));
// })

// app.get("/test", function(req,res){
 
//     res.sendFile(path.join(__dirname,"./test.js"));
// }) 

// tạo cổng nhận request , trả response

// app.get('/user',function(req,res){
// console.log(req.query)
//     userModel.find(req.query)
//     .then(function(data){
//         res.json(data)
//     }).catch(function(err){
//         res.json(err)
//     })
// })

app.get('/user/:user',function(req,res){
    console.log(req.params)
        userModel.find(req.params)
        .then(function(data) {
            res.json(data)
        }).catch(function(err){
            res.json(err)
        })
    })


app.listen(3000); // lấy số trên 3000
