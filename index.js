const express = require("express")
const app = express()
const { bookRouter } = require("../evaluation/routes/book.routes")
require('dotenv').config()
const {connect} = require("./config/db")
app.use(express.json())
app.get("/",(req,response) => {
    response.send({"msg":"surver sucess.."})
})

app.use("/books", bookRouter)

app.listen(process.env.port,async () => {
    try{
     await connect;
     console.log("connected")     
    }
     catch(err){
        console.log("failed",err)      
     }
    console.log(`welcome port ${process.env.port}`)
})