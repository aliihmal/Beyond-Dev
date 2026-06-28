import { Request, Response } from "express";
import { AuthenticationManager } from "../services/authenticationManager.service";
import { UserManager } from "../services/userManager.service";
import { BadRequestException } from "../util/Exception/httpsException";

export class AuthenticationController{
    constructor(private userservice:UserManager,private authservice :AuthenticationManager){}
    async login(req:Request,res:Response){
        const {email,password} = req.body;
        if(!email || !password){
            throw new BadRequestException("email and password are both required during login",{
                email:!email,
                password:!password
            });
        }
         const user= await this.userservice.validateuser(email,password);
        res.status(200).json({
            message:'login successfuly alii',
            token:this.authservice.generateToken(user.id),
            user:user
        })
    }
}