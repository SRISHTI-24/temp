/*const people = require('./person')
console.log(people)   
const rk = new people('rk', '20')
rk.greeting()
*/

const http  = require('http')
const fs = require('fs')
const path = require('path')
const server =  http.createServer((req,res)=>{
    if(req.url === '/')
    {
        fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }
    else if(req.url === '/about')
    {
        fs.readFile(path.join(__dirname,'public','about.html'),(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }
    else if(req.url === '/services')
    {
        fs.readFile(path.join(__dirname,'public','services.html'),(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }
})
server.listen(4000,()=>{
    console.log('server is running at port no 4000')
}) 