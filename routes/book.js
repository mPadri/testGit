const express = require('express')
const router = express.Router()
const {
    create,
    getAll,
    getDetail,
    update,
    destroy
} = require("../actions/books")

router.post("/", async(req,res)=>{
    try{
        let data = await create(req)
        return res.status(200).json({
            status: "success",
            data,
            message: "Book created success"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})
router.get("/", async(req,res)=>{
    try{
        let data = await getAll()
        return res.send({
            status: "success",
            data,
            message: "get all data"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/:id",async(req,res)=>{
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

router.put("/:id", async(req,res)=>{
    let {id} = req.params
    let updated_data = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        id_author: req.body.id_author
        
    }

    try{
        let data = await update(id, updated_data)
        return res.status(200).json({
            status: "success",
            data,
            message: "book update"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.delete("/:id", async(req,res)=>{
    let {id} = req.params

    try{
        let data = await destroy(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "book deleted"
        })
    }catch(err){
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

module.exports = router