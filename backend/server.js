const dotenv=require('dotenv');

// Load env vars
dotenv.config({path:'.config.env'});
const server=require('./app');
const connetDB=require("./config/db")

connetDB()


const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})
 