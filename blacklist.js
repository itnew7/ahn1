const mongoose = require("./dbconnect")
const blacklist = mongoose.Schema({
    toekn:String,

},{collection:'blacklist'})
const BlacklistModel =mongoose.model('blacklist',blacklist)

module.exports = BlacklistModel