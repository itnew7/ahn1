const mongoose = require("./dbconnect")
const usSchema = mongoose.Schema({
    name:String,
    pas:String,
    role:{
      default:'user',
      type:String,
    },
    token:{
      type:String,
      default:"",
    }
},{collection:"us"})

const usModel = mongoose.model('us',usSchema)
// usModel.create({
//     name:"qqq",
//     pas:111
// },
// {
//     name:"www",
//     pas:222,
// },
// {
//     name:"eee",
//     pas:333,
// },
// )

module.exports = usModel
// usModel.create({
//   name:'admin',
//   pas:1234,
//   role:"admin"
// })