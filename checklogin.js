const us = require("./us.js")

const jwt = require("jsonwebtoken")
const fs =require('fs');
const path = require("path")
const BlacklistModel =require("./blacklist")

 async function checklogin(req,res,next){
 try {
    let checkCookies = BlacklistModel.finOne({token:req.cookies.user})
    if(checkCookies){
        res.json({mess:'token  ko hợp lệ',status:400})
    }else{
        let pass = fs.readFileSync(path,join(__dirname,"./password.txt"),"utf8")
    }
    
    let id =  jwt.verify(req.cookies.user,pass).id
    
    let data = await  us.findOne({_id:id})
    
        if(data){  
               req.role = data.role
                next();
        }else{
            res.json({mess:'chua dang nhap',status:400})
        }
  
 } catch (error) {
    res.json({mess:"loi server",status:500,err})

 }
   
}

module.exports = {checklogin}