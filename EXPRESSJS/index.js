const express = require('express')

const app = express();

app.get("",(req,resp)=>{
    resp.send("<h1>Basic Node Js Exaple</h1>")
})
app.listen(3200)