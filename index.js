const express=require('express')

const app=express()
const {route}=require('./routes/route')
const {taskRoutes}=require('./routes/task-route')

app.use(express.json())

app.use('/graphql',route)
app.use('/task',taskRoutes)

app.listen(3000,()=>console.log("server is running"))