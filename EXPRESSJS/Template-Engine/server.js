import express from 'express'
const app = express()


app.set('view engine','ejs')
app.get('/',(req,resp)=>{
    resp.render("home",{name:'Ganesh A Prabhu', course:"Node js"})
})

app.listen(3200)