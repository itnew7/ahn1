const mongoose = require("./dbconnect")
const us = require("./us")

const postSchema = mongoose.Schema({
    title:String,
    content:String,
    userid:{
        type:String,
        ref:'us'
    }
},{colelection:'post'})
const postModel = mongoose.model("post",postSchema)
module.exports = postModel
postModel.create({
  title:"123",
  content:"123"
}).then((data)=> console.log(data))
.catch((err)=> console.log(err))