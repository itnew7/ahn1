const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/anh111', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const clSchema =  mongoose.Schema({
    classname:String,
    time:Number
},{collction:"cl"})
const clModel = mongoose.model("cl",clSchema)

module.exports = clModel