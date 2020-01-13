const express   = require('express')
const router    = express.Router()
const bookModel = require('../models/book.model')
const userModel = require('../models/user.model')

// bookId     : Number,
// title       : String,
// author      : String,
// year        : String,
// press       : String

router.post('/create', async (req, res) => {
    let { bookId, title, author, year, publisher } = req.body
    let inputData = {
        bookId, title, author, year, publisher
    }

    let data = new bookModel(inputData)
    data.save()

    return res.send({
        status: "Success",
        message: "The information of book has submited",
        data 
        })
})

router.get('/getAll', async(req,res) => {
    let result = await bookModel.find({}).exec()

    res.send({
        status: 'Success',
        message: 'Those are the result.',
        result
    })
})

router.get('/:id', async(req,res) => {
    let { id } = req.params
    let data = await bookModel.findOne({ _id:id }).exec()

    return res.send({
        status: 'Success',
        message: "Here is your request",
        data
        })
})

router.delete('/:id', async(req,res)=>{
    let {id} = req.params
   await bookModel.deleteOne({_id:id}, (err)=>{
        if(err) return err;

        return res.send("data dihapus")
    })
})

router.put('/:id', async(req,res)=>{
    let {id} = req.params
    let { bookId, title, author, year, publisher } = req.body
    let inputData ={
        bookId: bookId,
        title: title,
        author: author,
        year: year,
        publisher: publisher
    }

    await bookModel.updateOne({_id:id}, inputData, (err)=>{
        if(err) return err
        return res.send("data diupdate")
    })
})

//  user
router.post('/addUser', async(req,res)=>{
    let { userId, nama, email } = req.body
    let inputData = {userId, nama, email}

    let data = new userModel(inputData)
    data.save()

    return res.send({
        status: "Success",
        message: "The information of book has submited",
        data 
    })
})

router.get('/allUser', async(req,res)=>{
    let result = await userModel.find({}).exec()

    res.send({
        status: 'Success',
        message: 'Those are the result.',
        result
    })
})
module.exports = router