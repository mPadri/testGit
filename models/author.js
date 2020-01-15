const mongoose = require('mongoose')
const Schema = mongoose.Schema

let authorSchema = new Schema({
    bookId: String,
    year: Number,
    publisher: String,
    id_user: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})

let Author = mongoose.model("Author", authorSchema)

module.exports = Author