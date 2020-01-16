const express = require('express')
const app = express()
const Nexmo = require('nexmo')

app.use(express.urlencoded({extended:true}))

const nexmo = new Nexmo({
    apiKey: 'f2a482dc',
    apiSecret: 'vej66nHkUEaAAqzf'
})

const from = 'Nexmo';
const to = '628558824286';
const text = 'Hello from Nexmo';

nexmo.message.sendSms(from, to, text);

app.listen(3000, ()=>{
    console.log("server 3000 connected")
})