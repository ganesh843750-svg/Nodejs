// Understand Express Js Flow 

//const express = require('express')
import express from 'express'
import home from './functions.js';
const app = express();

//or
//const express = require('express')();

app.get("",(req,resp)=>{
    resp.send(home())
})

app.get("",(req,resp)=>{
    resp.send("Home page 2")
})




app.listen(3200)