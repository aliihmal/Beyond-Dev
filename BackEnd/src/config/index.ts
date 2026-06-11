import dotenv from "dotenv"
import path from "path"

dotenv.config({path:path.join(__dirname,'../../.env')})
export default{
    logDir:process.env.LOG_DIR || "./logs",
    isDev:process.env.NODE_ENV=="development",
    storagePath:{
        sqlite:'src/Data/database.db',
    },
    port:process.env.PORT?parseInt(process.env.PORT): 3000,
     host: process.env.HOST || 'localhost',
}