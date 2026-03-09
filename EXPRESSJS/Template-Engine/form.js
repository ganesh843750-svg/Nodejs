import express from 'express'
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.get('/',(req,resp)=>{
    resp.send(`<a href="user-info"><button> Click Here to Enter your Information</button></a><br><br>
        <a href="users"><button>Get Users list</button></a>

        `)
})
app.get("/user-info",(req,resp)=>{
    resp.render('form')
})

app.post("/submit",(req,resp)=>{
    resp.render('adduuser', req.body)
})


app.get("/users",(req,resp)=>{
    const users = ['Gani','Hari','Gaja','Ram','Sitha','Adi']
    resp.render('users',{user:users})
})


app.listen(3000)