import express from 'express'
const app = express()



app.get("/",(req,resp)=>{
resp.send("Home Page")
 })

app.get("/user",(req,resp)=>{
resp.send("Home Page")
 })

// forceful error generation
app.get("/error",(req,resp,next)=>{
    const error = new Error('')
        error.status= 404
        next(error)
    
resp.send("Home Page")
 })

//  function errorHandler(err,req,resp,next){
//     resp.status(err.status || 500).send("try after some time")
// }
// app.use(errorHandler)

//or


app.use((err,req,resp,next)=>{
    resp.status(err.status || 500).send("try after some time")
 })

 app.listen(2000)