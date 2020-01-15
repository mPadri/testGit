const express = require('express')
const app = express()
require("./config/db")

const index_routes = require("./routes/index")
const book_routes = require("./routes/book")
const user_routes = require("./routes/user")
const author_routes = require("./routes/author")

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    return res.send('welcome home')
})

app.use("/index", index_routes)
app.use("/book", book_routes)
app.use("/user", user_routes)
app.use("/author", author_routes)

app.listen(3300, ()=>{console.log('berjalan di server 3300')})