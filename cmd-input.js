// const arg = process.argv;
// console.log("-----------------",arg)
const arg = process.argv;
const http = require("http")
const port = arg[2]
const server = http.createServer((req,res) =>{
    res.write("Testing input from cmd")
    res.end()

})

server.listen(port)