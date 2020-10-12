import express  from "express"
import {promises as fs, readFile, write, writeFile } from "fs"

const router = express.Router()
const Timestamp = Date()


global.FileName = "./grades.json"

///Metodo Post 
router.post("/",async (req,res)=>{
  try{
  let grades = req.body
  const data = JSON.parse(await fs.readFile(global.FileName))
  grades = {id: data.nextId++ , ...grades,timestamp: Timestamp , }
  data.grades.push(grades)
  await fs.writeFile(global.FileName , JSON.stringify(data,null,2))
  res.send(grades)

}catch(err){
    res.status(400).send({error: err.message })
  }
})

////Metodo PUT atualização de forma integral 
router.put("/",async (req,res) => {
  try{
    let grades = req.body
    const data = JSON.parse(await fs.readFile(global.FileName))
    const index = data.grades.findIndex(a => a.id === grades.id)
    data.grades[index] = {...grades ,timestamp: Timestamp }

    await fs.writeFile(global.FileName, JSON.stringify(data,null,2))
        res.send(data.grades[index])
  }catch(err){
    res.status(400).send("ID não Localizado "+{error: err.message })
  }
})











export default router