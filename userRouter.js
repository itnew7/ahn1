const express  = require('express')
const jwt = require("jsonwebtoken")
const router = express.Router()
const us = require("./us") 
const {checklogin} = require("./checklogin")
const bcrypt = require("bcrypt")
const BlacklistModel =require("./blacklist")
const fs =require('fs');
const path = require("path")


// router.get("/link",(req,res) =>{
//     us.findOne()
// })
router.get("/",async (req,res)=>{
try {
    const data = await us.find();
    // console.log(data)
    if(data.length){
        res.json(data);
    }else{
        res.json("khong ton tai")
    }
} catch (error) {
    res.json({status:500,err,mess:"loi sever"})
}
})
// router.get('/',(req,res) =>{
//     us .find(req.query)  
//     .then(function(data){
//         res.json(data)
//     })
//     .catch(function(err){
//         res.json(err)
//     })
// })

router.post("/signout", checklogin, async function(req,res){
  
   try {
     let data = await BlacklistModel.create({token:req.cookies.user})
    res.json({
        mess:"dang xuat thanh cong",status:200 
})
   } catch (error) {
    res.json({
        mess:"loi sever",error,status:500
    })
   }
     
       
   
})
 router.get('/pagination',checklogin,function(req,res){
       console.log(req.role)
        let view =(req.query.view)*1
         let skip =( req.query.skip - 1)*view
         us.find({})
         .skip(skip)
         .limit(view)
         .then(function(data){
             res.json({mess:"lay tt thanh cong",data:{data:data,role:req.role},status:200})
         }).catch(function(err){
             res.json({mess:"loi sever",status:500,err})
         })
     })


router.post('/',async(req,res)=>{
   
   try {
    let findByUsername = await us.findOne({username:req.body.name})
    if(findByUsername){
        res.json("username da dc su dung")
       }else{
           req.body.pas = await bcrypt.hash(req.body.pas,10)
           console.log(req.body)
         let data = await us.create(req.body)
         res.json(data)
       }
       
   } catch (error) {
       console.log(error)
    res.json({mess:"loi server",status:500,error})
   }
   
   /////////////////
    us.findOne({username:req.body.name})
    .then(function(data){
        if(data){


            res.json("username da dc su dung")
        }else{
    us.create(req.body)
    .then(function(data){
        res.json(data)
    })
        }
    })
    .catch(function(err){
        res.json(err)
    })
})

router.delete('/:id',function(req,res){
    us.deleteOne({_id : req.params.id})
    .then(function(data){
        res.json(data)
    }).catch(function(err){
        res.json(err)
    })
})

router.post('/signin', async function(req,res){
  try {
    let findOneByUsername =await us.findOne({
        name:req.body.name,
       
    })
    if(findOneByUsername){
       
        let compare = await bcrypt.compare(req.body.pas,findOneByUsername.pas)
        if(conpare){
            let link = path.join(__dirname,"./password.txt")
            let pass = fs.readFileSync(link,"utf8")
            let token = jwt.sign({ id:findOneByUsername._id},"anh")
             await us.updateOne({ _id:findOneByUsername._id},{token:token})
             res.json({mess:"dang nhap thanh cong",findOneByUsername:token,status:200})
        }else{
            res.json({mess:"nhap sai password",status:400})
    
    }
    }else{
        res.json({mess:"nhap sai name",status:400})

    }

  } catch (error) {
    res.json({mess:"loi server",status:500,error})
  }
   // console.log(findByUsername)
//     us.findOne({
//         name:req.body.name,
        
//     })
// .then( async function(data){
//     if(data){
//        let compare = await bcrypt.compare(req.body.pas,data.pas)
//        if(compare){
//         let token = jwt.sign({ id:data._id},"anh")
//         us.updateOne({ _id:data._id},{token:token})
//         .then(function(data){
     
//                 res.json({mess:"dang nhap thanh cong",data:token,status:200})
            
//         })
        
//        }else{
//         res.json({mess:"nhap sai password",status:400})
//        }
//     }else{
//         res.json({mess:"nhap sai name",status:400})
//     }
// }).catch(function(err){
//     res.json({mess:"loi server",status:500,err})
// })
 })


router.put('/:id',function(req,res){ // thieêếu paảarams nheé
  
    us.updateOne({_id : req.params.id,pas:req.body.oldpass},{pas:req.body.newpass}) // dùng body thì thay query bằng body
    .then(function(data){
        if(data.n ==0){
            res.json('nhap sai mk cu')
            
        }
         else if( data.nModified ==0){
            res.json("trung mk")
        }else{
            res.json('doi mk thanh cong')
        }
   }).catch(function(err){
       res.json(err)
   })
})

router.get('/:id',function(req,res){                    // server dang hieu e goi vaof api nay
            // nhung api dung param thi cho xuong cuoi cho no do nhan sai
   
    us.find({_id : req.params.id})
    .then(function(data){
        res.json(data)
    
    }).catch(function(err){
        res.json(err)
    })
})
module.exports = router