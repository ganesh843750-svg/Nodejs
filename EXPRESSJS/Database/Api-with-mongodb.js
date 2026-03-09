import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const dbname = "school"
const url = "mongodb://localhost:27017"


const client = new MongoClient(url)
const app = express()
app.set("view engine",'ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
client.connect().then((connection)=>{
   const db = connection.db(dbname)
    app.get('/api',async (req,resp)=>{
        const collection = db.collection('students')
        const student = await collection.find().toArray()
        console.log(student)
        resp.send(student)
    })
    app.get('/form',async (req,resp)=>{
       resp.render('form')
    })
    app.post("/submit",async (req,resp)=>{
        console.log(req.body)
        const collection = await db.collection('students').insertOne(req.body)
        resp.send("data inserted")
    })

    app.get('/student-info',async (req,resp)=>{
         const collection = db.collection('students')
        const student = await collection.find().toArray()
        console.log(student)
       resp.render('students',{student})
    })

    app.post("/add-student-api",async (req,resp)=>{
        console.log(req.body)
        const {name,age,email}= req.body
        if(!name || !age || !email){
            resp.send({message:"operation faild",success: false})
            return false
        }
         const collection = db.collection('students')
         const result = await collection.insertOne(req.body)
        resp.send({message:"Data stored",success: true,result:result})
    })

    app.delete("/delete/:id", async (req,resp)=>{
        console.log(req.params.id)
        const collection = db.collection("students")
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.send({
                message:"student data deleted",
                success:true
            })
        }
        else{
            resp.send({
                message:"student data not deleted",
                success:false
            })
        }
        resp.send("working")
    })

     app.get("/ui/delete/:id", async (req,resp)=>{
        console.log(req.params.id)
        const collection = db.collection("students")
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            resp.send("<h1>student data deleted</h1>")
            }
        else{
           resp.send("<h1>student data not deleted</h1>")
        }
        resp.send("working")
    })


})

app.listen(3200)

