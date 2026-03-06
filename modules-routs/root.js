const userform = require('./form')
const http = require('http')

http.createServer((req,res) =>{
    res.writeHead(200,{"content-type":"text/html"})
    if(req.url === "/" && req.method === "GET"){
            res.end(userform(req,res))
    }
    else if (req.url === "/Submit" && req.method === "POST"){
        res.end("<h1>Data Submitted successfully</h1>")
    }
    else{
        res.end("<h1>Other Page<h1>")
    }
    res.end()
}).listen(5000)