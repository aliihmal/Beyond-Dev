import { Request,Response, NextFunction,Router } from "express";
import UserRoutes from "./user.route";
import AuthRoutes from "./auth.route"
import CourseRoutes from "./course.route";
import Assignment from "./assignment.route";
const router = Router();

router.get("/",(req,res)=>{
    res.json({message:"hello world"});
})

router.use("/assignment",Assignment);
router.use("/auth",AuthRoutes);
router.use("/user", UserRoutes);
router.use("/course",CourseRoutes);
export default router;