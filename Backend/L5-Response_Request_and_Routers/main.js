const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

// now we will use a get request to send a file
app.get('/index', (req, res) => {
    console.log("Hey its a get request for index")
    res.sendFile(__dirname + '/templates/index.html')
})

// now we will use a get request to send a json response
app.get('/api', (req, res) => {
    res.json({a: 1, b: 2, c: 3, d: 4})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})