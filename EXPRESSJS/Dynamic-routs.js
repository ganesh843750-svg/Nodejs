import express from 'express'
const app = express()

app.get('/',(req,resp)=>{
    const users = ['anil','Gani','Hari','Gaja','ram','Sitha']
    let data = `<ul>`

    for (let i=0;i<users.length;i++){
        data += `<li><a href="user/${users[i]}">${users[i]}</li>`
        console.log(users[i])
    }
    data += `</ul>`
    resp.send(data)
})
app.get("/user/:name", (req,resp)=>{
    
    resp.send(`This is ${req.params.name} Profile page`)
})
app.listen(2000)