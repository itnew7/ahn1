const express = require("express");
const us = require("./us.js")
const app = express();
const path = require("path")
const cl = require("./cl.js")
const userRouter = require("./userRouter.js")
const postrouter = require("./postrouter.js")
const clRouter  = require("./clRouter")
const {checklogin} =require("./checklogin")
var cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/pulic',express.static(path.join(__dirname,'./pulic')))
app.use('/api/user',userRouter)
app.use('/post/',postrouter)
app.use('/api/cl',clRouter)

app.get('/home', checklogin , function(req,res){
    console.log(req.cookies)
    res.sendFile(path.join(__dirname,"./id.html"))
 })
 
 app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,"./signup.html"))
})
app.get('/changepass',checklogin,function(req,res){
    res.sendFile(path.join(__dirname,"./changepass.html"))
})
app.get('/signin', function(req,res){
    res.sendFile(path.join(__dirname,"./signin.html"))
})
app.get('/pagination',checklogin,function(req,res){
    res.sendFile(path.join(__dirname,"./pagination.html"))
})

app.get('/checklogin',checklogin,function(req,res){
    res.json({
        mess:'user da dang nhap',
        status:200
    })
})

 app.listen(process.env.PORT || 4000  )
 
