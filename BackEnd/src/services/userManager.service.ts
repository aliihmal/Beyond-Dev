import { User } from "../model/user.model";
import { id } from "../Repository/IRepository";
import {  CreateUserRepo, UserRepostory } from "../Repository/user.Repo";

export class UserManager {
    private  userRepo!:UserRepostory;
    async getRepo():Promise<UserRepostory>{
        if(!this.userRepo){
            this.userRepo = await  CreateUserRepo();

        }
        return this.userRepo;
    }
    async create(user:User):Promise<id>{
        
           const id = await (await this.getRepo()).create(user);
           return id;
        
    }
    async getUser(id:id):Promise<User>{
        const user =await (await this.getRepo()).get(id);
        return user;
    }
    async getAllUser():Promise<User[]>{
        const users = await (await this.getRepo()).getAll();
        return users;
    }
    async updateUser(user:User):Promise<void>{
       await (await this.getRepo()).update(user);
       
    }
    async deleteUser(id:id):Promise<void>{
        await (await this.getRepo()).delete(id);
    }
}