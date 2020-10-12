import express from "express"
import {promises as fs, readFile, write, writeFile } from "fs"
import gradesRouter from "./grades.js"

const app = express()
app.use(express.json())
app.use("/grades", gradesRouter)



app.listen(3000,async() =>{
  try{
    console.log("API Started listen port 3000 " )
  }catch(err){
     console.log("erro : "+ err.message)
  }
  
})
