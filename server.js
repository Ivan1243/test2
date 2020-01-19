const express = require('express')
const app = express()
const port = 3000
process.env.PWD = process.cwd()


app.use(express.static(process.env.PWD + '/img'));

app.get("/", (request, response) => {
    response.send('Hello from Express!')
})

app.get("/abc", (request, response) => {
    response.send('<h1>Hello abc!</h1> <br> <img onclick="hi()" src="/croosshair.png"> <br> <input onclick="hi()" type="text" size="40"> <script> function hi(){ alert("hi");} </script>')
})


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})

