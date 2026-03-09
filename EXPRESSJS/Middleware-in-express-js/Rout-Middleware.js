// Middlewares which are specifically applied to a specific route are called rout Middlewares

import express from 'express'
 const app = express();

 function agecheck(req,resp,next){
    const age = req.query.age
    if(!age){
        resp.send("Please Provide your age")
    }
    else if(age < 18){
         resp.send("Acess Denide. Only  users with 18+ age are alowed to this site")
    }
    else{
        next()
    }
 }




  function urlcheck(req,resp,next){
   console.log("This requst url is :" + req.url)  
   next()
 }


 app.get('/',(req,resp)=>{
    resp.send("<h1>Home Page</h1>")
 })

  app.get('/login',agecheck,urlcheck,(req,resp)=>{
    resp.send("<h1>Login Page</h1>")
 })


  app.get('/users',(req,resp)=>{
    resp.send("<h1>Users Page</h1>")
 })


  app.get('/products',(req,resp)=>{
    resp.send("<h1>Products Page</h1>")
 })



 app.listen(4000)