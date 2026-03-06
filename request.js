const http = require("http")

let server = http.createServer((req,res)=>{
    if(req.url === "/")  res.write("<h1>Home Page</h1>")
    else if (req.url ===  "/login")  res.write("<h1>Login Page</h1>")
    else if (req.url === "/contactInfo") res.write("<h1>Contact Imformation</h1>")
    else  res.write("<h1>Other Pages</h1>")
    console.log(req.url)
    res.end()
})
server.listen(1234)