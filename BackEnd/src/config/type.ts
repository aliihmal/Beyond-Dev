import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";
export interface TokenPayload extends JwtPayload{
        userId:string;
}


export interface AuthReq extends Request{
        UserId:string;
}