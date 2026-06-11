import helmet from "helmet";
import config from "./config";
import logger from "./util/logger";
import cors from "cors";
import bodyParser, { urlencoded } from 'body-parser';
import express from "express";
import { requestLogger } from "./middelware/requestLogger";
import route from "./routes/user.route";
import router from "./routes";
const app = express() ;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(requestLogger);

app.use('/',router);

app.use((req,res)=>{
    res.status(404).json({error:"NOt Found "});
})
app.listen(config.port,config.host,()=>{
    logger.info("the app is running on http://%s:%d",config.host,config.port);
    
})