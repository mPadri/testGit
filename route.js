const express = require("express")
const router = express.Router()

router.get("", (req,res)=>{
    return res.send("array routes")
})

router.get('/tes-route',(req,res)=>{
    return res.send("dari file route.js")
})

module.exports = router