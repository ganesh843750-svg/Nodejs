import express from 'express'
import { MongoClient } from 'mongodb'

const dbname = "school"
const url = "mongodb://localhost:27017"

const client = new MongoClient(url)
const app = express()
app.set("view engine",'ejs')
app.get('/', async(req,resp)=>{
     await client.connect()
    // Connecting To databse 
    const db = client.db(dbname)
    // Connecting to Database collection
    const collection = db.collection('students')
    //Getting Data from Databse
    const student = await collection.find().toArray()
    console.log(student)

    resp.render('students',{student})
})

app.listen(3200)

