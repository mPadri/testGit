const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email
    
    return res.send(`The email value is ${email}`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/persegi', (req,res)=>{
    var x, y, z
    
    x = parseInt(req.body.x)
    y = parseInt(req.body.y)
    z = x * y

    return res.send(`luas persegi ${z}`)
})

app.post('/trapesium', (req,res)=>{

    let sisiA, sisiB, tinggi, luas

    sisiA = parseInt(req.body.sisiA)
    sisiB = parseInt(req.body.sisiB)
    tinggi= parseInt(req.body.tinggi)
    luas = (sisiA + sisiB)*tinggi/2

    return res.send(`luas trapesium ${luas}`)
    
})

app.post('/segitiga', (req,res)=>{
    let alas,tinggi,luas

    alas = parseInt(req.body.alas)
    tinggi= parseInt(req.body.tinggi)
    luas = alas*tinggi/2

    return res.send(`luas segitiga ${luas}`)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
