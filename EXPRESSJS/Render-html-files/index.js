import express from 'express'
import path from 'path'

const abspath = path.resolve("./html_pages")
const staticpath = path.resolve('./static_styles')

const app = express()
// To connect css file
app.use(express.static(staticpath))

app.get("/",(req,resp)=>{
    resp.sendFile(abspath + "/home.html")
})

app.get("/login",(req,resp)=>{
    resp.sendFile(abspath + "/login.html")
})
app.post("/submit",(req,resp)=>{
    resp.sendFile(abspath + "/submit.html")
})


// use is a  multi purpose methode used 
app.use((req,resp)=>{
    resp.status(404).sendFile(abspath + "/404.html")
})

app.listen(3000)