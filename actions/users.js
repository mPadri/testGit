const User = require('../models/user')

const create = async (req,res)=>{
    let {name, email, phone} = req.body
    phone = parseInt(phone)
    var insert_data ={
        name,
        email,
        phone
    }
    let data = new User(insert_data)

    try{
        await data.save()
        return data
    }catch(err){
        throw err
    }

    // let {name, email, phone, bookId} = req.body
    // phone = parseInt(phone)
    // var insert_data ={
    //     name,
    //     email,
    //     phone,
    //     bookId
    // }
    // let data = new User(insert_data)

    // try{
    //     await data.save()
    //     return data
    // }catch(err){
    //     throw err
    // }
}

const getAll = async () =>{
    try{
        let query = await User.find({}).exec()
        let data = query.map((v,i)=>{
            return{
                id: v._id,
                name: v.name,
                email: v.email,
                phone: v.phone
            }
        })
        return data
    }catch(err){
        throw err
    }

    // try{
    //     let query = await User.find({})
    //     .populate("bookId")
    //     .exec()
    //     let data = query.map((v,i)=>{
    //         // console.log(v)
    //         return{
    //             name: v.name,
    //             email: v.email,
    //             phone: v.phone,
    //             bookId:{
    //                 title: v.bookId.title,
    //                 description: v.bookId.description,
    //                 price: v.bookId.price
    //             }
                
    //         }
    //     })
    //     return data
    // }catch(err){
    //     throw err
    // }
}

const getDetail = async (id)=>{
    try{
        let query = await User.findOne({_id:id}).exec()
        return query
    }catch(err){
        throw err
    }
}

const update = async (id, update_data)=>{
    let {name, email, phone, fresh} = update_data
    let opts = {
        new: true
    }
    let data = {
        name,
        email,
        phone,
        updated_at: new Date()
    }
    try{
        let query = await User.findOneAndUpdate(
            {
                _id:id
            },
            data,
            opts
        ).exec()
        return query
    }catch(err){
        throw err
    }
}

const destroy = async (id)=>{
    try{
        let query = await User.findOneAndDelete({_id:id}).exec()
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