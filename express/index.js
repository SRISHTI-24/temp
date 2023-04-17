const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>')
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log('server is running at '+ PORT)
})