const express=require("express")
const router=express.Router()

//IMPORT CONTROLLERS
const {getGoals,updateGoal,setGoal,deleteGoal}=require("../controllers/goalControllers")

router.route("/").get(getGoals).post(setGoal)
router.route("/:id").put(updateGoal).delete(deleteGoal)
// router.get("/",getGoals)
// router.post("/",setGoal)
// router.patch("/:id",updateGoal)
// router.delete("/:id",deleteGoal)

module.exports=router