const express = require('express')
const bodyParser = require('body-parser');
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y
    // console.dir(req.path)

    return res.send(`The value of z is ${z}`)
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    return res.send(req.params)
})

app.get('/users/:userId', (req, res) => {
    // console.dir(req.path)
    // console.dir(req.params.userId)
    // console.dir(req.originalUrl)
    // return res.send(req.params)
    // return res.clearCookie('userId').redirect(301, '/')
    // return res.cookie('userId','tes').redirect(301, '/')
    
    // res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
    // res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })

    return res.format({
        'text/plain': function () {
          res.send('hey')
        },
      
        'text/html': function () {
          res.send('<h1>hey</h1>')
        },
      
        'application/json': function () {
          res.send({ message: 'hey' })
        },
      
        'default': function () {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable')
        }
      })
})

app.post('/', (req, res) => {
    // let email = req.query.email
    let email = req.body.email

    return res.send(`The email value is ${email}`)
})

app.get('/example/a', (req, res) => {
    res.send('Hello from A !')
})

app.get('/example/b', (req, res, next) => {
    console.log('the response will be sent by the next function..')
    next()
}, (req, res) => {
    res.send('Hello from B !')
})

// combine function request

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
}


var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
}

app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
}, function (req, res) {
    console.log('from D')
    // res.send('Hello from D!')
    // res.status(200).send('oke')
})
// --------------------------------------------------
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

app.post('/persegi', (req, res) => {
    var x, y, z

    x = parseInt(req.body.x)
    y = parseInt(req.body.y)
    z = x * y

    return res.send(`luas persegi ${z}`)
})

app.post('/trapesium', (req, res) => {

    let sisiA, sisiB, tinggi, luas

    sisiA = parseInt(req.body.sisiA)
    sisiB = parseInt(req.body.sisiB)
    tinggi = parseInt(req.body.tinggi)
    luas = (sisiA + sisiB) * tinggi / 2

    return res.send(`luas trapesium ${luas}`)

})

app.post('/segitiga', (req, res) => {
    let alas, tinggi, luas

    alas = parseInt(req.body.alas)
    tinggi = parseInt(req.body.tinggi)
    luas = alas * tinggi / 2

    return res.send(`luas segitiga ${luas}`)
})

app.post('/user', (req, res) => {
    // let email = req.query.email
    let user = req.body.user

    // return res.send(`The email value is ${user}`)
    return res.json(user)
})

app.put('/user/:name',(req,res)=>{
    return res.send(`user ${req.params.name} telah di edit`)
})

app.delete('/user/:name', (req,res)=>{
    return res.send(`nama ${req.params.name} telah dihapus`)
})

let db = [
    {
        id: 1,
        name: 'Warior',
        attack: 100,
        defence: 50,
        agility: 30,
        magic: 0,
    },
    {
        id: 2,
        name: 'Mage',
        attack: 10,
        defence: 20,
        agility: 50,
        magic: 100,
    },
];

app.get('/jobs', (request, response) => {
    return response.json(db);
});

// memberikan job spesifik sesuai dengan nama yang ada pada url/detail
app.get('/jobs/:name', (request, response) => {
    const result = db.filter(val => {
        // console.log(val.magic)
        return val.name.toLocaleLowerCase() === request.params.name.toLocaleLowerCase();
    });
    // console.log('dari result',result[0].attack)
    return response.json(result);
});

// memasukan job baru
app.post('/jobs', (request, response) => {
    const newJob = {
        id: db.length + 1,
        name: request.body.name,
        attack: request.body.attack,
        defence: request.body.defence,
        agility: request.body.agility,
        magic: request.body.magic,
    };

    db.push(newJob);
    
    return response.json(newJob);
});

// menghapus job yang ada
app.delete('/jobs/:name', (request, response) => {
    db = db.filter(val => {
        return val.name.toLocaleLowerCase() !== request.params.name.toLocaleLowerCase();
    });

    return response.json(db);
});

// mengubah data jobs
app.put('/jobs/:name', (req,res)=>{
    const thejob = db.filter(val=>{
        return val.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase()
    })

    if(thejob === null){
        return res.json('Not found')
    }

    const newJob = {
        id: thejob[0].id,
        name: req.body.name || thejob[0].name,
        attack: req.body.attack || thejob[0].attack,
        defence: req.body.defence || thejob[0].defence,
        agility: req.body.agility || thejob[0].agility,
        magic: req.body.magic || thejob[0].magic
    }

    db.push(newJob)
    return res.json(newJob)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
