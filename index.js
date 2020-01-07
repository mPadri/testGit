const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// app.get('/', (req,res)=>{
//     return res.send(`welcome`);
// })

app.post('/', (req,res)=>{
    let email = req.body.email
    return res.send(`email value ${email}`)
})

app.get('/', (req,res)=>{
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`value z is ${z}`)
})

app.post('/tambah', (req,res)=>{
    var a, b, c

    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)

    return res.send(`result value ${c}`)
})

app.listen(3000, () => {
    console.log(`server port 3000`);
})

