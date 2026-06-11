import { Router } from "express";
import { userController } from "../controller/user.controller";
import { UserManager } from "../services/userManager.service";
import asyncHandler from "../middelware/asyncHandeler";

const usercontroller = new userController(new UserManager());



 const route = Router();

route.route("/")
    .post(asyncHandler(usercontroller.createUser.bind(usercontroller)))


export default route;