const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/anh111', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const userSchema = mongoose.Schema({
    user: String,
    pass:String,
},{collection:"user"})
const userModel = mongoose.model("user",userSchema)
module.exports = userModel
