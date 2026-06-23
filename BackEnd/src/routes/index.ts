import { Request,Response, NextFunction,Router } from "express";
import UserRoutes from "./user.route";
import AuthRoutes from "./auth.route"
import CourseRoutes from "./course.route";
import Assignment from "./assignment.route";
import { Authenticate } from "../middelware/auth";
import { AuthReq } from "../config/type";
const router = Router();

router.get("/",(req,res)=>{
    res.json({message:"hello world"});
})

router.use("/assignment",Authenticate,Assignment);
router.use("/auth",AuthRoutes);
router.use("/user",Authenticate, UserRoutes);
router.use("/course",Authenticate,CourseRoutes);
export default router;