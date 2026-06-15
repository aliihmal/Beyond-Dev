import { promises } from "node:dns";
import { User } from "../model/user.model";
import { DBexception, InitializabelException } from "../util/Exception/RepoException";
import logger from "../util/logger";
import { ConnectionManager } from "./ConnectionManager";
import { id, Initializabel, IRpository } from "./IRepository";
import { notFoundExceptiong } from "../util/Exception/NoteFoundException";



const CREATE_TABLE =  `CREATE TABLE IF NOT EXISTS "user"(
                                    id TEXT PRIMARY KEY,
                                    name TEXT NOT NULL,
                                    email TEXT NOT NULL,
                                    password TEXT NOT NULL,
                                    major TEXT NOT NULL
                                    )`;
                                    
const CREATE_USER = `INSERT INTO "user" (id,name,email,password,major)  VALUES (?,?,?,?,?) `;

const GET_ID = `SELECT * 
                FROM "user" 
                WHERE id = ?`;

const UPDATE_ID = `UPDATE "user"
                   SET name = ?, email = ?, password = ?, major = ?
                   WHERE id = ?`;

const GET_ALL =`SELECT * 
                FROM "user"`;

const DELETE_ID = `DELETE FROM "user"  WHERE id = ? `;
const GET_EMAIL = `SELECT * FROM "user" WHERE email= ? `;
export class UserRepostory implements IRpository<User>,Initializabel{
    async init(): Promise<void> {
        try{
            const conn = await ConnectionManager.getConnection();
            await conn.exec(CREATE_TABLE);
            logger.info("table user Created succsfully");
        }catch(error){
            throw new InitializabelException("Error while initializing the User Table",error as Error);
        }
    }
    async create(item: User): Promise<id> {
        try{
            const conn =await ConnectionManager.getConnection();
            await conn.run(CREATE_USER,[item.id,item.name,item.email,item.password,item.major]);
            logger.info("User added succesfuly");
            return item.id;
        }catch(error){
            throw new DBexception("Error while adding the user of id " + item.id ,error as Error);
        }
    }
    async get(id: id): Promise<User> {
       try{
        const conn = await ConnectionManager.getConnection();
        const user = await conn.get<User>(GET_ID,[id]);
        if (!user ){
            throw new Error("user  not found");
        }
        logger.info("user retrieved succsefully from DB");
        return user;
       }catch(error){
         logger.error("The user of id " + id + " isn't found");
            throw new DBexception("The user of id " + id + " isn't found",error as Error);
           
       }
    }
     async getAll(): Promise<User[]> {
       try{
        const conn =await ConnectionManager.getConnection();
        const users = await conn.all<User[]>(GET_ALL);
       
        logger.info("All the user are retriedved sussefully ");
        return users;
       }catch(error){
        logger.error("error while retriving all the users ");
        throw new DBexception("error while retriving all the users " ,error as Error);
       }
    }
    async update(item: User): Promise<void> {
        try{
            const conn = await ConnectionManager.getConnection();
            await conn.run(UPDATE_ID,[item.name,item.email,item.password,item.major,item.id])
            logger.info("User of id" + item.id + " updated succesfuly");
        }catch(error){
            logger.error("error while updating user of id " + item.id);
            throw new DBexception("error while updating user of id " + item.id,error as Error);
        }
    }
    async delete(id: id): Promise<void> {
       try{
            const conn = await ConnectionManager.getConnection();
            await conn.run(DELETE_ID,id)
            logger.info("User of id" + id + " Deleted succesfuly");
        }catch(error){
            logger.error("error while deleting user of id " + id);
            throw new DBexception("error while deleting user of id " + id,error as Error);
        }
    }

    async findByEmail(email:string):Promise<User>{
        try{
            const conn =await ConnectionManager.getConnection();
            const user = await conn.get<User>(GET_EMAIL,email);
            if(!user){
             throw new notFoundExceptiong("user of email" + email + " was not found");
            }
            return user
        }catch(error){
            logger.error("error while getting user of email" + email);
            throw new DBexception("error while getting user of email" + email,error as Error);
        }
        
    }

}

export async function  CreateUserRepo ():Promise<UserRepostory>{
    const userRepo = new UserRepostory();
    await userRepo.init();
    return userRepo;
}