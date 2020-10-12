import express from "express"
import accountsRouter from "./routes/account.js"
import {promises as fs, readFile, write, writeFile } from "fs"
import winston from "winston"
import cors from "cors"
import swaggerUI from "swagger-ui-express"
import {swaggeeDocument} from "./doc.js"


const app = express()
app.use(express.json())
app.use(cors()) ///libera para todos os endspoints
app.use("/doc" , swaggerUI.serve,swaggerUI.setup(swaggeeDocument))

app.use("/account", accountsRouter)
const{combine , timestamp,label,printf} = winston.format
const myFormat = printf(({level , message,labe,timestamp}) => {
  return `${timestamp}[${label}] ${level}:${message}`})
global.logger = winston.createLogger({
  level:"silly",
  transports: [
  //  new(winston.transport.console)(),
 //   new(winston.transport.File)({filename:"my-bank-api.log"})
  ],
  format:combine(label({label:"my-bank-api"}),timestamp(),myFormat)
})

app.listen(3000,async() =>{
  try{
    await fs.readFile("accounts.json")
  }catch(err){
    const initialjson ={
      nextId : 1,
      account: []
    }
    fs.writeFile("accounts.json",JSON.stringify(initialjson)).then(() =>{
     
      logger.info("API Started listen port 3000 and json created" )
    }).catch(err => {
      logger.error(err)
    })
  }
  
})