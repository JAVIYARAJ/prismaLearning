const express=require('express')

const app=express()
const {route}=require('./routes/route')

app.use(express.json())

app.use('/graphql',route)

app.listen(3000,()=>console.log("server is running"))