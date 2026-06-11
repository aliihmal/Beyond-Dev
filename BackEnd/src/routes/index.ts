import { Request,Response, NextFunction,Router } from "express";
import UserRoutes from "./user.route";

const router = Router();

router.get("/",(req,res)=>{
    res.json({message:"hello world"});
})



router.use("/user", UserRoutes);
export default router;