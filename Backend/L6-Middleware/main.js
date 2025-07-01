const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

//app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers)
    req.karan = "I am Karan";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middlware 1") // this line will stop the request from reaching the next middleware or route handler
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.karan = "I am Karan bhai";
    next()
})   

app.get('/', (req, res) => {
    res.send('Hello World!' + req.karan) // req.karan is set by the first middleware
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact Page')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})