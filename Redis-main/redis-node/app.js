const express=require('express')
require('./db/mongoose')
const UserRoute=require("./routers/user")
const cors = require('cors')
const app=express()
app.use(cors()); 
app.use(express.json())

app.use(UserRoute)

module.exports=app