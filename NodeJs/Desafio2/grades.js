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

////Delete
router.delete("/:id",async (req,res) => {
  try{
    const data = JSON.parse(await fs.readFile(global.FileName))
    data.grades = data.grades.filter(grades => grades.id !== parseInt (req.params.id ))
    await fs.writeFile(global.FileName,JSON.stringify(data,null,2))
    res.send("Registro "+req.params.id+" Deletado")
    res.end()
  }catch(err){
    res.status(400).send({error: err.message })
  }
})


///get apartir do ID da rota
router.get("/:id",async (req,res) => {
  try{
    const data = JSON.parse(await fs.readFile(global.FileName))
    const grades = data.grades.find(grades => grades.id === parseInt(req.params.id ))
    res.send(grades)
  }catch(err){
    res.status(400).send({error: err.message })
  }
})


///get somando total notas e curso 

router.get("/",async (req,res) => {
  try{
    let grade = req.body
    let sumNotes = 0
    const data = JSON.parse(await fs.readFile(global.FileName))
    data.grades = data.grades.filter(grades => grades.student === grade.student && grades.subject === grade.subject)
    data.grades.forEach(notas => {
      sumNotes = sumNotes+ notas.value
    });
    console.log(sumNotes)
    res.send("Soma Total da notas :" + parseInt (sumNotes) + " Aluno : " +grade.student + " Curso "+grade.subject )
  }catch(err){
    res.status(400).send({error: err.message })
  }
})


///get media 
/*
router.get("/",async (req,res) => {
  try{
    let grade = req.body
    let sumNotes = 0 
    let avgNotes = 0
    let countNotes = 0 
    const data = JSON.parse(await fs.readFile(global.FileName))
    data.grades = data.grades.filter(grades => grades.type === grade.type && grades.subject === grade.subject)
    data.grades.forEach(notas => {
      sumNotes = sumNotes + notas.value
      countNotes = countNotes +1 
    });
    avgNotes = (sumNotes / countNotes)
    res.send("Média das Notas  :" + avgNotes.toFixed(2) + " tipo : " +grade.type + " Curso "+grade.subject )
  }catch(err){
    res.status(400).send({error: err.message })
  }
})
*/

///Somar as maiores notas
/*
router.get("/",async (req,res) => {
  try{
    let grade = req.body
    const data = JSON.parse(await fs.readFile(global.FileName))
    data.grades = data.grades.filter(grades => grades.type === grade.type && grades.subject === grade.subject)
    data.grades.sort(function (a, b) {
      if (a.value > b.value) {
        return -1;
      }
      if (a.value < b.value) {
        return 1;
      }
      return 0;
    });
    
    res.send("maiores notas " + JSON.stringify(data.grades,null,2))
  }catch(err){
    res.status(400).send({error: err.message })
  }
})
*/

export default router