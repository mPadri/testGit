const express = require('express')
const router = express.Router()
const {
    create,
    getAll,
    getDetail,
    update,
    destroy
} = require("../actions/users")

router.post("/", async(req,res)=>{
    try{
        let data = await create(req)
        return res.status(200).json({
            status: "success",
            data,
            message: "user created"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/",async(req,res)=>{
    try{
        let data = await getAll()
        return res.send({
            status: "success",
            data,
            message: "get all user"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get(":/id", async (req,res)=>{
    try{
        let {id} = req.params
        let data = await getDetail(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "get detail"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.put("/:id", async (req,res)=>{
    let {id} = req.params
    let update_data = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        fresh: req.body.fresh
    }
    try{
        let data = await update(id, update_data,{updated_at:Date.now()})

        return res.status(200).json({
            status:"success",
            data,
            message: "data updated"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.delete("/:id", async (req,res)=>{
    let {id} = req.params
    
    try{
        let data = await destroy(id)

        return res.status(200).json({
            status:"success",
            data,
            message: "deleted"
        })
    }catch(err){
        return res.status(400).json({
            status:"error",
            message: err.message
        })
    }
})

module.exports = router