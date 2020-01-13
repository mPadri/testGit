const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema ({
    userId : Number,
    nama : String,
    email: String
})

let User = mongoose.model("User", userSchema)

module.exports = User