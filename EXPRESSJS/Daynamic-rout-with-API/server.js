import express from 'express'
import userData from './users.json' with {type : 'json'}
const app = express()

app.get("/",(req,resp)=>{
    resp.send("User list api")
})

app.get("/user",(req,resp)=>{
    resp.send(userData)
})

app.get("/user/:id",(req,resp)=>{
    const id = req.params.id
    let filtereData = userData.filter((user)=> user.id == id)
    resp.send(filtereData)
})

app.get("/username/:name",(req,resp)=>{
    const name = req.params.name
    let filtereData = userData.filter((user)=> user.name.toLowerCase() == name.toLowerCase())
    resp.send(filtereData)
})


app.listen(3200)
