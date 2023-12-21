const express=require('express')
const {TaskController}=require('../controller/task-controller')

const taskRoutes=express.Router()

taskRoutes.get('/tasks',TaskController.getAllTask);
taskRoutes.post('/createTask',TaskController.createTask);
taskRoutes.put('/updateTaskStatus',TaskController.updateTaskStatus);
taskRoutes.put('/deleteTask',TaskController.deleteTask);

module.exports={taskRoutes}