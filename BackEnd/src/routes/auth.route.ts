import { Router } from "express";
import { AuthenticationController } from "../controller/auth.controller";
import { AuthenticationManager } from "../services/authenticationManager.service";
import { UserManager } from "../services/userManager.service";
import asyncHandler from "../middelware/asyncHandeler";


const authcontroler = new AuthenticationController(new UserManager(),new AuthenticationManager);

const route = Router();


route.route("/login")
    .post(asyncHandler(authcontroler.login.bind(authcontroler)));


    
export default route;