import { Request, Response } from "express";
import { UserManager } from "../services/userManager.service";
import { BadRequestException } from "../util/Exception/httpsException";
import { userBuilder } from "../model/builder/user.builder";
import { generateUUID } from "../util";

export class userController{
    constructor(private userService : UserManager){}

    public async createUser(req:Request,res:Response):Promise<void>{
        const {name,email,password,major} = req.body;
        if(!name || !email || !password || !major){
            throw new BadRequestException("name , email ,password and major are required",{
                name:!name,
                email:!email,
                major:!major,
                password:!password
            })
        }
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        res.status(400).json({ message: 'Invalid email format' });
        return;
        }
        const user = userBuilder.newUserBuilder().setEmail(email).setName(name).setPassword(password).setMajor(major).setId(generateUUID("user")).build();
        const id = await this.userService.create(user);
        res.status(200).json({message:"user of id " + id + "is created succesfully"});
    }
    public async getuser(req:Request,res:Response):Promise<void>{
        const id =req.params.id as string;
        const user  = await this.userService.getUser(id);
        res.status(200).json({user:user});
    }
    public async getAllUser(req:Request,res:Response):Promise<void>{
        const users = await this.userService.getAllUser();
        res.status(200).json({users:users});
    }
    public async updateUser(req:Request,res:Response):Promise<void>{
        const {name,email,password,major} = req.body;
        const user = userBuilder.newUserBuilder().setEmail(email).setName(name).setMajor(major).setPassword(password).build();
        await this.userService.updateUser(user);
        res.status(200).json({messge:"user was updated succesfuly "});
    }
    public async deleteUser(req:Request,res:Response):Promise<void>{
        const id  = req.params.id as string;
        await this.userService.deleteUser(id);
        res.status(200).json({message:"user of id " + id + " was deleted susesfuly"})
    }
    
}