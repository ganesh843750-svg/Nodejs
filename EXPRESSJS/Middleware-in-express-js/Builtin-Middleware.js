import express from 'express'
const app = express()


// To get data entered in the form or input feild
app.use(express.urlencoded({extended:false}))
app.get("/",(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
})


app.get("/login",(req,resp)=>{
    resp.send(`
        <form action="/submit", method="post">
        <input type="text" placeholder="Enter name" name="name" >
         <input type="text" placeholder="Enter Password" name="password">
         <button>Submit</button>
         </form>
        `)
})

app.get("/user",(req,resp)=>{
    resp.send("<h1>Users Page</h1>")
})

app.get("/product",(req,resp)=>{
    resp.send("<h1>Product Page</h1>")
})

app.post("/submit",(req,resp)=>{
    console.log(req.body)
    resp.send("<h1>Data submitted Sucessfully</h1>")
})



app.listen(3000)