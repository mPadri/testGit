const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    return res.send(`welcome`);
})

app.post('/', (req,res)=>{
    let email = req.body.email
    return res.send(`email value ${email}`)
})

app.listen(3000, () => {
    console.log(`server port 3000`);
})

