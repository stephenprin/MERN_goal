const mongoose=require("mongoose")


const DB=process.env.DATABASE_NAME.replace('<PASSWORD>', process.env.PASSWORD)


const connetDB=async ()=>{
    try {
     const connt  =await mongoose.connect(DB, {})
     console.log(`database connected successfully ${connt.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports=connetDB 