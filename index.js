// .env

require('dotenv').config()

// import express
 const express = require('express')

 // import cors
const cors= require('cors')

// create application

const examServer = express()

//import  jwt
const jwtmiddleware=require('./Middleware/jwtMiddleware')

// import DB
const db = require('./Db/connection')

//import routes

const router = require('./Routes/router')

//middleware use (craete middleware to parse json data)
examServer.use(express.json()) // to parse middleware
examServer.use(cors())
examServer.use(router)
 // (3 things to use)

 // to connect to frontend

 const PORT = 8000 || process.env.PORT
 examServer.listen(PORT,()=>{
    console.log(' ExamServer is listening to the PORT ',+ PORT);
 })

 examServer.get('/',(req,res)=>{
    res.send('<h1>examServer listening</h1>')
 })