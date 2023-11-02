const http = require('http')
const fs = require('fs')

const indexPage = fs.readFileSync("./index.ejs", "ascii")

const server = http.createServer((req, res)=>{
    res.end(`${indexPage}`)
})


server.listen("3001", ()=>{
    console.log('server running at 3001')
})