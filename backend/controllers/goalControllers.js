const handleAsync=require("express-async-handler")
const { reset } = require("nodemon")
const Goal=require("../models/goalModel")

exports.getGoals=handleAsync(async(req,res)=>{
const goal=await Goal.find()
   res.status(200).json(goal)
} )
exports.setGoal=handleAsync(async(req,res)=>{
 if(!req.body){
res.status(400)
throw new Error("PLEASE ENTER VALUE ");
 }
 const goal=await Goal.create(req.body)

 res.status(200).json({
    status:"success",
    data:{
        goal:goal
    }
 })
 



})
exports.updateGoal= handleAsync(async(req,res)=>{
    const id=await Goal.findById(req.params.id)
    if(!id){
        res.status(400)
        throw new Error("Goal not found ")
    }
    const goalUpdate=await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    })
   
    res.status(200).json({
        status:"success",
        data:{
            goalUpdate
        }
    })
} )

// @desc delete a goal
//@route DELETE /api/goals/:id
// @access Private

exports.deleteGoal=handleAsync(async(req,res)=>{
    const id=await Goal.findById(req.params.id)
    if(!id){
        res.status(400)
        throw new Error("Goal not found ")
    }
    const goalDelete=await Goal.findByIdAndDelete(req.params.id)
   
    res.status(200).json({
        status:"success",
        data:{
            goalDelete
        }
    })
} )