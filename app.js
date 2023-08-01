const express = require('express')
const path = require ('path')

const app = express()
const port = 3000

//template engine setup
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))

//middleware bodyparser
app.use(express.urlencoded({ extended: false }))

const database = [
    {
    "id": 1,
    "name": "foxa",
    "image": "https://randomfox.ca/images/19.jpg"
    },

    {
        "id": 2,
        "name": "foxe",
        "image": "https://randomfox.ca/images/18.jpg"
    },

    {
        "id": 3,
        "name": "foxi",
        "image": "https://randomfox.ca/images/17.jpg"
    },

    {
        "id": 4,
        "name": "foxo",
        "image": "https://randomfox.ca/images/16.jpg"
    },
            
    {
        "id": 5,
        "name": "foxu",
        "image": "https://randomfox.ca/images/15.jpg"
    },

]

// function cekToken(req, res, next){
//     console.log('check token')
//     console.log('check data')
//     next()
// }
app.get('/',(req, res)=>{
    res.render('home.ejs',{
        foxies: database
    })
})

app.post('/',(req, res)=>{
    let newFox = {
        name: req.body.name,
        image: req.body.image
    }
    database.push(newFox)
    res.redirect('/')
})


app.listen(port,()=>{
    console.log('aplikasi ini running di port: ', port)
})

// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer(function(req,res){
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.end ('Halo Devin')
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`)
// })