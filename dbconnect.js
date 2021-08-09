const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://anhdb1:ducanh7110@cluster0.eqn4a.mongodb.net/testdb?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
module.exports = mongoose