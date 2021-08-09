const express = require("express");
const router =express.Router();
const {checklogin} =require("./checklogin")
const postModel = require("./postmodel")
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


router.post('/profile', upload.single('test'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

  router.get("/",checklogin,function(req,res){
        postModel.find()
        .then(function(data){
            res.json({
                mess:"xem post thanh cong",
                data,
                status:200,
            })
        }).catch(function(err){
            res.json({
                mess:"loi sever",
                err,
                status:500,
            })
        })
})
router.post("/",function(req,res){
postModel.create({
    title:req.body.title,
    content:req.body.content,
    userid:req.body.userid,
})
.then(function(data){
    res.json({
        mess:"tao post thanh cong",
        data,
        status:200,
    })
}).catch(function(err){
    res.json({
        mess:"loi sever",
        
        status:500,
    })
})
})

router.delete("/:id",checklogin, function(req,res){
  
    if(req.role === "admin"){
    postModel.deleteOne({_id:req.params.id})
    .then(function(data){
        res.json({
            mess:"xoa thanh cong",
            data,
            status:200,
        })
    }).catch(function(err){
        res.json({
            mess:"ko co quyen",
            err,
            status:400,
        })
    })
   } else{
        res.json({
            mess:"loi sever",
            status:400,
        })
   }
})

module.exports = router