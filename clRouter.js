const express = require("express")
const router = express.Router()
const cl = require("./cl")

router.post("/",function(req,res){
    cl.create({classname:"co ban",time:20})
    .then(function(data){
       res.json(data)
   }).catch(function(err){
       res.json(err)
   })
})
router.delete('/',function(req,res){
    cl.deleteOne({name:'www'})
    .then(function(data){
        res.json(data)
    }).catch(function(err){
        res.json(err)
    })
})
router.put('/',function(req,res){
    cl.updateOne({name:"eee"},{pas:"123"})
    .then(function(data){
       res.json(data)
   }).catch(function(err){
       res.json(err)
   })
})


module.exports = router