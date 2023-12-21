const {PrismaClient}=require('@prisma/client')

const client=new PrismaClient({
    errorFormat: 'pretty',
  })

class TaskController{

    static getAllTask=async(req,res)=>{
        const allTask=await client.task.findMany({
            where:{
                isDeleted:false
            },
            include:{
                asignedBy:true,
                createdBy:true
            }
        })  
        res.json(allTask)      
    }

    static createTask=async(req,res)=>{
        const newTask=await client.task.create({data:req.body})
        res.json(newTask)
    }

    static updateTaskStatus=async(req,res)=>{
        const id=req.query.id
        const status=req.body.status
        const updatedTask=await client.task.update({where:{id},data:{status:status},})
        res.json(updatedTask)
    }

    static deleteTask=async(req,res)=>{
        const id=req.query.id
        const deleteTask=await client.task.update({where:{id},data:{isDeleted:true}})
        res.json(deleteTask)
    }

}

module.exports={TaskController}