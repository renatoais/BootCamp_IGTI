import express from "express"
import carrosRouter from "./carrosRouter"

import winston from "winston"

const app =express()
app.use(express.json())

app.get("/",(req , res ) => {
  res.send("hello worltttd!")

})
app.post("/",(req , res ) => {
  const a =3 
  const b = 5
  const resultado = a+b
  res.send('resultado '+ resultado)

})
////usando parametros no body
app.post("/test",(req , res ) => {
  console.log(req.body)
  res.send('/test')

})

////Parametros na Rota parametro ? é opcional 
app.get("/testParam/:id/:a?", (req,res)=>{
  res.send(req.params.id)
})

///parametros via query http://localhost:3000/testquery?nome=joao&email=joao@gamil.com
app.get("/testquery",(req,res) =>{
  res.send(req.query)


})

app.all("/testall",(req , res ) => {
  res.send(req.method)

})

app.listen(3000,()=>{
  console.log("api started")

})


function callback1(req,res,next){
  console.log("callback 1 ")
  next()
}
function callback2(req,res,next){
  console.log("callback 2 ")
  next()
}
function callback3(req,res,next){
  console.log("callback 3 ")
  res.end()
}
////chamado funções pela requisição da api 
app.get("/testemultiarray",[callback1,callback2,callback3])


///route usando uma callback para cada tipo de requisição
app.route("/testRoute")
.get((req,res)=>{
  res.send("/testroute GET")
})
.post((req,res)=>{
  res.send("/testroute POST")
})
.delete((req,res)=>{
  res.send("/testroute DELETe")
})



/////usando no roteador
app.use("/carros",carrosRouter)


////tratamento de errro 
app.use((err,req,res,next)=>{
  console.log("error1")
  res.status(500).send("ocorreu um erro ")

})


/////usando winston para gravação de logs 
const {combine,printf,label,timestamp} = winston.format

const myFormat = printf(({level,message,label,timestamp}) => {
  return `${timestamp} [${label}] ${level} : ${message}`
})

const logger = winston.createLogger({
  level :"silly",
  transports: [
        new (winston.transports.console)(),
        new (winston.transports.File)({filename:"my_log.log"})
  ],
  format:combine(
    label({label: "my-app"}),
    timestamp(),
    myFormat
  )
})

logger.error("error ")


//////acessando arquivos estaticos 
  app.use(express.static("public")) ///public é o nome da pasta 
  app.use("/images",express.static("public"))
  