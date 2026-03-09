import express from 'express'

const app = express();

function agecheck(req,resp,next){
    const age = req.query.age

    if(!age){
        resp.send("Please Provide Your age")
    }
    else if(age < 18){
        resp.send("Acess Denide. You must be 18+")
    }
    else{
        next()
    }
}



app.get("/",(req,resp)=>{
    resp.send("Home Page")
})

app.get("/user",(req,resp)=>{
    resp.send("user Page")
})

app.get("/product",(req,resp)=>{
    resp.send("product Page")
})


app.listen(7000)

