const express=require("express")
const fs=require("fs")
const color=require("colors")
const morgan=require("morgan")

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//ROUTE PATH
const getrouteGoal = require("./routes/routeGoal")
//PATH TO THE ERROR
 const {handleError}= require("./middleware/errorMiddle")


if(process.env.NODE_ENV==="development"){
    app.use(morgan("dev"))
}




app.use("/api/goal",getrouteGoal)
app.use(handleError)

module.exports=app;