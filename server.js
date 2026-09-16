const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
const {Router}=require("./routes/studentRoute.js")
const {configdb}=require("./config/db.js")
const port=5001
app.use("/ma",Router)
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})