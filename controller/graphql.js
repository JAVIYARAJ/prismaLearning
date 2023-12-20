const {PrismaClient, Prisma}=require("@prisma/client")

const client=new PrismaClient({
    errorFormat: 'pretty',
  })

class GraphQlController{

    static getUser= async(req,res)=>{
        const users=await client.user.findMany()
        res.json({"data":users})
    }

    static createUser=async(req,res)=>{
        const newUser=await client.user.create({data:req.body})
        res.json({"data":newUser})
    }

    static changeEmail=async(req,res)=>{
        const {id,email}=req.body
        const updatedUser= await client.user.update({where:{id:id},data:{email:email}})
        res.json(updatedUser)
    }

    static deleteUser=async(req,res)=>{
        const id=req.query.id
        const deletedUser=await client.user.delete({where:{id:parseInt(id)}})
        res.json(deletedUser)
    }

}

module.exports={GraphQlController}