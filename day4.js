const express = require('express')
const app = express()
const task_kondisi = require('./lib/task')
const kondisi = require('./lib/conditional')
const loop_map = require("./lib/loooingmap")

app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>{
    return res.send('dari file day4')
})


app.get('/task4', (req,res)=>{
    // console.log(req.query.key1)
    let key1 = req.query.key1
    console.log('is key1', key1)
    let key2 = req.query.key2
    console.log("is key2", key2)
    let result = task_kondisi.task1(key1,key2)

    // console.log(task_kondisi.task1)

    return res.send(result)
})

app.post('/task5', (req,res)=>{
    let {name, email} = req.body
    console.log("Is name", name)
    console.log("Is email", email)

    let result = task_kondisi.task2(name, email)

    return res.send(result)
})

app.get('/task1', (req,res)=>{
    let q = req.query.q
    console.log("first value", q)

    let result = kondisi.equal(q)
    return res.send(result)
})

app.get('/task2', (req,res)=>{
    let today = new Date().getDay()
    console.log("today", today)

    let result = kondisi.day(today)

    return res.send(result)
})

app.post("/task3", (req,res)=>{
    let number = req.body.number
    console.log("section1", typeof number)
    number = parseInt(number)
    console.log("section2", typeof number)

    let result = kondisi.compare(number)
    return res.send(result)
})

// looping

app.get("/loop-map", (req,res)=>{
    let data = ["red","blue","green"]
    let result = loop_map(data)

    return res.send(result)
})



app.listen(3300, ()=>{
    console.log('berjalan di server 3300')
})