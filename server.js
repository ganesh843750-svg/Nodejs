const http = require('http')
http.createServer((req,resp)=>{
     resp.write("<h1>This is Ganesh</h1>")
     resp.end("Hello Gani Prabhu")// for small data

}).listen(4800);
const age = 20
http.createServer((req,resp)=>{
     resp.setHeader("Content-Type","text/html")// This is used by the browser to know that this file has html content
     resp.write(`
          <html>
          <head></head>
          <body>
          <h1>This is Ram</h1>
          <h2>${age}</h2>
          <h1>${new Date}</h1>
          </body>
          </html>
          `)
     resp.end()// This will end the server otherwise the server will never end
}).listen(5800);

