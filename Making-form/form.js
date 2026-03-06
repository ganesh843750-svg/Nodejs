const fs = require('fs')
const http = require('http')
const querystring = require('querystring')
let readabledata 

// const server = http.createServer((req,res) =>{
//     res.writeHead(200,{"content-type":"text/html"})
//     console.log(req.url)
//     if(req.url === '/'){
// res.write(`
//        <form action="/Submit" method="post">
//        <input type="text" placeholder="Enter Name" name='name'/>
//        <input type="text" placeholder="Enter Email" name='email'/>
//        <button>Submit</button>
//        </form>
//        `
//     )
    
//     }
//     else if(req.url ===  '/Submit'){
//         res.write('<h1>Data Submited</h1>')
//     }

    
// res.end()
// })
// server.listen(3000)


const server = http.createServer((req,res) =>{
    if(req.url === '/' && req.method === 'GET'){
          fs.readFile('form.html',"utf-8",(err,data) =>{
        if(err){
            res.writeHead(500,{"content-type":'text/plain'})
            return res.end("Internal Server Error")
        }
        else{
        res.writeHead(200,{"content-type":'text/html'})
        res.end(data)
        }
    })
    }
    else if(req.url === '/Submit' && req.method === 'POST'){    
     res.writeHead(200,{"content-type":'text/html'})
     let databody = []
     req.on('data',(chunk)=>{
        databody.push(chunk)
     })
     req.on('end',()=>{
        let rowData = Buffer.concat(databody).toString()
        readabledata = querystring.parse(rowData)
        // syncronous File writing
        // fs.writeFileSync('./Gani.txt',
        //     `
        //     Name:${readabledata.name}
        //     Email : ${readabledata.email}
        //     `)

        // asyncronous File writing
        fs.writeFile(`./${readabledata.name}.txt`,
             `
            Name:${readabledata.name}
            Email : ${readabledata.email}
            `,
            'utf-8',(err)=>{
            if(err){
                res.end('Internal Server Error')
                return false
            }

             fs.readFile(`./${readabledata.name}.txt`,'utf-8',(err,data)=>{
    if(err){
        return false
    }
    else{
        console.log(data)
    }
})
        })
       
        res.end(`<h1>Data Submited and File Created Successfully</h1>`) 
     })
    
    }
    else{
    res.writeHead(404,{"content-type":'text/html'})
     res.end('<h1>Other Page</h1>')
    }

    })

server.listen(3000)

