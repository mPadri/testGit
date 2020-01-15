const Author = require("../models/author")
const User = require("../models/user")

const create = async (req)=>{
    let {bookId, year, publisher, id_user} = req.body

    var insert_data = {
        bookId,
        year,
        publisher,
        id_user
    }

    let data = new Author(insert_data)

    try{
        await data.save()
        return data
    }catch(err){
        throw err
    }
}

const getAll = async ()=>{
    try{
        let data = await Author.find({})
        .populate([
            {
                path: "id_user",
                model: User
            }
        ]).exec()
        return data
    }catch(err){
        throw err
    }
}

const getDetail = async (id)=>{
    try{
        let query = await Author.findOne({
            _id:id
        }).populate([
            {
                path: "id_user",
                model: User
            }
        ]).exec()
        return query
    }catch(err){
        throw err
    }
}

const update = async (id, update_data)=>{
    let {bookId, year, publisher, id_user} = update_data
    let opts = {
        new: true
    }
    let data = {
        bookId,
        year,
        publisher,
        id_user,
        updated_at: Date.now()
    }
    try{
        let query = await Author.findOneAndUpdate({
            _id:id
        },
        data,
        opts).exec()
        
        return query
    }catch(err){
        throw err
    }
}

const destroy = async (id)=>{
    try {
        let query = await Author.findOneAndDelete({
            _id:id
        }).exec()
        return query
    }catch(err){
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}