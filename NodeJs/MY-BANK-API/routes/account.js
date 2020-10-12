import express  from "express"
import {promises as fs, readFile, write, writeFile } from "fs"
///ferramenta para gravação de log


const router = express.Router()

global.FileName = "accounts.json"


/////metodo post
router.post("/",async (req,res)=>{
  try{
  let account = req.body
  const data =  JSON.parse(await fs.readFile(global.FileName))
  account = {id: data.nextId++ , ...account}
  data.account.push(account)
  await fs.writeFile(global.FileName , JSON.stringify(data,null,2))
  res.send(account)
  }catch(err){
    res.status(400).send({error: err.message })
  }
})

////metodo get para retornar todos 
router.get("/",async (req,res) => {
  try{

    const data = JSON.parse(await fs.readFile(global.FileName))
    delete data.nextId
    res.send(data)
  }catch(err){
    res.status(400).send({error: err.message})
  }
})

///get apartir do ID da rota
router.get("/:id",async (req,res) => {
  try{
    const data = JSON.parse(await fs.readFile(global.FileName))
    const account = data.account.find(account => account.id === parseInt(req.params.id ))
    res.send(account)
  }catch(err){
    res.status(400).send({error: err.message })
  }
})


////Delete
router.delete("/:id",async (req,res) => {
  try{
    const data = JSON.parse(await fs.readFile(global.FileName))
    data.account = data.account.filter(account => account.id !== parseInt (req.params.id ))
    await fs.writeFile(global.FileName,JSON.stringify(data,null,2))
    res.send("Registro "+req.params.id+" Deletado")
    res.end()
  }catch(err){
    res.status(400).send({error: err.message })
  }
})

////PUT atualização de forma integral 

router.put("/",async (req,res) => {
  try{
    const account = req.body
    const data = JSON.parse(await fs.readFile(global.FileName))
    const index = data.account.findIndex(a => a.id === account.id)
    data.account[index] = account

    await fs.writeFile(global.FileName, JSON.stringify(data))
        res.send(account)
  }catch(err){
    res.status(400).send({error: err.message })
  }
})

///PATCH atualização parcial dos campos
router.patch("/updateBalance",async (req,res,err) => {
  try{
    const account = req.body
    const data = JSON.parse(await fs.readFile(global.FileName))
    const index = data.account.findIndex(a => a.id === account.id)
    
    data.account[index].balance = account.balance

    await fs.writeFile(global.FileName, JSON.stringify(data))
        res.send(data.account[index])
  }catch(err){
    next(err)
  }
})

///tratamento de erro 
router.use((err,rq,res,next) => {
  logger.error(`${err.message}`)
  res.status(400).send({error: err.message})
})


export default router