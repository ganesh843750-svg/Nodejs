const http = require('http')
const fs = require('fs')

http.createServer((req,res)=>{

    let collectHederdata = fs.readFileSync("header.html",'utf-8')
    let collectfootdata = fs.readFileSync('footer.html','utf-8')
    let file = req.url =='/' ? "home.html" : req.url.replace("/","") +".html"

    // if(req.url != '/' &&  req.url != '/favicon.ico'){
    //     file = req.url.replace("/", "") + ".html"
    // }
    // else if(req.url == '/favicon.ico'){
    //     file = req.url
    // }
   // console.log(file)

    if(req.url != "/style.css"){

        fs.readFile(file,'utf-8',(err,data)=>{
        if(err){
            res.writeHead(500, { "content-type":"text/plain",})
            res.end("Internak server eerror")
            return false
        }
        res.write(collectHederdata+""+data + "" +collectfootdata )
        console.log(collectHederdata+""+data + "" +collectfootdata)
        res.end()
    })
    }
    else if(req.url == "/style.css"){
         fs.readFile('style.css','utf-8',(err,data)=>{
        if(err){
            res.writeHead(500, { "content-type":"text/plain",})
            res.end("CSS Not found")
            return false
        }
        res.writeHead(200,{'content-type':'text/css'})
        res.end(data)
    })
    }
    



}).listen(5000)