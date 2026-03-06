const http = require("http")
  const userdata = [
        {
            name:'Gani',
            age:30,
            email:'ganesh843750bh@bjhgmail.comnnj'
        },
         {
            name:'Ram',
            age:30,
            email:'Ram843750bh@bjhgmail.comnnj'
        },
         {
            name:'Raj',
            age:30,
            email:'Raj843750bh@bjhgmail.comnnj'
        },
    ]
let server =http.createServer((req,res) => {
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify(userdata))
    res.end()
})

server.listen(5800)