import express from 'express'
import { handleusers } from './contriller/usercontriller.js'
const app = express()
app.set('view engine','ejs')
app.get('/users',handleusers)

app.listen(3200)