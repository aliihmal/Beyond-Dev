import { Request,NextFunction, Response } from "express";
import { AuthReq } from "../config/type";
import { AuthenticationManager } from "../services/authenticationManager.service";
import { AuthenticationFailed } from "../util/Exception/authenticationException";

const authenticationservice = new AuthenticationManager();
export function Authenticate(req:Request,res:Response,next:NextFunction){
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token){
        throw new AuthenticationFailed();
    }
    const payload = authenticationservice.verifyToken(token);
    (req as AuthReq).UserId =payload.userId;
    next();
}