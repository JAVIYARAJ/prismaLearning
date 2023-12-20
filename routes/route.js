const express=require('express')

const {GraphQlController}=require('../controller/graphql')

const route=express.Router()


route.get('/users',GraphQlController.getUser);
route.post('/createUser',GraphQlController.createUser);
route.put('/changeEmail',GraphQlController.changeEmail);
route.delete('/deleteUser',GraphQlController.deleteUser);

module.exports={route}